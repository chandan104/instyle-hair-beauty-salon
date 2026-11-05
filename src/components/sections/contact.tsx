"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Star,
  ExternalLink,
} from "lucide-react"
import { salonDetails } from "@/lib/constants"
import { WhatsAppBookingModal } from "@/components/ui/whatsapp-booking-modal"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Hair Smoothing & Botox",
    message: "",
  })
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open directly in WhatsApp with prefilled inquiry
    const msg = `Hi INSTYLE, I have an inquiry from your website.\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✨ Service: ${formData.service}\n💬 Message: ${formData.message}`
    const url = `https://wa.me/${salonDetails.whatsappNumber}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <section
        id="contact"
        className="py-20 md:py-32 bg-[#0C090C] text-white relative overflow-hidden"
      >
        {/* Ambient lighting */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#DF6882]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DF6882] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Location & Appointments</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3"
            >
              Visit Our <span className="text-gradient-rose">Salon</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm sm:text-base font-light leading-relaxed"
            >
              Located in Hill View Colony near DC Court Junction petrol pump in Dimapur.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Info Cards & Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-5"
            >
              {/* Detailed Location Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#141014]/85 border border-white/10 shadow-xl space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DF6882]/15 border border-[#DF6882]/30 flex items-center justify-center text-[#DF6882] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      Salon Address
                    </h3>
                    <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed">
                      {salonDetails.address}
                    </p>
                    <p className="text-[11px] text-[#DF6882] font-medium mt-1">
                      Landmark: Near petrol pump, DC Court Junction
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={salonDetails.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all min-h-[44px]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <a
                    href="https://www.google.com/search?q=instyle+hair+and+beauty+salon+dimapur#lrd=0x37460773663b9f67:0x42f01f038d17ee3f,3,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-semibold transition-all min-h-[44px]"
                  >
                    <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Write a Review</span>
                  </a>
                </div>
              </div>

              {/* Hours & Phone Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Hours */}
                <div className="p-5 rounded-3xl bg-[#141014]/85 border border-white/10 shadow-lg space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-[#DF6882]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                      Salon Hours
                    </span>
                  </div>
                  <p className="font-display text-base font-bold text-white pt-1">
                    {salonDetails.hours}
                  </p>
                  <p className="text-xs text-[#DF6882] font-medium">
                    {salonDetails.closedDays}
                  </p>
                </div>

                {/* Direct Phone */}
                <div className="p-5 rounded-3xl bg-[#141014]/85 border border-white/10 shadow-lg space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">
                      Direct Phone
                    </span>
                  </div>
                  <a
                    href={`tel:${salonDetails.phoneDisplay.replace(/\s+/g, "")}`}
                    className="font-display text-base font-bold text-white block hover:text-[#DF6882] transition-colors pt-1"
                  >
                    {salonDetails.phoneDisplay}
                  </a>
                  <p className="text-xs text-white/50">Call or WhatsApp</p>
                </div>
              </div>

              {/* Interactive Google Maps Embed */}
              <div className="w-full h-64 sm:h-72 rounded-3xl overflow-hidden border border-white/15 shadow-xl relative bg-[#181318]">
                <iframe
                  title="INSTYLE Salon Dimapur Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.428585481747!2d93.7196016!3d25.8973678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37460773663b9f67%3A0x42f01f038d17ee3f!2sInstyle%20hair%20and%20beauty%20salon!5e0!3m2!1sen!2sin!4v1741160000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={salonDetails.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white hover:bg-black transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Instant WhatsApp Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141014]/90 border border-white/10 shadow-2xl relative">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Quick Inquiry
                    </h3>
                    <p className="text-xs text-white/60">
                      Send a fast message directly to our WhatsApp
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sentila"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors placeholder:text-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 089746 20709"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors placeholder:text-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Hair Smoothing & Botox" className="bg-[#181318]">
                        Hair Smoothing & Botox (From ₹3,500)
                      </option>
                      <option value="Eyelash Extensions" className="bg-[#181318]">
                        Eyelash Extensions (From ₹1,500)
                      </option>
                      <option value="Nail Art & Extensions" className="bg-[#181318]">
                        Nail Art & Extensions (From ₹800)
                      </option>
                      <option value="6D Microblading & Shading" className="bg-[#181318]">
                        6D Microblading & Shading (From ₹4,500)
                      </option>
                      <option value="Balayage & Hair Color" className="bg-[#181318]">
                        Ash Balayage & Hair Color (From ₹2,800)
                      </option>
                      <option value="Bridal & Event Makeup" className="bg-[#181318]">
                        Bridal & Event Makeup (From ₹3,000)
                      </option>
                      <option value="General Consultation" className="bg-[#181318]">
                        General Beauty Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you would like or ask about timings and availability..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#DF6882] transition-colors placeholder:text-white/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#DF6882] to-[#C2455F] hover:from-[#E67891] hover:to-[#CE4E68] shadow-lg shadow-[#DF6882]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-base min-h-[48px]"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-white/50">
                    Instantly redirects to WhatsApp chat with the salon owner at DC Court Junction.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  )
}
