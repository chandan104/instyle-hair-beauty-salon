"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageCircle, MapPin } from "lucide-react"
import { salonDetails } from "@/lib/constants"
import { WhatsAppBookingModal } from "@/components/ui/whatsapp-booking-modal"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#why-choose", label: "Why Instyle" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact & Location" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 px-5 sm:px-7 bg-[#120E12]/85 border-white/15 backdrop-blur-xl shadow-2xl shadow-black/40"
            : "py-4 px-5 sm:px-8 bg-[#141014]/60 border-white/10 backdrop-blur-md"
        } rounded-full border`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo matching Mockup in Image 4 */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
            {/* Elegant Floral / Lotus Icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#DF6882] via-[#E2778E] to-[#D4AF37] p-[1.5px] shadow-md shadow-[#DF6882]/20 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#181216] flex items-center justify-center text-[#DF6882] group-hover:text-white transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 transition-transform duration-500 group-hover:scale-110"
                >
                  <path d="M12 3c-1.5 3-4 6-4 9a4 4 0 0 0 8 0c0-3-2.5-6-4-9z" />
                  <path d="M7 10c-2.5 1.5-4 4-4 6a4 4 0 0 0 7 2.5" />
                  <path d="M17 10c2.5 1.5 4 4 4 6a4 4 0 0 1-7 2.5" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                INSTYLE
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/70 font-medium leading-tight mt-0.5">
                Hair & Beauty Salon
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-xs xl:text-sm font-medium text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call Icon (Desktop & Tablet) */}
            <a
              href={`tel:${salonDetails.phoneDisplay.replace(/\s+/g, "")}`}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors"
              title="Call Salon"
              aria-label="Call salon directly"
            >
              <Phone className="w-4 h-4 text-[#DF6882]" />
            </a>

            {/* Book Now Pill Button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-[#DF6882] to-[#C2455F] hover:from-[#E67891] hover:to-[#CE4E68] shadow-md shadow-[#DF6882]/30 active:scale-95 transition-all cursor-pointer min-h-[40px]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors lg:hidden cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-4 p-5 rounded-3xl bg-[#161216]/95 border border-white/15 shadow-2xl backdrop-blur-2xl lg:hidden text-white"
            >
              {/* Salon info pill */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 mb-4 text-xs text-white/80">
                <MapPin className="w-3.5 h-3.5 text-[#DF6882] shrink-0" />
                <span className="truncate">DC Court Junction, Dimapur – 797112</span>
              </div>

              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-2xl text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-3 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsBookingOpen(true)
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#DF6882] to-[#C2455F] flex items-center justify-center gap-2 shadow-lg shadow-[#DF6882]/30"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book on WhatsApp</span>
                </button>

                <a
                  href={`tel:${salonDetails.phoneDisplay.replace(/\s+/g, "")}`}
                  className="w-full py-3 px-4 rounded-2xl font-semibold text-xs text-white/90 bg-white/5 border border-white/10 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#DF6882]" />
                  <span>Call {salonDetails.phoneDisplay}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* WhatsApp Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}
