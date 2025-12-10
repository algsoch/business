import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Identity from './components/Identity'
import CoreInsight from './components/CoreInsight'
import MarketGap from './components/MarketGap'
import Services from './components/Services'
import WhatWeDo from './components/WhatWeDo'
import Portfolio from './components/Portfolio'
import ExecutionLoop from './components/ExecutionLoop'
import SkillProof from './components/SkillProof'
import CostPhilosophy from './components/CostPhilosophy'
import FrontendThinking from './components/FrontendThinking'
import TheAsk from './components/TheAsk'
import Closing from './components/Closing'
import FloatingElements from './components/FloatingElements'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 200

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-900 overflow-hidden">
      {/* Background Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Identity />
        <CoreInsight />
        <MarketGap />
        <Services />
        <WhatWeDo />
        <Portfolio />
        <ExecutionLoop />
        <SkillProof />
        <CostPhilosophy />
        <FrontendThinking />
        <TheAsk />
        <Closing />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-dark-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-dark-400 text-sm">
            AI & Automation Systems Studio © 2025 • Deep Learning • ML • Generative AI • RAG
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
