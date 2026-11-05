"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle,
  ArrowRight,
  Clock,
  Sparkles,
  Star,
} from "lucide-react"
import { services, serviceCategories, salonDetails, ServiceItem } from "@/lib/constants"
import { WhatsAppBookingModal } from "@/components/ui/whatsapp-booking-modal"

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeBookingServiceId, setActiveBookingServiceId] = useState<string | null>(null)

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory)

  const handleQuickWhatsApp = (service: ServiceItem, e: React.MouseEvent) => {
    e.stopPropagation()
    const message = `Hi INSTYLE, I would like to book an appointment for *${service.title}* (${service.price}).\nLocation: DC Court Junction, Dimapur.`
    const url = `https://wa.me/${salonDetails.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(url, "_blank")
  }

  return (
    <>
      <section
        id="services"
        className="py-20 md:py-32 bg-[#0C090C] text-white relative overflow-hidden"
      >
        {/* Ambient lighting glows */}
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#DF6882]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header matching Mockup Screen 2 */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DF6882]/10 border border-[#DF6882]/30 text-[#DF6882] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Service Beauty Bar</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3"
            >
              Our <span className="text-gradient-rose">Services</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed"
            >
              Complete hair and beauty solutions under one roof.
            </motion.p>
          </div>

          {/* Category Filter Pills (matching Screen 2) */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar px-2">
            {serviceCategories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-pointer min-h-[44px] ${
                    isActive
                      ? "bg-[#DF6882] text-white shadow-lg shadow-[#DF6882]/30 scale-105"
                      : "bg-[#181318] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Services Cards Grid (matching Mockup Screen 2) */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setActiveBookingServiceId(service.id)}
                  className="group relative rounded-3xl bg-[#141014]/85 border border-white/10 hover:border-[#DF6882]/50 p-4 sm:p-5 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#DF6882]/10 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Image and Badges */}
                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-4 bg-[#1C161C]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white/90">
                        {service.category}
                      </div>

                      {/* Popular / Duration Badge */}
                      {service.popular && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#DF6882] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Star className="w-3 h-3 fill-white" />
                          <span>Popular</span>
                        </div>
                      )}

                      {/* Duration Tag */}
                      {service.duration && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-white/80 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                          <Clock className="w-3 h-3 text-[#DF6882]" />
                          <span>{service.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#F4A6B8] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-white/65 text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing & WhatsApp Booking Action */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-white/50 block">
                        Price
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#DF6882] transition-colors flex items-center gap-1">
                        {service.price}
                        <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>

                    {/* WhatsApp Book Now Button (as in Mockup Screen 2) */}
                    <button
                      onClick={(e) => handleQuickWhatsApp(service, e)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#DF6882] to-[#C2455F] hover:from-[#E67891] hover:to-[#CE4E68] shadow-md shadow-[#DF6882]/25 active:scale-95 transition-all cursor-pointer min-h-[40px]"
                      aria-label={`Book ${service.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Quick Notice */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-white/50">
              Need a personalized package or bridal consultation?{" "}
              <button
                onClick={() => setActiveBookingServiceId(services[0].id)}
                className="text-[#DF6882] hover:underline font-semibold ml-1 cursor-pointer"
              >
                Chat with our master stylist on WhatsApp →
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {activeBookingServiceId && (
        <WhatsAppBookingModal
          isOpen={!!activeBookingServiceId}
          onClose={() => setActiveBookingServiceId(null)}
          initialServiceId={activeBookingServiceId}
        />
      )}
    </>
  )
}
