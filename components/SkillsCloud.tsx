'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeInUpVariants, floatingVariants } from '@/lib/animations'
import { techStack } from '@/lib/constants'

export default function SkillsCloud() {
  return (
    <section id="skills" className="relative py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={fadeInUpVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-[#B0B8C1] text-base md:text-lg max-w-2xl mx-auto">
            Modern technologies and tools I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {techStack.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              animate="animate"
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div
                className="p-3 md:p-4 rounded-lg glassmorphism border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300 flex items-center justify-center text-center cursor-pointer group-hover:shadow-lg group-hover:shadow-[#FF6B00]/30"
              >
                <span className="font-semibold text-xs md:text-sm lg:text-base group-hover:text-[#FF6B00] transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
