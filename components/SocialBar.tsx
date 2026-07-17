'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/lib/constants'
import { Code2, Share2, Mail, Phone } from 'lucide-react'

export default function SocialBar() {
  const socialLinks = [
    { icon: Code2, href: contactInfo.github, label: 'GitHub' },
    { icon: Share2, href: contactInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${contactInfo.phone}`, label: 'Phone' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6"
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-lg glassmorphism border border-white/10 flex items-center justify-center text-[#FF6B00] hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-[#FF6B00]/30 transition-all duration-300"
            title={link.label}
          >
            <Icon size={20} />
          </motion.a>
        )
      })}

      {/* Vertical line */}
      <div className="w-0.5 h-24 bg-gradient-to-b from-transparent via-[#FF6B00]/50 to-transparent mx-auto"></div>
    </motion.div>
  )
}
