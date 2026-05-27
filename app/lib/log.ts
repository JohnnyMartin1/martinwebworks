/**
 * Tiny server-side logger. Writes to stdout/stderr in development and on the
 * server. Production deployments can pipe these to whatever log aggregator
 * the host provides (Vercel, Railway, Fly, etc).
 *
 * Never call from a client component.
 */

const PREFIX = "[martinwebworks]";

export function logInfo(message: string, meta?: Record<string, unknown>) {
  console.log(`${PREFIX} ${message}`, meta ?? "");
}

export function logWarn(message: string, meta?: Record<string, unknown>) {
  console.warn(`${PREFIX} ${message}`, meta ?? "");
}

export function logError(message: string, error?: unknown, meta?: Record<string, unknown>) {
  const errPart =
    error instanceof Error
      ? { name: error.name, message: error.message, stack: error.stack }
      : error;
  console.error(`${PREFIX} ${message}`, { error: errPart, ...(meta ?? {}) });
}

export function isDev(): boolean {
  return process.env.NODE_ENV !== "production";
}
