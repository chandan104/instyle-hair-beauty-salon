"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sparkles,
  Award,
  CheckCircle,
  MapPin,
  Heart,
  Instagram,
  ArrowUpRight,
} from "lucide-react"
import { stats, salonDetails } from "@/lib/constants"

export function About() {
  const highlights = [
    "Internationally Certified Hair Dresser & Stylist",
    "Permanent Makeup-6D & Microblading Specialist",
    "Expert Eyelash Extensions & Keratin Lash Lifts",
    "Custom Gel, Acrylic & Gold Chrome Nail Art",
    "Premium Hair Smoothing, Botox & Balayage Care",
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#0C090C] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#DF6882]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Real Salon Interior Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[420px] sm:h-[500px] rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl group">
              <Image
                src="/images/instyle/salon-space-interior.jpg"
                alt="INSTYLE Salon Interior with Arched Vanity Mirrors"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Float Badge 1: Location */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white/90 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DF6882]" />
                <span>DC Court Junction, Dimapur</span>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#141014]/90 backdrop-blur-xl border border-white/10 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#DF6882]" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DF6882]">
                    Internationally Certified
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold">
                  INSTYLE Hair & Beauty Sanctuary
                </h4>
                <p className="text-xs text-white/70 font-light mt-0.5">
                  Arched vanity mirrors, modern sage aesthetics & sanitized tools.
                </p>
              </div>
            </div>

            {/* Accent Floating Pill on side */}
            <div className="absolute -bottom-5 -right-3 hidden sm:flex items-center gap-2 py-2.5 px-4 rounded-2xl bg-[#DF6882] text-white shadow-xl text-xs font-bold">
              <Heart className="w-4 h-4 fill-white" />
              <span>Personalized Beauty</span>
            </div>
          </motion.div>

          {/* Right Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DF6882] text-xs font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About INSTYLE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Where Precision Artistry Meets{" "}
              <span className="text-gradient-rose">Personalized Radiance</span>
            </h2>

            <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed">
              Located conveniently at **DC Court Junction in Dimapur**, **INSTYLE
              Hair & Beauty Salon** is a premier destination for tailored
              hairdressing, precision permanent makeup, lash artistry, and luxury
              nail design.
            </p>

            <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed">
              Led by an **internationally certified stylist**, we specialize in
              bringing out your natural glow with precision 6D microblading,
              deep keratin hair smoothing, customized balayage tones, and hygienic
              nail enhancements that turn heads.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#DF6882]/20 border border-[#DF6882]/40 flex items-center justify-center text-[#DF6882] shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-white/85 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.id} className="space-y-1">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white block">
                    {s.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/60 font-light block leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Instagram Follow Row */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={salonDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-rose-600/30 border border-pink-500/30 hover:border-pink-500 text-white text-xs font-semibold transition-all group"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>@{salonDetails.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-xs text-white/50">
                785 posts • 1,015+ followers
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
