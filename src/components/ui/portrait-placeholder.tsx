type PortraitPlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Editorial silhouette illustration used in place of real photography.
 * Deliberately abstract rather than a literal face, so it reads as an
 * intentional brand placeholder rather than a mismatched stock photo.
 */
export function PortraitPlaceholder({ label, className }: PortraitPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 400 500"
        className="h-full w-full"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="portraitGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8ddcf" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#e8ddcf" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="330" cy="60" r="120" fill="url(#portraitGlow)" />
        {/* shoulders */}
        <path
          d="M40 500c0-88 71.6-159 160-159s160 71 160 159Z"
          fill="#f3efe8"
          fillOpacity="0.14"
        />
        {/* bust silhouette */}
        <ellipse cx="200" cy="280" rx="82" ry="98" fill="#f3efe8" fillOpacity="0.22" />
        <path
          d="M40 500c0-96 71.6-172 160-172s160 76 160 172Z"
          fill="#faf8f5"
          fillOpacity="0.92"
        />
        <ellipse cx="200" cy="272" rx="76" ry="92" fill="#faf8f5" fillOpacity="0.92" />
      </svg>
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}
