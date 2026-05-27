/**
 * Simple in-memory sliding-window rate limiter.
 *
 * Per-IP, per-route. Good enough for low-volume contact forms on a single
 * server instance.
 *
 * Limits and serverless caveats:
 *   - In a multi-instance serverless deployment (Vercel, Cloudflare Workers
 *     with multiple isolates, etc), counts are NOT shared across instances.
 *     Each cold-start gets its own map. That is fine for spam shaping; it is
 *     not a substitute for a real bot-defense layer.
 *   - For higher traffic, swap this out for Upstash Redis or similar.
 */

const buckets = new Map<string, number[]>();

export type RateLimitResult = {
  ok: boolean;
  /** How many requests are still allowed in the current window. */
  remaining: number;
  /** Unix ms when the next slot frees up. */
  retryAt: number;
};

export function rateLimit(
  key: string,
  options: { windowMs: number; max: number },
): RateLimitResult {
  const { windowMs, max } = options;
  const now = Date.now();
  const cutoff = now - windowMs;

  const recent = (buckets.get(key) ?? []).filter((ts) => ts > cutoff);

  if (recent.length >= max) {
    const oldest = recent[0];
    buckets.set(key, recent);
    return {
      ok: false,
      remaining: 0,
      retryAt: oldest + windowMs,
    };
  }

  recent.push(now);
  buckets.set(key, recent);

  // Opportunistic cleanup so the map does not grow unbounded.
  if (buckets.size > 10_000) {
    for (const [k, list] of buckets) {
      const fresh = list.filter((ts) => ts > cutoff);
      if (fresh.length === 0) buckets.delete(k);
      else buckets.set(k, fresh);
    }
  }

  return {
    ok: true,
    remaining: max - recent.length,
    retryAt: now,
  };
}

/**
 * Best-effort client IP extraction. Real production should rely on the host's
 * trusted forwarding headers (Vercel sets x-forwarded-for, x-real-ip, etc).
 */
export function getClientIp(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}
