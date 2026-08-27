import { CalendarCheck, Phone, Star } from "lucide-react";
import { PortraitPlaceholder } from "@/components/ui/portrait-placeholder";
import { clinic, stats } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-stone-50"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-teal-50 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:py-20 md:grid-cols-2 md:items-center md:py-28 lg:gap-20 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-800">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" aria-hidden="true" />
            Now welcoming new patients
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-medium leading-[1.1] tracking-tight text-stone-900 sm:text-5xl">
            Gentle, modern dental care for your whole family
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            {clinic.doctorName} brings 14+ years of {clinic.specialty.toLowerCase()}{" "}
            experience to Ashbrook — combining precise, up-to-date technique with the
            kind of unhurried, attentive care that makes visits easy.
          </p>

          <dl className="mt-6 flex items-center gap-2 text-sm text-stone-600">
            <dt className="sr-only">Credentials</dt>
            <dd className="font-medium text-stone-800">{clinic.doctorName}</dd>
            <span aria-hidden="true">·</span>
            <dd>DDS, FAGD</dd>
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-base font-semibold text-white shadow-lift transition-colors hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
            >
              <CalendarCheck className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              Book Appointment
            </a>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-base font-semibold text-stone-700 transition-colors hover:border-teal-300 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              <Phone className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              {clinic.phone}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-medium text-stone-900 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <PortraitPlaceholder
            label={`Portrait placeholder for ${clinic.doctorName}`}
            className="aspect-[4/5] w-full"
          />
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-lift sm:left-8 sm:right-auto sm:w-72">
            <div className="flex gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-clay-400 text-clay-400"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-stone-700">
              4.9 rating from 240+ patients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
