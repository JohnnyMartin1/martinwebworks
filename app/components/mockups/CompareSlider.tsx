"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Before / after comparison slider.
 *
 * Base generated with 21st Magic (/ui), then adapted to Martin Web Works:
 * tokens instead of shadcn variables, inline chevrons instead of
 * lucide-react, and ReactNode panes so the existing CSS mockups render as
 * the two sides. Pointer-driven (mouse + touch) with full keyboard control
 * (role=slider, arrow / home / end keys). Honors prefers-reduced-motion.
 */

type CompareSliderProps = {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  className?: string;
};

export function CompareSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 50,
  className = "",
}: CompareSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updateFromClientX(e.clientX);
      handleRef.current?.setPointerCapture(e.pointerId);
    },
    [updateFromClientX],
  );

  useEffect(() => {
    if (!isDragging) return;
    const move = (e: PointerEvent) => updateFromClientX(e.clientX);
    const up = () => setIsDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [isDragging, updateFromClientX]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  }, []);

  const rounded = Math.round(position);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper ${className}`}
    >
      {/* After (revealed on the right). */}
      <div className="absolute inset-0">{after}</div>

      {/* Before (clipped from the left edge to the divider). */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
        }}
        aria-hidden
      >
        {before}
      </div>

      {/* Corner labels. */}
      <span className="pointer-events-none absolute left-3 top-3 z-20 inline-flex h-6 items-center rounded-full bg-[var(--alert-rose-soft)] px-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9f1239]">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-20 inline-flex h-6 items-center rounded-full bg-[var(--success-emerald-soft)] px-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#065f46]">
        {afterLabel}
      </span>

      {/* Divider + handle. */}
      <div
        className={`absolute top-0 z-10 h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(11,27,51,0.12)] ${
          isDragging ? "" : "transition-[left] duration-150 motion-reduce:transition-none"
        }`}
        style={{ left: `${position}%` }}
      >
        <div
          ref={handleRef}
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare the outdated site with the rebuilt site"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={rounded}
          aria-valuetext={`${rounded}% rebuilt site shown`}
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full bg-[var(--ink-navy)] text-[var(--cream-paper)] shadow-cta ring-2 ring-white hover:bg-[var(--ink-navy-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--signal-blue)]"
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
            <path
              d="M6 3 2.5 7 6 11M16 3l3.5 4L16 11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
