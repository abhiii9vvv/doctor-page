import Image from "next/image";
import { CalendarCheck, Phone, Star } from "lucide-react";
import { clinic, stats, trustPoints } from "@/lib/data";

const TRUST_DOT: Record<string, string> = {
  teal: "bg-teal-500",
  emerald: "bg-emerald-500",
  clay: "bg-clay-500",
  violet: "bg-violet-500",
};

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-stone-50"
    >
      <div className="splash-hero pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px]" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:py-20 md:grid-cols-2 md:items-center md:py-28 lg:gap-20 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-teal-700 shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-clay-500" aria-hidden="true" />
            Now welcoming new patients
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.5rem]">
            Gentle, modern dental care for your{" "}
            <span className="text-teal-600">whole family</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            {clinic.doctorName} brings 16+ years of{" "}
            {clinic.specialty.toLowerCase()} experience to Indiranagar — precise,
            up-to-date technique with the kind of unhurried, friendly care that
            makes every visit easy.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-7 py-4 text-base font-semibold text-white shadow-lift transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
            >
              <CalendarCheck className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              Book Appointment
            </a>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-200 bg-white px-7 py-4 text-base font-semibold text-teal-700 transition-colors hover:border-teal-400 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              {clinic.phone}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {trustPoints.map((point) => (
              <li
                key={point.label}
                className="flex items-center gap-2 text-sm font-medium text-stone-600"
              >
                <span
                  className={`h-2 w-2 rounded-full ${TRUST_DOT[point.accent]}`}
                  aria-hidden="true"
                />
                {point.label}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-teal-700 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-clay-400/30 blur-2xl" aria-hidden="true" />
          <div className="absolute -right-5 bottom-10 h-32 w-32 rounded-full bg-violet-400/30 blur-2xl" aria-hidden="true" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-teal-100 shadow-lift ring-1 ring-white/40">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
              alt={`${clinic.doctorName}, ${clinic.specialty}`}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-lift ring-1 ring-stone-100 sm:left-8 sm:right-auto sm:w-72">
            <div className="flex gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-clay-400 text-clay-400"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-stone-700">
              4.9 rating from 1,800+ patients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
