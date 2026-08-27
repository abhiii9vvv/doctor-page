import { MapPin } from "lucide-react";

export function MapPlaceholder({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Stylised map showing the clinic's location on 100 Feet Road, Indiranagar"
      className={`relative overflow-hidden rounded-3xl bg-teal-50 ${className ?? ""}`}
    >
      <svg viewBox="0 0 600 400" className="h-full w-full" aria-hidden="true">
        <rect width="600" height="400" fill="#eefaf7" />
        <rect x="0" y="0" width="600" height="150" fill="#e3f2ed" />
        <rect x="230" y="60" width="150" height="130" rx="10" fill="#d3f1ea" />
        <g stroke="#bfe6dc" strokeWidth="10">
          <path d="M0 210 H600" />
          <path d="M0 300 H600" />
          <path d="M120 0 V400" />
          <path d="M420 0 V400" />
        </g>
        <g stroke="#a7e3d6" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round">
          <path d="M0 255 H600" />
          <path d="M270 0 V400" />
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+10px)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-500 text-white shadow-lift ring-4 ring-white">
          <MapPin className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-teal-900/10" />
    </div>
  );
}
