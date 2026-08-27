import type { SVGProps } from "react";

export function ToothIcon({ strokeWidth = 1.75, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3c-2.1 0-3.02 1.2-4.5 1.2C5.6 4.2 4 5.9 4 8.6c0 2.1.7 3.4 1.1 5.4.4 1.9.6 4.9 1.9 6.6.6.8 1.2 1.1 1.7 1.1.9 0 1.1-2.6 1.3-3.9.2-1.2.5-2.1 1.9-2.1s1.7.9 1.9 2.1c.2 1.3.4 3.9 1.3 3.9.5 0 1.1-.3 1.7-1.1 1.3-1.7 1.5-4.7 1.9-6.6.4-2 1.1-3.3 1.1-5.4 0-2.7-1.6-4.4-3.5-4.4C15.02 4.2 14.1 3 12 3Z" />
    </svg>
  );
}
