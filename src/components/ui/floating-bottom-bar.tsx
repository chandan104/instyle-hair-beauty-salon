"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Phone, MapPin } from "lucide-react"
import { salonDetails } from "@/lib/constants"
import { WhatsAppBookingModal } from "@/components/ui/whatsapp-booking-modal"

export function FloatingBottomBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Sticky Bottom Bar for Mobile & Compact Screens */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-40 md:hidden">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="p-2 rounded-full bg-[#161216]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-2"
        >
          {/* Quick Call */}
          <a
            href={`tel:${salonDetails.phoneDisplay.replace(/\s+/g, "")}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors min-h-[44px]"
            aria-label="Call salon"
          >
            <Phone className="w-4 h-4 text-[#DF6882]" />
            <span>Call</span>
          </a>

          {/* Directions */}
          <a
            href={salonDetails.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors min-h-[44px]"
            aria-label="Get directions"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Maps</span>
          </a>

          {/* Book on WhatsApp (Primary Button) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-[2] flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#DF6882] to-[#C2455F] text-white text-xs font-bold shadow-md shadow-[#DF6882]/40 active:scale-95 transition-all min-h-[44px]"
            aria-label="Book on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Book Now</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Desktop WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#DF6882] to-[#C2455F] text-white font-semibold text-sm shadow-xl shadow-[#DF6882]/30 hover:shadow-[#DF6882]/50 border border-white/20 transition-all cursor-pointer"
        >
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Book on WhatsApp</span>
        </motion.button>
      </div>

      {/* Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
