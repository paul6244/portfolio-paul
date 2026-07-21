'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import SkillsCloud from '@/components/SkillsCloud'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SocialBar from '@/components/SocialBar'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SocialBar />
      <Hero />
      <About />
      <Services />
      <SkillsCloud />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
