"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fade-up-on-scroll wrapper, reserved for section headings.
 *
 * Starts 12px low and transparent, then eases up over 0.4s the first time it
 * enters the viewport (IntersectionObserver). Respects prefers-reduced-motion
 * via CSS, and a <noscript> override in the root layout keeps content visible
 * when JavaScript is unavailable.
 */
type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Reveal({ children, as, className = "" }: RevealProps) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  );
}
