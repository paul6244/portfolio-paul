'use client'

import { motion } from 'framer-motion'
import { contactInfo, trustBadges } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#1a1f2e]/50 border-t border-white/10 py-12 md:py-16 px-4 md:px-8 mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 pb-8 md:pb-12 border-b border-white/10"
        >
          {trustBadges.map((badge, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-3 md:p-4 text-center rounded-lg glassmorphism border border-[#FF6B00]/30"
            >
              <p className="text-xs md:text-sm font-semibold text-[#FF6B00] uppercase tracking-wide">{badge}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6 md:mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gradient">Paul Glawu</h3>
            <p className="text-[#B0B8C1] text-xs md:text-sm">Web Developer & Digital Solutions Expert</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-[#B0B8C1]">
              <li>
                <a href="#services" className="hover:text-[#FF6B00] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FF6B00] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FF6B00] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF6B00] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-[#B0B8C1]">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#FF6B00] transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-[#FF6B00] transition-colors">
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B00] transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs md:text-sm text-[#B0B8C1]"
        >
          <p>&copy; {currentYear} Paul Glawu. All rights reserved.</p>
          <p>Designed & built with Next.js, Framer Motion & Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  )
}
