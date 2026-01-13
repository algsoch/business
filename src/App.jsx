import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import VisitorTracker from './components/VisitorTracker'
import Services from './components/Services'
import ServicesDetailed from './components/ServicesDetailed'
import Process from './components/Process'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import FloatingElements from './components/FloatingElements'
import Chatbot from './components/Chatbot'

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
      <VisitorTracker />
      <Chatbot />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <ServicesDetailed />
        <Process />
        <Technologies />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black border-t-2 border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 font-comic">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                algsoch<sub className="text-xl sm:text-2xl text-gray-400">(polybazar)</sub>
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-4 font-semibold">
              AI Solutions That Actually Work
            </p>
            <p className="text-sm text-gray-400">
              Chatbots • AI Agents • Deep Learning • Computer Vision • RAG Systems
            </p>
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-xs sm:text-sm text-gray-500">
                © 2026 <span className="font-comic bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">algsoch<sub className="text-xs text-gray-400">(polybazar)</sub></span>. Built to help you win.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
