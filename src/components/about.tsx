import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";
import { clinic, credentials } from "@/lib/data";

const CERTIFICATIONS = [
  "Dental Council of India",
  "Indian Dental Association",
  "Indian Endodontic Society",
  "Certified Invisalign Provider",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-offset bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start lg:gap-20 lg:px-8">
        <div className="mx-auto w-full max-w-sm md:sticky md:top-28 md:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-teal-100 shadow-lift ring-1 ring-white/40">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt={`${clinic.doctorName} with a patient in the treatment room`}
              fill
              sizes="(min-width: 768px) 32vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-clay-600">
            About the doctor
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl"
          >
            Care built on precision, honesty, and a bit of patience
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            {clinic.doctorName} founded {clinic.name} in 2017 after nearly a
            decade practising cosmetic and restorative dentistry across
            Bengaluru. Her approach is simple: explain the &ldquo;why&rdquo;
            behind every recommendation, choose the least invasive option that
            lasts, and treat every patient — nervous or not — like family.
          </p>

          <div className="mt-10">
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-stone-900">
              <GraduationCap className="h-5 w-5 text-teal-600" strokeWidth={1.75} aria-hidden="true" />
              Education &amp; milestones
            </h3>
            <ol className="mt-5 space-y-6 border-l-2 border-teal-100 pl-6">
              {credentials.map((item) => (
                <li key={item.title} className="relative">
                  <span
                    className="absolute -left-[1.97rem] top-1.5 h-2.5 w-2.5 rounded-full bg-clay-500 ring-4 ring-white"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-teal-600">{item.year}</p>
                  <p className="mt-0.5 font-medium text-stone-900">{item.title}</p>
                  <p className="mt-0.5 text-sm text-stone-600">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-stone-900">
              <Award className="h-5 w-5 text-teal-600" strokeWidth={1.75} aria-hidden="true" />
              Certifications &amp; memberships
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert}
                  className="rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
