import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative w-[224px] overflow-hidden rounded-[32px] border border-[var(--divider)] bg-[var(--paper-white)] p-1.5 shadow-paper ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[var(--ink-navy)] opacity-80" aria-hidden />
      <div className="overflow-hidden rounded-[24px] bg-[var(--cream-paper)] pt-7">
        {children}
      </div>
    </div>
  );
}
