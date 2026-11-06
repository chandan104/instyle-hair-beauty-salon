"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageCircle,
  Play,
  MapPin,
  Scissors,
  Sparkles,
  Eye,
  Heart,
  ChevronDown,
} from "lucide-react"
import { salonDetails } from "@/lib/constants"
import { WhatsAppBookingModal } from "@/components/ui/whatsapp-booking-modal"

// Custom luxury icons matching the design mockup in Image 5
function NailPolishIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="9.5" y="2" width="5" height="7" rx="1.5" />
      <path d="M6 9h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" />
      <path d="M9 15h6" />
    </svg>
  )
}

function LashesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 10c3 4 8 5 9 5s6-1 9-5" />
      <path d="M5.5 12.5l-2.5 3" />
      <path d="M8.5 14l-1.5 3.5" />
      <path d="M12 15v3.5" />
      <path d="M15.5 14l1.5 3.5" />
      <path d="M18.5 12.5l2.5 3" />
    </svg>
  )
}

function SkinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 11h.01" />
      <path d="M15 11h.01" />
      <path d="M9.5 14.5c.8.8 1.6 1.2 2.5 1.2s1.7-.4 2.5-1.2" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
    </svg>
  )
}

export function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const quickCategories = [
    { label: "Hair", icon: Scissors, href: "#services?category=Hair" },
    { label: "Skin", icon: SkinIcon, href: "#services?category=Skin" },
    { label: "Nails", icon: NailPolishIcon, href: "#services?category=Nails" },
    { label: "Lashes", icon: LashesIcon, href: "#services?category=Lashes" },
  ]

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A080A] pt-20 pb-10 sm:py-28"
      >
        {/* Full-bleed clearly visible background image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* High-res model image with full opacity and natural warm lighting */}
          <Image
            src="/images/instyle/hero-model-luxury.jpg"
            alt="INSTYLE Hair & Beauty Model with Glossy Balayage Waves"
            fill
            priority
            quality={95}
            className="object-cover object-[center_20%] sm:object-[center_15%]"
            sizes="100vw"
          />

          {/* Carefully tuned gradient: Upper half is virtually transparent so the model is 100% visible, smoothly darkens towards the bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,8,10,0.02) 0%, rgba(10,8,10,0.08) 25%, rgba(10,8,10,0.40) 45%, rgba(10,8,10,0.80) 65%, rgba(10,8,10,0.96) 85%, #0A080A 100%)",
            }}
          />

          {/* Subtle warm amber/rose ambient glow highlights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#DF6882]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Spacer for top padding */}
        <div className="h-6 sm:h-12" />

        {/* Content Container aligned exactly with Mockup */}
        <div className="relative z-10 max-w-xl mx-auto px-5 sm:px-6 text-center text-white flex flex-col items-center">
          {/* Badge: • PREMIUM HAIR & BEAUTY SALON */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-3 drop-shadow-md"
          >
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#F7CAD0] drop-shadow-sm">
              • Premium Hair &amp; Beauty Salon
            </span>
          </motion.div>

          {/* Headline: INSTYLE (Bold serif luxury gradient) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-[#F9CAD2] via-[#FFFFFF] to-[#F9CAD2] bg-clip-text text-transparent">
              INSTYLE
            </span>
          </motion.h1>

          {/* Subtitle: Hair & Beauty Salon (Italic serif) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display italic text-2xl sm:text-3xl md:text-4xl text-[#F2D0D6] tracking-wide mt-1.5 mb-3.5 drop-shadow-md"
          >
            Hair &amp; Beauty Salon
          </motion.p>

          {/* Location Badge: 📍 DC Court Junction, Dimapur */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm font-medium mb-4 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#DF6882]" />
            <span>DC Court Junction, Dimapur</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xs sm:text-sm md:text-base text-white/85 font-light leading-relaxed mb-7 max-w-md drop-shadow-sm"
          >
            Professional hair, skin, nail and beauty services with a personal touch.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none"
          >
            {/* Book on WhatsApp (Solid Mauve / Rose Velvet matching Mockup) */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-[#A34E65] hover:bg-[#B35870] active:scale-95 transition-all shadow-xl shadow-[#A34E65]/40 cursor-pointer min-h-[46px]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book on WhatsApp</span>
            </button>

            {/* Our Services (Translucent Dark Pill matching Mockup) */}
            <Link
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white/90 bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md active:scale-95 transition-all cursor-pointer min-h-[46px]"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white/90" />
              <span>Our Services</span>
            </Link>
          </motion.div>

          {/* Circular Category Navigation Pills (matching Mockup) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-8 sm:mt-10 w-full max-w-xs sm:max-w-sm"
          >
            <div className="grid grid-cols-4 gap-3 justify-center">
              {quickCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    className="flex flex-col items-center gap-1.5 group cursor-pointer"
                  >
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-md border border-[#DF6882]/30 group-hover:border-[#DF6882] flex items-center justify-center text-[#F7CAD0] group-hover:scale-105 group-hover:bg-[#DF6882]/20 transition-all shadow-md">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-white/75 group-hover:text-white transition-colors">
                      {cat.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Scroll Down Chevron */}
            <div className="flex justify-center mt-5">
              <Link
                href="#services"
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Scroll down to services"
              >
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}
