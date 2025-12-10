import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, DollarSign, Users, Zap, AlertTriangle, Target } from 'lucide-react'

export default function MarketGap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const marketStats = [
    {
      icon: TrendingUp,
      number: '$196B',
      label: 'AI Market Size 2025',
      sublabel: 'Growing 37% annually',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      number: '$500K-2M',
      label: 'Cost to Build In-House',
      sublabel: 'Per AI automation system',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      number: '65%',
      label: 'Companies Want AI',
      sublabel: 'But can\'t implement it',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      number: '3-6mo',
      label: 'Average Build Time',
      sublabel: 'With traditional approach',
      color: 'from-purple-500 to-pink-500'
    },
  ]

  const gaps = [
    {
      problem: 'Companies want AI automation',
      pain: 'But hiring full ML teams costs $500K-$2M annually',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    {
      problem: 'Off-the-shelf AI tools exist',
      pain: 'But they don\'t integrate with existing workflows or data',
      icon: AlertTriangle,
      color: 'text-orange-400'
    },
    {
      problem: 'Cloud AI services available',
      pain: 'But no one builds the backend, pipelines, and human-in-loop systems around them',
      icon: AlertTriangle,
      color: 'text-yellow-400'
    },
    {
      problem: 'Data science consultants provide models',
      pain: 'But don\'t deploy them or build production systems',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
  ]

  const ourPosition = [
    { title: 'End-to-End Systems', description: 'From data ingestion to deployed APIs with monitoring' },
    { title: 'Practical AI Integration', description: 'Deep learning, ML, Gen AI, RAG - whatever solves the problem' },
    { title: 'Human-in-Loop Design', description: 'AI assists, humans control - sustainable automation' },
    { title: 'Fast Execution', description: 'Weeks, not months - no enterprise overhead' },
  ]

  return (
    <section id="market" className="relative py-24 bg-dark-800/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full mb-4"
            >
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Market Opportunity</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Market Gap We Fill</h2>
            <p className="text-xl text-dark-300">AI is everywhere, but implementation is broken</p>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className="card text-center p-6 relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl`}
                />
                <div className="relative z-10">
                  <stat.icon className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-dark-50 font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-dark-400 text-xs">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">The Disconnect</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {gaps.map((gap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="card p-6 border-l-4 border-red-500/50"
                >
                  <div className="flex items-start space-x-4">
                    <gap.icon className={`w-8 h-8 ${gap.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="text-lg font-bold text-dark-50 mb-2">{gap.problem}</h4>
                      <p className="text-dark-300">{gap.pain}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="card p-8 md:p-12 bg-gradient-to-br from-primary-500/20 via-dark-800/50 to-primary-700/20 border-primary-500/50 relative overflow-hidden"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 blur-3xl"
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Target className="w-10 h-10 text-primary-400" />
                <h3 className="text-3xl font-bold text-center">How We Bridge The Gap</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {ourPosition.map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
                    className="bg-dark-900/50 backdrop-blur-sm rounded-xl p-6 border border-primary-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-400 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary-400 mb-2">{position.title}</h4>
                        <p className="text-dark-200">{position.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="mt-8 pt-8 border-t border-primary-500/30 text-center"
              >
                <p className="text-2xl font-bold text-primary-400 mb-4">
                  We're Not Consultants. We're Builders.
                </p>
                <p className="text-lg text-dark-200 max-w-3xl mx-auto">
                  Small companies can't afford $2M ML teams. Large companies can't move fast enough. 
                  We deliver <span className="text-primary-400 font-semibold">production-ready AI systems</span> at a fraction of the cost and time.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
