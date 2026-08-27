"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";

const AUTOPLAY_MS = 6500;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback((next: number) => {
    setIndex(((next % count) + count) % count);
  }, [count]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const reducedMotionRef = useRef(false);
  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-offset bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-clay-600">
            Patient stories
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl"
          >
            What patients say after visiting
          </h2>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient testimonials"
            className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-clay-50 px-8 py-10 sm:px-14 sm:py-14"
          >
            <Quote
              className="h-9 w-9 text-clay-400"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-live="polite"
            >
              <div className="mt-4 flex gap-0.5" aria-hidden="true">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-clay-400 text-clay-400" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-balance font-heading text-xl font-medium leading-relaxed text-stone-800 sm:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-3.5">
                <Avatar name={active.name} index={index} />
                <div>
                  <p className="font-medium text-stone-900">{active.name}</p>
                  <p className="text-sm text-stone-500">{active.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-200 text-teal-700 transition-colors hover:border-teal-400 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <span className="sr-only">Previous testimonial</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-clay-500" : "w-2 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-teal-200 text-teal-700 transition-colors hover:border-teal-400 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <span className="sr-only">Next testimonial</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
