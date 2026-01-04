import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Rocket, Tag } from 'lucide-react'

export default function Hero() {
  const services = [
    {
      icon: "🤖",
      title: "AI Chatbots",
      tagline: "WhatsApp, Telegram, website support",
      price: "₹25,000+",
      originalPrice: "₹50,000+",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      icon: "💻",
      title: "Full-Stack Web Apps",
      tagline: "React + FastAPI production systems",
      price: "₹35,000+",
      originalPrice: "₹70,000+",
      gradient: "from-cyan-500 via-blue-500 to-purple-500"
    },
    {
      icon: "🧠",
      title: "Deep Learning Models",
      tagline: "Custom neural networks that work",
      price: "₹60,000+",
      originalPrice: "₹1,20,000+",
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      tagline: "Object detection, OCR, analytics",
      price: "₹45,000+",
      originalPrice: "₹90,000+",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-8 leading-tight">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent block font-comic"
            >
              algsoch
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4"
          >
            AI • Full-Stack • Open Source
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Chatbots • AI Agents • Computer Vision • RAG Systems • React/FastAPI Apps • Backend APIs • Open Source Contributor
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <a
              href="https://github.com/algsoch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border-2 border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub Profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/algsoch/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Launch Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-8 px-4 sm:px-0"
        >
          <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-2xl p-4 sm:p-6 shadow-2xl border-2 border-orange-400/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Tag className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div className="text-center sm:text-left">
                  <div className="text-white font-black text-lg sm:text-2xl">🎉 50% OFF Launch Offer!</div>
                  <div className="text-orange-100 text-xs sm:text-sm font-semibold"> Limited time offer</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-bold text-sm sm:text-base">algsoch</span>
                <Zap className="w-5 h-5 text-yellow-300" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-orange-500 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 min-h-[40px] sm:min-h-[48px]">
                  {service.tagline}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-baseline space-x-2 flex-wrap">
                    <span className={`text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent whitespace-nowrap`}>
                      {service.price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">
                      {service.originalPrice}
                    </span>
                  </div>
                  <div className="inline-block bg-red-500/20 border border-red-500 text-red-400 px-3 py-1 rounded-full text-xs font-bold">
                    50% OFF
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-sm font-medium text-orange-400 group-hover:text-orange-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center px-4"
        >
          <a
            href="#services"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>View All Services</span>
          </a>
          
          <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
            🎁 Limited time offer • First 10 clients only • Ends soon!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 sm:mt-20 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 px-4"
        >
          <span className="font-bold text-orange-400">Tech Stack:</span>
          {["Python", "FastAPI", "React", "PyTorch", "Docker", "PostgreSQL"].map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 border border-gray-700 rounded-full hover:border-orange-500 transition-colors cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
