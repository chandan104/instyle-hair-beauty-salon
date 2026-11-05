"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle } from "lucide-react"
import { services, salonDetails } from "@/lib/constants"

interface WhatsAppBookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialServiceId?: string
}

export function WhatsAppBookingModal({
  isOpen,
  onClose,
  initialServiceId,
}: WhatsAppBookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || services[0]?.id || ""
  )
  const [clientName, setClientName] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [preferredDate, setPreferredDate] = useState("")
  const [preferredTime, setPreferredTime] = useState("11:00 AM")
  const [notes, setNotes] = useState("")

  const selectedService = services.find((s) => s.id === selectedServiceId) || services[0]

  const timeSlots = [
    "10:30 AM",
    "11:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
  ]

  const handleConfirmWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceName = selectedService?.title || "Salon Service"
    const price = selectedService?.price || ""

    let message = `Hi INSTYLE, I would like to book an appointment for *${serviceName}* (${price}).`
    if (preferredDate) {
      message += `\n📅 *Date:* ${preferredDate}`
    }
    if (preferredTime) {
      message += `\n⏰ *Time:* ${preferredTime}`
    }
    if (clientName.trim()) {
      message += `\n👤 *Name:* ${clientName.trim()}`
    }
    if (clientPhone.trim()) {
      message += `\n📞 *Phone:* ${clientPhone.trim()}`
    }
    if (notes.trim()) {
      message += `\n📝 *Notes:* ${notes.trim()}`
    }

    message += `\n\nLooking forward to confirming with INSTYLE Hair & Beauty Salon!`

    const whatsappUrl = `https://wa.me/${salonDetails.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, "_blank")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#141014] border border-white/10 shadow-2xl p-6 md:p-8 z-10 text-white overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#DF6882]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#DF6882]/20 border border-[#DF6882]/40 flex items-center justify-center text-[#DF6882]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">
                    Book on WhatsApp
                  </h3>
                  <p className="text-xs text-white/60">
                    INSTYLE Salon • DC Court Junction
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Close booking modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleConfirmWhatsApp} className="mt-5 space-y-4">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                  Select Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors appearance-none cursor-pointer"
                >
                  {services.map((srv) => (
                    <option
                      key={srv.id}
                      value={srv.id}
                      className="bg-[#1c181c] text-white"
                    >
                      {srv.title} — {srv.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Preview Badge */}
              {selectedService && (
                <div className="p-3.5 rounded-2xl bg-[#DF6882]/10 border border-[#DF6882]/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white">
                      {selectedService.title}
                    </span>
                    <span className="text-[#DF6882] ml-2 font-bold">
                      {selectedService.price}
                    </span>
                  </div>
                  {selectedService.duration && (
                    <span className="text-white/60">{selectedService.duration}</span>
                  )}
                </div>
              )}

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors appearance-none cursor-pointer"
                  >
                    {timeSlots.map((time) => (
                      <option
                        key={time}
                        value={time}
                        className="bg-[#1c181c] text-white"
                      >
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sentila"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors placeholder:text-white/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 089746 20709"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                  Special Notes / Styling Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Consultation for ash balayage, or first-time lash lift"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors placeholder:text-white/30 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#DF6882] to-[#C2455F] hover:from-[#E67891] hover:to-[#CE4E68] shadow-lg shadow-[#DF6882]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Request on WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-white/50 mt-2">
                  Opens WhatsApp with prefilled booking details directly with INSTYLE.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
