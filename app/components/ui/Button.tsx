import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "primary-on-dark" | "secondary-on-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] disabled:opacity-60 disabled:cursor-not-allowed select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--ink-navy)] text-[var(--cream-paper)] shadow-cta hover:bg-[var(--ink-navy-deep)] hover:shadow-cta-hover hover:-translate-y-[1px] active:translate-y-0 active:shadow-paper",
  secondary:
    "bg-[var(--paper-white)] text-[var(--ink-navy)] border border-[var(--divider)] hover:bg-[var(--cream-deep)] hover:border-[#cfc6b3]",
  ghost: "bg-transparent text-[var(--ink-navy)] hover:text-[var(--signal-blue)]",
  "primary-on-dark":
    "bg-[var(--cream-paper)] text-[var(--ink-navy)] shadow-cta hover:bg-white hover:shadow-cta-hover hover:-translate-y-[1px]",
  "secondary-on-dark":
    "bg-transparent text-[var(--cream-paper)] border border-white/20 hover:bg-white/8 hover:border-white/35",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = Common & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonProps = Common & {
  href?: never;
  type?: "button" | "submit" | "reset";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "className" | "children">;

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={cls}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonProps;
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
