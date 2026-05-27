import type { SVGProps } from "react";

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  "aria-hidden": true,
} as const;

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M5.5 3.5h2.7l1 3.2L7.4 8.1a8.2 8.2 0 004.5 4.5l1.4-1.8 3.2 1v2.7c0 1-.8 1.8-1.8 1.8A11.7 11.7 0 013.7 4.8c0-1 .8-1.8 1.8-1.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FormIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.5 8h7M6.5 11h7M6.5 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M10 3l6 2v4.5c0 4.1-2.7 6.6-6 7.5-3.3-.9-6-3.4-6-7.5V5l6-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M11 3l-6 9h4l-1 5 6-9h-4l1-5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5l5-2 5 2 5-2v12l-5 2-5-2-5 2V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 3v12M13 5v12" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M10 3l2.2 4.5 5 .7-3.6 3.5.9 5L10 14.3l-4.5 2.4.9-5L2.8 8.2l5-.7L10 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 5h12a1.5 1.5 0 011.5 1.5v6A1.5 1.5 0 0116 14H8l-3.5 3v-3H4A1.5 1.5 0 012.5 12.5v-6A1.5 1.5 0 014 5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="13" height="11.5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 8.5h13M7 3.5v3M13 3.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function InboxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M3.5 11.5L5 5h10l1.5 6.5V15a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 15v-3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3.5 11.5h4l1 1.5h3l1-1.5h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14 3a4 4 0 00-3.5 5.7L3 16l2 2 7.3-7.5A4 4 0 1014 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M2.5 10h15M10 2.5c2.2 2.4 3.5 5.1 3.5 7.5s-1.3 5.1-3.5 7.5C7.8 15.1 6.5 12.4 6.5 10S7.8 4.9 10 2.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
