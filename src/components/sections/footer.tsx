"use client"

import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, Heart } from "lucide-react"
import { salonDetails } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#080608] text-white pt-16 pb-24 md:pb-12 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DF6882]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#DF6882] to-[#D4AF37] p-[1px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#181216] flex items-center justify-center text-[#DF6882]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M12 3c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
                    <path d="M7 10c-2.5 1.5-4 4-4 6a4 4 0 0 0 7 2.5" />
                    <path d="M17 10c2.5 1.5 4 4 4 6a4 4 0 0 1-7 2.5" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-white block">
                  INSTYLE
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-white/70 block">
                  Hair & Beauty Salon
                </span>
              </div>
            </Link>

            <p className="text-white/65 text-xs sm:text-sm font-light leading-relaxed">
              Professional hair, skin, nail and beauty services with a personal touch in Dimapur, Nagaland.
            </p>

            <div className="pt-1">
              <a
                href={salonDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/80 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@{salonDetails.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="#home" className="hover:text-[#DF6882] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#DF6882] transition-colors">
                  Our Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#DF6882] transition-colors">
                  Salon Gallery
                </Link>
              </li>
              <li>
                <Link href="#why-choose" className="hover:text-[#DF6882] transition-colors">
                  Why Choose INSTYLE
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#DF6882] transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#DF6882] transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-white">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>Hair Smoothing & Botox</li>
              <li>Eyelash Extensions & Keratin Lift</li>
              <li>Gold Chrome French & Gel Nails</li>
              <li>6D Microblading & Brow Shading</li>
              <li>Ash Tone Balayage & Hair Color</li>
              <li>Bridal & Event HD Makeup</li>
            </ul>
          </div>

          {/* Col 4: Location & Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-white">
              Visit Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/70 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DF6882] shrink-0 mt-0.5" />
                <span>
                  DC Ct Rd, near petrol pump, Hill View Colony, Dimapur, Nagaland 797112
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#DF6882] shrink-0" />
                <span>10:00 AM – 7:00 PM (Mon: Closed)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DF6882] shrink-0" />
                <a
                  href={`tel:${salonDetails.phoneDisplay.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {salonDetails.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} INSTYLE Hair & Beauty Salon. All rights reserved. Dimapur, Nagaland.
          </p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#DF6882] fill-current" />
            <span>for INSTYLE Beauty Bar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
