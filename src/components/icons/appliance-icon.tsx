import type { SVGProps } from "react";

export function ApplianceIcon({ strokeWidth = 1.75, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 10c1.5 2.5 4.5 4 8 4s6.5-1.5 8-4" />
      <path d="M6.5 10v3.2M9.5 10.9v3.2M12 11.2v3.2M14.5 10.9v3.2M17.5 10v3.2" />
      <path d="M4 10c0-2.5.8-4.6 2-6M20 10c0-2.5-.8-4.6-2-6" />
    </svg>
  );
}
