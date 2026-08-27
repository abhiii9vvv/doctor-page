"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { MapPlaceholder } from "@/components/ui/map-placeholder";
import { clinic, hours } from "@/lib/data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-offset bg-stone-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-[0.14em] text-teal-700">
            Visit us
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl"
          >
            Location, hours, and how to reach us
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-8">
            <MapPlaceholder className="aspect-[4/3] w-full" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-stone-900">Address</p>
                  <p className="mt-0.5 text-sm text-stone-600">
                    {clinic.address.line1}
                    <br />
                    {clinic.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-stone-900">Phone</p>
                  <a
                    href={clinic.phoneHref}
                    className="mt-0.5 block text-sm text-stone-600 hover:text-teal-700"
                  >
                    {clinic.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-stone-900">Email</p>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="mt-0.5 block text-sm text-stone-600 hover:text-teal-700"
                  >
                    {clinic.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Clock className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-stone-900">Hours</p>
                  <dl className="mt-0.5 space-y-0.5 text-sm text-stone-600">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4">
                        <dt>{h.day}</dt>
                        <dd>{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-10">
            <h3 className="font-heading text-xl font-medium text-stone-900">
              Send a message
            </h3>
            <p className="mt-1.5 text-sm text-stone-600">
              Have a question before booking? We typically reply within one
              business day.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-8 rounded-2xl bg-teal-50 px-5 py-6 text-teal-900"
              >
                <p className="font-medium">Thanks for reaching out!</p>
                <p className="mt-1 text-sm text-teal-800">
                  Your message has been received. Our front desk will follow up
                  shortly.
                </p>
              </div>
            ) : (
              <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" id="contact-name" name="name" autoComplete="name" required />
                  <Field
                    label="Email"
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-stone-700">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="input-field"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <Send className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  ...props
}: {
  label: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-stone-700">
        {label}
      </label>
      <input
        id={id}
        className="input-field"
        {...props}
      />
    </div>
  );
}
