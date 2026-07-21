'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeInUpVariants } from '@/lib/animations'
import { contactInfo } from '@/lib/constants'
import { Mail, Phone, Globe, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }

    if (!formData.email.trim()) {
      setError('Please enter your email')
      return
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    if (!formData.message.trim()) {
      setError('Please enter a message')
      return
    }

    // Form is valid
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={fadeInUpVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-[#B0B8C1] text-base md:text-lg max-w-2xl mx-auto">
            Ready to elevate your digital presence? Get in touch today for a free consultation
          </p>
        </motion.div>

        {/* Contact content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact form */}
          <motion.div variants={fadeInUpVariants}>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 md:mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#B0B8C1]/50 focus:border-[#FF6B00] focus:outline-none transition-colors duration-300 text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 md:mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#B0B8C1]/50 focus:border-[#FF6B00] focus:outline-none transition-colors duration-300 text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 md:mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#B0B8C1]/50 focus:border-[#FF6B00] focus:outline-none transition-colors duration-300 resize-none text-sm md:text-base"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-[#FF6B00] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FF6B00]/50 transition-all duration-300 text-sm md:text-base"
              >
                Send Message <Send size={18} />
              </motion.button>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 md:p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs md:text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 md:p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-xs md:text-sm text-center"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact details */}
          <motion.div variants={fadeInUpVariants} className="space-y-6 md:space-y-8">
            {/* Direct contact info */}
            <div className="space-y-3 md:space-y-4">
              <ContactItem
                icon={Mail}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value={contactInfo.phoneDisplay}
                href={`tel:${contactInfo.phone}`}
              />
             
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8 border-t border-white/10">
              {['PROFESSIONAL', 'RELIABLE', 'AFFORDABLE'].map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 md:p-4 rounded-lg glassmorphism border border-[#FF6B00]/30 text-center text-xs md:text-sm font-semibold text-[#FF6B00]"
                >
                  {badge}
                </motion.div>
              ))}
            </div>

            {/* CTA banner */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-[#FF6B00]/20 to-orange-600/20 border border-[#FF6B00]/30 text-center"
            >
              <p className="text-base md:text-lg font-semibold mb-1 md:mb-2">Ready to get started?</p>
              <p className="text-xs md:text-sm text-[#B0B8C1]">Contact me today for a free consultation</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

interface ContactItemProps {
  icon: React.ComponentType<{ size: number }>
  label: string
  value: string
  href: string
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4 rounded-lg glassmorphism border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300 group cursor-pointer"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-lg flex items-center justify-center group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
        <span className="text-[#FF6B00]">
          <Icon size={24} />
        </span>
      </div>
      <div>
        <p className="text-xs text-[#B0B8C1] uppercase tracking-wide">{label}</p>
        <p className="text-white font-semibold text-sm md:text-base">{value}</p>
      </div>
    </motion.a>
  )
}
