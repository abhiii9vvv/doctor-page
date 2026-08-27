import type { ComponentType, SVGProps } from "react";
import { Activity, Baby, Shield, Sparkles } from "lucide-react";
import { ToothIcon } from "@/components/icons/tooth-icon";
import { ApplianceIcon } from "@/components/icons/appliance-icon";
import { services } from "@/lib/data";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  tooth: ToothIcon,
  sparkles: Sparkles,
  shield: Shield,
  appliance: ApplianceIcon,
  activity: Activity,
  baby: Baby,
};

const ACCENT: Record<
  string,
  { chip: string; ring: string; bar: string }
> = {
  teal: {
    chip: "bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white",
    ring: "hover:border-teal-300",
    bar: "bg-teal-500",
  },
  clay: {
    chip: "bg-clay-100 text-clay-700 group-hover:bg-clay-500 group-hover:text-white",
    ring: "hover:border-clay-300",
    bar: "bg-clay-500",
  },
  violet: {
    chip: "bg-violet-100 text-violet-700 group-hover:bg-violet-600 group-hover:text-white",
    ring: "hover:border-violet-300",
    bar: "bg-violet-500",
  },
  emerald: {
    chip: "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
    ring: "hover:border-emerald-300",
    bar: "bg-emerald-500",
  },
  sky: {
    chip: "bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white",
    ring: "hover:border-sky-300",
    bar: "bg-sky-500",
  },
  amber: {
    chip: "bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white",
    ring: "hover:border-amber-300",
    bar: "bg-amber-500",
  },
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-offset relative overflow-hidden bg-stone-50 py-20 sm:py-28"
    >
      <div className="splash-band pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-clay-600">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl"
          >
            Comprehensive care, from routine to restorative
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Every treatment plan starts with a conversation. Here&apos;s what we
            do most often.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            const accent = ACCENT[service.accent];
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lift ${accent.ring}`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`}
                  aria-hidden="true"
                />
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${accent.chip}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-stone-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
