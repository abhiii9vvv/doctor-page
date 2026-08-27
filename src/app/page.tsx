import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Booking } from "@/components/booking";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Booking />
      </main>
      <SiteFooter />
    </>
  );
}
