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

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-offset bg-stone-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.14em] text-teal-700">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl"
          >
            Comprehensive care, from routine to restorative
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Every treatment plan starts with a conversation. Here&apos;s what we
            offer most often.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-stone-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-medium text-stone-900">
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
