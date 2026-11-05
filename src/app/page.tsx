"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { FloatingBottomBar } from "@/components/ui/floating-bottom-bar"

// Dynamically imported sections for fast initial load
const Services = dynamic(
  () => import("@/components/sections/services").then((mod) => mod.Services),
  { ssr: true }
)
const Gallery = dynamic(
  () => import("@/components/sections/gallery").then((mod) => mod.Gallery),
  { ssr: true }
)
const WhyChoose = dynamic(
  () => import("@/components/sections/why-choose").then((mod) => mod.WhyChoose),
  { ssr: true }
)
const AppointmentBanner = dynamic(
  () =>
    import("@/components/sections/appointment-banner").then(
      (mod) => mod.AppointmentBanner
    ),
  { ssr: true }
)
const About = dynamic(
  () => import("@/components/sections/about").then((mod) => mod.About),
  { ssr: true }
)
const Testimonials = dynamic(
  () =>
    import("@/components/sections/testimonials").then((mod) => mod.Testimonials),
  { ssr: true }
)
const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  { ssr: true }
)
const Footer = dynamic(
  () => import("@/components/sections/footer").then((mod) => mod.Footer),
  { ssr: true }
)

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A080A] text-foreground selection:bg-[#DF6882] selection:text-white">
      <Navbar />
      <main>
        {/* Screen 1: Hero with model background, title, WhatsApp CTA & circular category pills */}
        <Hero />

        {/* Screen 2: Services with Category Pills & Image Cards with WhatsApp Book Now */}
        <Services />

        {/* Screen 3: Salon Gallery with real Instagram work */}
        <Gallery />

        {/* Screen 3: Why Choose INSTYLE 4 Features */}
        <WhyChoose />

        {/* Screen 3: Book Your Appointment Luxury Banner */}
        <AppointmentBanner />

        {/* About: Internationally Certified Stylist & Sanctuary Interior */}
        <About />

        {/* Testimonials: Loved by Dimapur */}
        <Testimonials />

        {/* Contact: Location, Hours, Google Maps & Directions */}
        <Contact />
      </main>

      <Footer />

      {/* Mobile-first fixed bottom action bar */}
      <FloatingBottomBar />
    </div>
  )
}
