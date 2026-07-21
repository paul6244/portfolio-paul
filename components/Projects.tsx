'use client'

import { motion } from 'framer-motion'
import { containerVariants, fadeInUpVariants } from '@/lib/animations'
import { projects } from '@/lib/constants'
import { ExternalLink, Code2 } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div variants={fadeInUpVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-[#B0B8C1] text-base md:text-lg max-w-2xl mx-auto">
            Showcase of successful projects that demonstrate my expertise and skills
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: number | string
    title: string
    description: string
    tech: string[]
    liveUrl: string
    githubUrl: string
    image: string
    vercelUrl?: string
    createdAt?: string
    updatedAt?: string
  }
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      custom={index}
      variants={fadeInUpVariants}
      className="group h-full"
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col rounded-xl glassmorphism border border-white/10 hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-all duration-300 overflow-hidden"
      >
        {/* Image placeholder with project-specific design */}
        <div className="relative w-full h-56 overflow-hidden">
          {project.image === 'procare-water' && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-400/30">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-6xl">💧</div>
              </motion.div>
            </div>
          )}
          {project.image === 'shopgrad' && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-400/30">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-6xl">🛒</div>
              </motion.div>
            </div>
          )}
          {project.image === 'ashanti-gold' && (
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-amber-400/30">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-6xl">💰</div>
              </motion.div>
            </div>
          )}
          {project.image === 'attendance-system' && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-emerald-400/30">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-6xl">📊</div>
              </motion.div>
            </div>
          )}
          {project.image === 'breakfast-selector' && (
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-amber-400/30">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-6xl">🍳</div>
              </motion.div>
            </div>
          )}
          
          {project.image === 'jb-chemist' && (
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-pink-400/30">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-6xl">💊</div>
              </motion.div>
            </div>
          )}
          {!['procare-water', 'shopgrad', 'attendance-system', 'jb-chemist', 'breakfast-selector', 'ashanti-gold'].includes(project.image) && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/30 to-orange-600/30">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-6xl">🚀</div>
              </motion.div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent" />
        </div>
        

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col gap-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-[#B0B8C1] text-sm leading-relaxed flex-1">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex-1 px-4 py-2 bg-[#FF6B00] text-white rounded-lg flex items-center justify-center gap-2 text-sm font-semibold hover:shadow-lg hover:shadow-[#FF6B00]/50 transition-all duration-300"
            >
              Live Demo <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex-1 px-4 py-2 border border-[#FF6B00]/50 text-white rounded-lg flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#FF6B00]/10 transition-all duration-300"
            >
              GitHub <Code2 size={16} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
