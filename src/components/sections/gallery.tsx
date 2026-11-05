"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, MessageCircle, X, Maximize2, ExternalLink } from "lucide-react"
import { galleryImages, salonDetails, GalleryItem } from "@/lib/constants"

export function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null)

  const filters = ["All", "Hair", "Nails", "Lashes & Brows", "Salon Space"]

  const filteredImages =
    selectedFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedFilter)

  const handleInquireLook = (item: GalleryItem) => {
    const message = `Hi INSTYLE, I saw this look from your gallery (*${item.title}*) and would like to get something similar. Could I book an appointment?`
    const url = `https://wa.me/${salonDetails.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(url, "_blank")
  }

  return (
    <>
      <section
        id="gallery"
        className="py-20 md:py-32 bg-[#0A080A] text-white relative overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#DF6882]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header matching Mockup Screen 3 */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DF6882] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Transformations</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3"
            >
              Salon <span className="text-gradient-rose">Gallery</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed"
            >
              A glimpse of our work at DC Court Junction.
            </motion.p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar px-2">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-pointer min-h-[44px] ${
                    isActive
                      ? "bg-[#DF6882] text-white shadow-lg shadow-[#DF6882]/30 scale-105"
                      : "bg-[#181318] text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => setActiveImage(image)}
                  className="group relative h-48 sm:h-64 md:h-72 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#181318] border border-white/10 hover:border-[#DF6882]/50 shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Category Pill on Card */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs text-white/90">
                    {image.category}
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Title & Subtitle at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h4 className="font-display text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-[#F4A6B8] transition-colors line-clamp-1">
                      {image.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-white/60 font-light line-clamp-1">
                      {image.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Instagram Link CTA Button (as shown in Screen 3) */}
          <div className="mt-12 text-center">
            <a
              href={salonDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-md group"
            >
              <span>View 785+ Posts on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-xl w-full rounded-3xl bg-[#141014] border border-white/15 overflow-hidden z-10 shadow-2xl text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Full Image */}
              <div className="relative w-full h-80 sm:h-96 bg-black">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              {/* Caption & Actions */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-[#DF6882] font-semibold">
                    {activeImage.category}
                  </span>
                  <span className="text-xs text-white/50">INSTYLE Dimapur</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {activeImage.title}
                </h3>
                <p className="text-white/70 text-sm font-light mb-6">
                  {activeImage.subtitle}
                </p>

                <button
                  onClick={() => handleInquireLook(activeImage)}
                  className="w-full btn-rose-instyle text-sm py-3.5 shadow-lg shadow-[#DF6882]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book This Look on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
