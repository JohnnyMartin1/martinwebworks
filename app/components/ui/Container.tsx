import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** narrow: 720px, default: 1120px, wide: 1280px */
  size?: "narrow" | "default" | "wide";
};

const sizeMap = {
  narrow: "max-w-[720px]",
  default: "max-w-[1120px]",
  wide: "max-w-[1280px]",
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-6 lg:px-10 ${sizeMap[size]} ${className}`}>
      {children}
    </div>
  );
}
