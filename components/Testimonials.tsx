'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeInUpVariants } from '@/lib/animations'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Paul delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, EduCorp',
      content: 'Working with Paul was a pleasure. He understood our requirements perfectly and delivered a robust attendance system that has improved our operations significantly.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Founder, WaterFlow Solutions',
      content: 'The water management platform Paul built for us has transformed how we track deliveries. His problem-solving skills and dedication are outstanding.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="relative py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={fadeInUpVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-[#B0B8C1] text-base md:text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    role: string
    content: string
    rating: number
  }
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      custom={index}
      variants={fadeInUpVariants}
      className="group h-full"
    >
      <motion.div
        whileHover={{
          y: -5,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="h-full p-8 rounded-xl glassmorphism border border-white/10 hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-all duration-300 flex flex-col"
      >
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#FF6B00] text-[#FF6B00]" />
          ))}
        </div>

        {/* Content */}
        <p className="text-[#B0B8C1] leading-relaxed flex-1 mb-6">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="border-t border-white/10 pt-4">
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-[#FF6B00]">{testimonial.role}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
