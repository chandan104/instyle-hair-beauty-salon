"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, MapPin, Clock, Calendar, Sparkles } from "lucide-react"
import { salonDetails } from "@/lib/constants"
import { WhatsAppBookingModal } from "@/components/ui/whatsapp-booking-modal"

export function AppointmentBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-14 sm:py-20 bg-[#0A080A] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2.5rem] p-8 sm:p-12 md:p-14 overflow-hidden border border-[#DF6882]/30 shadow-2xl text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(80, 24, 42, 0.75) 0%, rgba(32, 18, 28, 0.9) 50%, rgba(18, 12, 18, 0.95) 100%)",
            }}
          >
            {/* Ambient Lighting Behind Banner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#DF6882]/30 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-[80px] pointer-events-none" />

            {/* Glowing Accent Top border */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#F4A6B8] to-transparent" />

            <div className="relative z-10 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F4A6B8] mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Instant Confirmation</span>
              </span>

              {/* Headline matching Mockup Screen 3 */}
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                Book Your Appointment
              </h3>

              {/* Subtitle */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg font-light mb-8">
                Get the look you love at Instyle.
              </p>

              {/* WhatsApp Button matching Mockup Screen 3 */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-white text-[#181014] font-bold text-sm sm:text-base hover:bg-white/90 shadow-xl shadow-black/40 active:scale-95 transition-all cursor-pointer min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 fill-current" />
                <span>Book on WhatsApp</span>
              </button>

              {/* Info Badges Row below the button */}
              <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/75">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-[#DF6882] shrink-0" />
                  <span>DC Court Junction, Dimapur – 797112</span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-[#DF6882] shrink-0" />
                  <span>10:00 AM – 7:00 PM (Closed on Monday)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
