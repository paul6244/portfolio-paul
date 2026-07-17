'use client'

import { motion } from 'framer-motion'
import { containerVariants, textRevealVariants, fadeInUpVariants } from '@/lib/animations'
import { ArrowRight, Mouse } from 'lucide-react'

export default function Hero() {
  const headline = 'Elevate Your Online Presence'
  const words = headline.split(' ')

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-24 px-4 md:px-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#FF6B00] rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1"
        >
          {/* Headline */}
          <motion.h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textRevealVariants}
                className="inline-block mr-1 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-base md:text-lg lg:text-xl text-[#B0B8C1] max-w-2xl leading-relaxed"
          >
            Custom Websites, E-Commerce & SEO engineered to drive results. Let&apos;s transform your digital vision into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-3 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('contact')}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#FF6B00] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FF6B00]/50 transition-all duration-300 text-sm md:text-base"
            >
              Book Free Consultation <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('projects')}
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#FF6B00] text-[#FF6B00] font-semibold rounded-lg hover:bg-[#FF6B00]/10 transition-all duration-300 text-sm md:text-base"
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-wrap gap-3 pt-6 text-xs md:text-sm text-[#B0B8C1]"
          >
            {['PROFESSIONAL', 'RELIABLE', 'AFFORDABLE'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - 3D visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center order-1 lg:order-2"
        >
          {/* Animated geometric shapes */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border border-[#FF6B00]/30 rounded-full"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Middle rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 md:inset-8 border border-[#FF6B00]/20 rounded-full"
            />

            {/* Inner element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-[#FF6B00] to-orange-600 rounded-lg shadow-2xl shadow-[#FF6B00]/50 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="text-white text-3xl md:text-4xl lg:text-6xl font-bold"
              >
                P
              </motion.div>
            </motion.div>

            {/* Floating particles */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.cos((i / 5) * Math.PI * 2) * 60, 0],
                  y: [0, Math.sin((i / 5) * Math.PI * 2) * 60, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                }}
                className="absolute w-2 h-2 md:w-3 md:h-3 bg-[#FF6B00] rounded-full opacity-60"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#B0B8C1] cursor-pointer hidden md:block"
        onClick={() => handleScroll('services')}
        role="button"
        tabIndex={0}
        aria-label="Scroll to services section"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleScroll('services')
          }
        }}
      >
        <Mouse size={24} className="mx-auto mb-2" />
        <p className="text-sm">Scroll to explore</p>
      </motion.div>
    </section>
  )
}
