import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Rocket, Tag } from 'lucide-react'

export default function Hero() {
  const services = [
    {
      icon: "🤖",
      title: "AI Agents",
      tagline: "Autonomous systems that research, decide, and execute multi-step tasks with tool integration",
      gradient: "from-purple-500 via-violet-500 to-fuchsia-500"
    },
    {
      icon: "💬",
      title: "Chatbot Business",
      tagline: "Custom business chatbots for WhatsApp, Telegram, websites - automate customer support & sales",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      tagline: "End-to-end SaaS platforms, web applications, REST APIs with React & Python",
      gradient: "from-cyan-500 via-blue-500 to-purple-500"
    },
    {
      icon: "🧠",
      title: "ML & Deep Learning",
      tagline: "Custom neural networks, NLP pipelines, computer vision, predictive models",
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    }
  ]

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 pb-8 min-h-screen">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        
        {/* Main Hero Box with Border and Shadow */}
        <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-sm border-2 border-gray-700 rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            {/* Name with subscript polybazar */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-comic inline-block">
                algsoch
              </span>
              <sub className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 ml-2 align-sub">(polybazar)</sub>
            </h1>
            
            {/* Tagline Box */}
            <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 mb-6 shadow-lg shadow-orange-500/20">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">
                AI-Powered Software Development
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 shadow-md">
                <p className="text-sm sm:text-base font-bold text-white">Full-Stack Web Development</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 shadow-md">
                <p className="text-sm sm:text-base font-bold text-white">AI Chatbots & Agents</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 shadow-md">
                <p className="text-sm sm:text-base font-bold text-white">Generative AI & RAG</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 shadow-md">
                <p className="text-sm sm:text-base font-bold text-white">Custom ML Models</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 shadow-md">
                <p className="text-sm sm:text-base font-bold text-white">Computer Vision</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 shadow-md">
                <p className="text-sm sm:text-base font-bold text-white">Data Pipelines</p>
              </div>
            </div>

          </motion.div>

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
          
        </div>
        {/* End Main Hero Box */}

        {/* Company Motive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-6 px-4 sm:px-0 mt-8"
        >
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm border-2 border-gray-700 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">Our Mission</h3>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                Building production-ready AI systems that solve real business problems. No buzzwords, no hype—just reliable, deployed solutions that work 24/7.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-2">
                <span className="px-2 sm:px-3 py-1.5 bg-orange-500/20 border border-orange-500 text-orange-400 rounded-full text-[10px] sm:text-xs font-bold">
                  💼 Enterprise-Grade
                </span>
                <span className="px-2 sm:px-3 py-1.5 bg-blue-500/20 border border-blue-500 text-blue-400 rounded-full text-[10px] sm:text-xs font-bold">
                  🚀 Production-First
                </span>
                <span className="px-2 sm:px-3 py-1.5 bg-green-500/20 border border-green-500 text-green-400 rounded-full text-[10px] sm:text-xs font-bold">
                  ⚡ Real-World Tested
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl p-4 sm:p-5 hover:border-orange-500 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl mb-3">
                  {service.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {service.tagline}
                </p>
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
        </motion.div>

        {/* Trust Badges - Partnership & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-8 sm:mt-12 px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500 rounded-xl p-3 sm:p-4 text-center hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-2">🤝</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">Partnership</h3>
              <p className="text-xs sm:text-sm text-gray-300">Polybazar (GST Registered)</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500 rounded-xl p-3 sm:p-4 text-center hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-2">🚀</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">16+ Production</h3>
              <p className="text-xs sm:text-sm text-gray-300">Systems Deployed</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-green-500 rounded-xl p-3 sm:p-4 text-center hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-2">✅</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">100% Deployed</h3>
              <p className="text-xs sm:text-sm text-gray-300">Real-World Solutions</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500 rounded-xl p-3 sm:p-4 text-center hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-2">💬</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">24/7 Support</h3>
              <p className="text-xs sm:text-sm text-gray-300">Always Available</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
