"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { ToothIcon } from "@/components/icons/tooth-icon";
import { clinic } from "@/lib/data";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3d61f0,#7c3aed)] text-white">
            <ToothIcon className="h-5 w-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-stone-900">
            {clinic.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={clinic.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-stone-600 transition-colors hover:text-teal-700"
          >
            <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            {clinic.phone}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-stone-200/70 md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-stone-200 bg-stone-50 px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-stone-700 hover:bg-stone-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-2 px-3 text-sm font-medium text-stone-600"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {clinic.phone}
            </a>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="rounded-full bg-teal-700 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
