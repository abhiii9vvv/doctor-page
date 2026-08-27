"use client";

import { useId, useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="scroll-offset bg-teal-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.14em] text-teal-300">
            Book online
          </p>
          <h2
            id="booking-heading"
            className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            Request your appointment
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-100">
            Fill out the form below and our front desk will confirm your visit
            within one business day.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-7 shadow-lift sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-medium text-stone-900">
                Request received
              </h3>
              <p className="mt-2 max-w-sm text-stone-600">
                Thank you! We&apos;ll call or email you shortly to confirm your
                appointment time.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-name`} className="text-sm font-medium text-stone-700">
                    Full name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    autoComplete="name"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-phone`} className="text-sm font-medium text-stone-700">
                    Phone number
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`${formId}-email`} className="text-sm font-medium text-stone-700">
                  Email address
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor={`${formId}-service`} className="text-sm font-medium text-stone-700">
                  Service
                </label>
                <select id={`${formId}-service`} name="service" required className="input-field">
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Not sure / general checkup">
                    Not sure / general checkup
                  </option>
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-date`} className="text-sm font-medium text-stone-700">
                    Preferred date
                  </label>
                  <input
                    id={`${formId}-date`}
                    name="date"
                    type="date"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-time`} className="text-sm font-medium text-stone-700">
                    Preferred time
                  </label>
                  <select id={`${formId}-time`} name="time" required className="input-field">
                    <option value="">Select a time</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={`${formId}-notes`} className="text-sm font-medium text-stone-700">
                  Notes <span className="font-normal text-stone-400">(optional)</span>
                </label>
                <textarea
                  id={`${formId}-notes`}
                  name="notes"
                  rows={3}
                  className="input-field"
                  placeholder="Tell us about any concerns or scheduling constraints"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:w-auto"
              >
                <CalendarCheck className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                Request appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
