'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeInUpVariants } from '@/lib/animations'
import { Code, Zap, Target, Users } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable business outcomes',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Putting your needs and goals first in every project',
    },
  ]

  return (
    <section id="about" className="relative py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={fadeInUpVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-[#B0B8C1] text-base md:text-lg max-w-2xl mx-auto">
            Passionate web developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div variants={fadeInUpVariants} className="space-y-4 md:space-y-6">
            <p className="text-[#B0B8C1] text-sm md:text-base leading-relaxed">
              I'm Paul Glawu, a software developer with expertise in building modern, responsive web applications. With a strong foundation in React, Next.js, and various backend technologies, I transform ideas into functional, user-friendly digital solutions.
            </p>
            <p className="text-[#B0B8C1] text-sm md:text-base leading-relaxed">
              My approach combines technical excellence with creative problem-solving to deliver websites and applications that not only look great but perform exceptionally well. Whether it's an e-commerce platform, a dashboard, or a custom web solution, I'm committed to exceeding expectations.
            </p>
            <p className="text-[#B0B8C1] text-sm md:text-base leading-relaxed">
              When I'm not coding, I stay updated with the latest web technologies and best practices to ensure my clients always receive cutting-edge solutions that drive their business forward.
            </p>
          </motion.div>

          <motion.div variants={fadeInUpVariants} className="grid grid-cols-2 gap-4 md:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 md:p-6 rounded-xl glassmorphism border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <Icon size={24} className="text-[#FF6B00]" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base mb-2">{value.title}</h3>
                  <p className="text-xs md:text-sm text-[#B0B8C1]">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div variants={fadeInUpVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-2">3+</div>
            <div className="text-xs md:text-sm text-[#B0B8C1]">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-2">20+</div>
            <div className="text-xs md:text-sm text-[#B0B8C1]">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-2">15+</div>
            <div className="text-xs md:text-sm text-[#B0B8C1]">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#FF6B00] mb-2">100%</div>
            <div className="text-xs md:text-sm text-[#B0B8C1]">Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
