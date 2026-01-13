import { motion } from 'framer-motion'
import { Shield, Award, Users, TrendingUp } from 'lucide-react'

export default function TrustBadges() {
  return (
    <section className="py-6 sm:py-8 md:py-10 px-4 relative overflow-hidden bg-black">
      {/* Background Effects matching other sections */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          {/* Partnership Badge */}
          <motion.div
            whileHover={{ scale: 1.03, y: -3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-white">Partnership with</h3>
                <p className="text-base sm:text-lg md:text-xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Polybazar
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">GST Registered AI Provider</p>
              </div>
            </div>
          </motion.div>

          {/* Production Systems */}
          <motion.div
            whileHover={{ scale: 1.03, y: -3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-blue-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-white">16+</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Production Systems</p>
              </div>
            </div>
          </motion.div>

          {/* Client Satisfaction */}
          <motion.div
            whileHover={{ scale: 1.03, y: -3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-green-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-white">100%</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Real-World Deployed</p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            whileHover={{ scale: 1.03, y: -3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-purple-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-white">24/7</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Support & Maintenance</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
