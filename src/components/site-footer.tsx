import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ToothIcon } from "@/components/icons/tooth-icon";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons";
import { clinic, hours, services } from "@/lib/data";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#booking", label: "Book Appointment" },
];

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-white">
                <ToothIcon className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-medium text-white">
                {clinic.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              Gentle, modern cosmetic and family dentistry in the heart of
              Ashbrook.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Whitfield Dental Studio on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-colors hover:border-teal-600 hover:text-teal-400"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Whitfield Dental Studio on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-colors hover:border-teal-600 hover:text-teal-400"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-heading text-sm font-medium uppercase tracking-[0.1em] text-stone-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-stone-300 hover:text-teal-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-medium uppercase tracking-[0.1em] text-stone-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.title} className="text-sm text-stone-300">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-medium uppercase tracking-[0.1em] text-stone-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-300">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-teal-500" strokeWidth={1.75} aria-hidden="true" />
                <a href={clinic.phoneHref} className="hover:text-teal-400">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-teal-500" strokeWidth={1.75} aria-hidden="true" />
                <a href={`mailto:${clinic.email}`} className="hover:text-teal-400">
                  {clinic.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-stone-400">
              {hours[0].day}: {hours[0].time}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-stone-800 pt-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>Designed as a demonstration landing page.</p>
        </div>
      </div>
    </footer>
  );
}
