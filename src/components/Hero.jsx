import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Zap, Code, Database, Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-3 sm:px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 border border-primary-500/30 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-full backdrop-blur-sm hover:border-primary-400/50 transition-all duration-300 group"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-400 group-hover:text-primary-300" />
            </motion.div>
            <span className="text-primary-400 text-xs sm:text-sm lg:text-base font-semibold group-hover:text-primary-300 transition-colors">
              5 Engineers Who Actually Ship Code
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 px-2 sm:px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              We Build{' '}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="inline-block bg-gradient-to-r from-primary-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                AI Systems
              </motion.span>
              <br />
              <span className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                That Actually Work
              </span>
            </motion.h1>
            
            {/* Business Motive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-200 leading-relaxed px-2 sm:px-4 font-medium">
                <span className="text-primary-400 font-bold">Our Mission:</span> Building end-to-end AI systems that solve real problems—
                <span className="text-cyan-400"> from raw data to production APIs</span>.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base"
              >
                {[
                  { icon: Brain, text: 'Deep Learning', color: 'text-purple-400' },
                  { icon: Code, text: 'Full-Stack Web', color: 'text-cyan-400' },
                  { icon: Database, text: 'Data Pipelines', color: 'text-green-400' },
                  { icon: Zap, text: 'FastAPI Backends', color: 'text-yellow-400' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center space-x-1.5 sm:space-x-2 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full hover:border-primary-500/50 transition-all duration-300"
                  >
                    <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color}`} />
                    <span className="text-dark-200 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-300 max-w-3xl mx-auto px-3 sm:px-4 leading-relaxed"
            >
              <span className="text-primary-400 font-bold block mb-2">We build the whole system:</span>
              Web Scraping • Data Annotation • RAG Chatbots • LLM Fine-Tuning • Backend APIs • Full-Stack Apps • Monitoring • Deployment
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 px-3 sm:px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('ask').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 relative group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 font-semibold">What We're Looking For</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(6, 182, 212, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('execution').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 group"
            >
              <span className="font-semibold">See How We Work</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Stats - More Responsive & Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto pt-8 sm:pt-10 lg:pt-12 px-3 sm:px-4"
          >
            {[
              { number: 'DL/ML', label: 'Deep Learning', sublabel: 'CNNs & Training', icon: '🧠', gradient: 'from-purple-500 to-pink-500' },
              { number: 'Chatbots', label: 'RAG Systems', sublabel: 'LLMs & Vectors', icon: '💬', gradient: 'from-blue-500 to-cyan-500' },
              { number: 'Data', label: 'Annotation', sublabel: 'Image/Text/Video', icon: '🏷️', gradient: 'from-green-500 to-emerald-500' },
              { number: 'Backend', label: 'APIs & Scraping', sublabel: 'FastAPI + Data', icon: '⚡', gradient: 'from-yellow-500 to-orange-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
                }}
                className="relative group card text-center p-4 sm:p-5 lg:p-6 cursor-pointer overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-dark-50 font-semibold text-sm sm:text-base lg:text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="text-dark-400 text-xs sm:text-sm">
                    {stat.sublabel}
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator - Enhanced */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-dark-400 text-xs sm:text-sm font-medium tracking-wider">SCROLL</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
