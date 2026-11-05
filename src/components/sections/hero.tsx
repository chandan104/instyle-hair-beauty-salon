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
  Clock,
  ShieldCheck,
} from "lucide-react"
import { salonDetails } from "@/lib/constants"
import { BorderBeam } from "@/components/ui/border-beam"
import { WhatsAppBookingModal } from "@/components/ui/whatsapp-booking-modal"

export function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const quickCategories = [
    { label: "Hair", icon: Scissors, href: "#services?category=Hair" },
    { label: "Skin", icon: Sparkles, href: "#services?category=Skin" },
    { label: "Nails", icon: Heart, href: "#services?category=Nails" },
    { label: "Lashes", icon: Eye, href: "#services?category=Lashes" },
  ]

  const handleWhatsAppDirect = () => {
    const url = `https://wa.me/${salonDetails.whatsappNumber}?text=${encodeURIComponent(
      "Hi INSTYLE, I would like to book an appointment."
    )}`
    window.open(url, "_blank")
  }

  return (
    <>
      <section
        id="home"
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A080A] pt-24 pb-16 md:py-32"
      >
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          {/* Hero luxury model visual cropped from design mockup */}
          <div className="absolute inset-0 opacity-25 md:opacity-35 mix-blend-luminosity">
            <Image
              src="/images/instyle/hero-luxury-model.jpg"
              alt="INSTYLE Hair & Beauty Model"
              fill
              priority
              className="object-cover object-top filter contrast-125"
              sizes="100vw"
            />
          </div>

          {/* Deep dark luxury gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A080A]/90 via-[#0A080A]/75 to-[#0A080A] z-10" />

          {/* Radial ambient glow orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#DF6882]/15 rounded-full blur-[120px] pointer-events-none z-10" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-6 text-center text-white flex flex-col items-center">
          {/* Badge: • PREMIUM HAIR & BEAUTY SALON with BorderBeam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-lg shadow-black/20"
          >
            <BorderBeam
              size={120}
              duration={10}
              colorFrom="#DF6882"
              colorTo="#F4A6B8"
              borderWidth={1.5}
            />
            <span className="w-2 h-2 rounded-full bg-[#DF6882] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-white/90">
              Premium Hair & Beauty Salon
            </span>
          </motion.div>

          {/* Headline matching Mockup 1: INSTYLE */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] text-white"
          >
            <span className="text-gradient-rose">INSTYLE</span>
          </motion.h1>

          {/* Subtitle: Hair & Beauty Salon */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display italic text-2xl sm:text-3xl md:text-4xl text-white/90 tracking-wide mt-2 mb-4 font-normal"
          >
            Hair & Beauty Salon
          </motion.p>

          {/* Location Badge: 📍 DC Court Junction, Dimapur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DF6882]/15 border border-[#DF6882]/30 text-white/90 text-xs sm:text-sm font-medium mb-6"
          >
            <MapPin className="w-3.5 h-3.5 text-[#DF6882]" />
            <span>DC Court Junction, Dimapur</span>
          </motion.div>

          {/* Tagline Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-xl text-sm sm:text-base md:text-lg text-white/75 font-light leading-relaxed mb-8 px-4"
          >
            {salonDetails.tagline}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none"
          >
            {/* WhatsApp Book Now Button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto btn-rose-instyle text-sm sm:text-base px-8 py-4 shadow-xl shadow-[#DF6882]/30 active:scale-95 transition-transform cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Book on WhatsApp</span>
            </button>

            {/* Our Services Button */}
            <Link
              href="#services"
              className="w-full sm:w-auto btn-dark-glass text-sm sm:text-base px-8 py-4 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Our Services</span>
            </Link>
          </motion.div>

          {/* Circular Category Navigation Pills (as featured in Mockup Screen 1) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-12 sm:mt-16 w-full max-w-md pt-6 border-t border-white/10"
          >
            <div className="grid grid-cols-4 gap-3 sm:gap-6 justify-center">
              {quickCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1C161C] border border-white/10 group-hover:border-[#DF6882] flex items-center justify-center text-white/80 group-hover:text-[#DF6882] group-hover:bg-[#DF6882]/10 transition-all duration-300 shadow-lg group-hover:scale-105">
                      <Icon className="w-6 h-6 transition-transform group-hover:rotate-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                      {cat.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Scroll Down Chevron */}
            <div className="flex justify-center mt-8">
              <Link
                href="#services"
                className="text-white/40 hover:text-white transition-colors animate-bounce p-2"
                aria-label="Scroll down to services"
              >
                <ChevronDown className="w-5 h-5" />
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
