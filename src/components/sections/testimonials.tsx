"use client"

import { motion } from "framer-motion"
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react"
import { testimonials, salonDetails } from "@/lib/constants"

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#0A080A] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DF6882] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Love</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3"
          >
            Loved by <span className="text-gradient-rose">Dimapur</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/70 text-sm sm:text-base font-light leading-relaxed"
          >
            Real stories from our clients who trust INSTYLE for their hair, skin, and beauty transformations.
          </motion.p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#141014]/80 border border-white/10 hover:border-[#DF6882]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed mb-6 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">
                    {item.author}
                  </h4>
                  <p className="text-xs text-white/50">{item.role}</p>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#DF6882]/15 text-[#F4A6B8] font-medium border border-[#DF6882]/20">
                  {item.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
