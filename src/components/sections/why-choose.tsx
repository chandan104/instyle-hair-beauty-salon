"use client"

import { motion } from "framer-motion"
import { Gem, Leaf, Armchair, Heart, Sparkles, CheckCircle2 } from "lucide-react"

export function WhyChoose() {
  const features = [
    {
      icon: Gem,
      title: "Certified Professionals",
      description:
        "Internationally certified hair stylist & 6D Permanent Makeup specialist with years of mastery.",
    },
    {
      icon: Leaf,
      title: "Premium Products",
      description:
        "We use tested international professional haircare, gentle lash serums and cruelty-free formulas.",
    },
    {
      icon: Armchair,
      title: "Hygienic & Comfortable",
      description:
        "Aesthetic modern salon with arched vanity lighting, sterilized instruments and private relaxation.",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description:
        "Every cut, color, lash set and brow shading is tailored specifically to your features and lifestyle.",
    },
  ]

  return (
    <section id="why-choose" className="py-20 md:py-28 bg-[#0C090C] text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#DF6882]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DF6882] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The INSTYLE Distinction</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3"
          >
            Why Choose <span className="text-gradient-rose">INSTYLE?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/70 text-sm sm:text-base font-light leading-relaxed"
          >
            Elevating beauty in Dimapur with world-class skill, hygienic standards, and genuine warmth.
          </motion.p>
        </div>

        {/* 4 Feature Cards matching Screen 3 of Image 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-5 sm:p-6 rounded-3xl bg-[#141014]/70 border border-white/10 hover:border-[#DF6882]/40 transition-all duration-300 flex flex-col items-center text-center shadow-lg"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DF6882]/10 border border-[#DF6882]/20 flex items-center justify-center text-[#DF6882] group-hover:scale-110 group-hover:bg-[#DF6882] group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#F4A6B8] transition-colors leading-snug">
                  {feat.title}
                </h3>

                <p className="text-white/65 text-xs sm:text-sm font-light leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
