'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeInUpVariants } from '@/lib/animations'
import { services } from '@/lib/constants'
import { Code, Monitor, ShoppingCart, Zap } from 'lucide-react'

const iconMap = {
  Monitor,
  Code,
  ShoppingCart,
  Zap,
}

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={fadeInUpVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-[#B0B8C1] text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Code
            return (
              <ServiceCard
                key={service.id}
                icon={Icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ComponentType<{ size: number }>
  title: string
  description: string
  index: number
}

function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      custom={index}
      variants={fadeInUpVariants}
      whileHover="hover"
      initial="normal"
      className="group h-full"
    >
      <motion.div
        whileHover={{
          rotateX: -5,
          rotateY: 5,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="h-full p-6 md:p-8 rounded-xl glassmorphism border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300 flex flex-col gap-4 md:gap-6 cursor-pointer"
        style={{ perspective: '1000px' }}
      >
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#FF6B00] to-orange-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#FF6B00]/50 transition-all duration-300"
        >
          <span className="text-white">
            <Icon size={32} />
          </span>
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{title}</h3>
          <p className="text-sm md:text-base text-[#B0B8C1] leading-relaxed">{description}</p>
        </div>

        {/* Arrow indicator */}
        <motion.div
          whileHover={{ x: 5 }}
          className="text-[#FF6B00] font-semibold text-sm md:text-base flex items-center gap-2"
        >
          Get in touch →
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
