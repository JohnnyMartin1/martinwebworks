import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * A device-shaped frame around a small concept mockup.
 *
 * Why this shape: the previous implementation used a fixed width with no
 * aspect ratio, so when the children were tall the frame stretched into a
 * narrow column and stopped reading as a phone. Now we lock the frame to a
 * modern 9:19.5 aspect ratio (close to a current iPhone), constrain the
 * width, and crop any overflow from the inner screen. The result reads as a
 * proportional device regardless of children height.
 *
 * Inner padding is intentionally tight so the children (typically a
 * `SiteMockup`) have room to breathe without scrolling.
 */
export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-[228px] sm:w-[248px] overflow-hidden rounded-[36px] border border-[var(--divider)] bg-[var(--paper-white)] p-1.5 shadow-paper ${className}`}
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-[var(--ink-navy)] opacity-80"
      />
      <div className="h-full w-full overflow-hidden rounded-[28px] bg-[var(--cream-paper)] pt-7">
        {children}
      </div>
    </div>
  );
}
