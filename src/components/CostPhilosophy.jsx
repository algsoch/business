import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, TrendingUp, Lock, Zap } from 'lucide-react'

export default function CostPhilosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentStack = [
    { name: 'Python, FastAPI', icon: '🐍', description: 'Open-source libraries' },
    { name: 'Google Sheets / Notion', icon: '📊', description: 'Task tracking' },
    { name: 'Free-tier cloud', icon: '☁️', description: 'For prototyping' },
    { name: 'GitHub', icon: '🔧', description: 'Version control & docs' },
  ]

  const whenToPay = [
    {
      condition: 'Task volume requires dedicated compute',
      requirement: 'After profiling exact needs',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      condition: 'Database requirements exceed free-tier',
      requirement: 'After query optimization',
      icon: Lock,
      color: 'text-blue-400'
    },
    {
      condition: 'Client needs specific compliance/security',
      requirement: 'After scoping exact costs',
      icon: Lock,
      color: 'text-purple-400'
    },
  ]

  const benefits = [
    'Automate smarter (can\'t brute-force with cloud credits)',
    'Design efficient workflows (can\'t hide inefficiency)',
    'Build only what\'s necessary (no feature bloat)',
    'Make financial decisions based on real constraints',
  ]

  return (
    <section id="cost" className="relative py-24 bg-dark-800/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Cost Philosophy</h2>
              <p className="text-dark-400 mt-1">Constraints as discipline</p>
            </div>
          </div>

          {/* Current Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <span>Current Stack</span>
              <span className="text-primary-400">($0/month)</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentStack.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-dark-800/50 rounded-lg p-4 text-center hover:bg-dark-700/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="font-semibold text-dark-50 mb-1">{tool.name}</div>
                  <div className="text-xs text-dark-400">{tool.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why This Is Intentional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6 text-primary-400" />
                <span>Why Free Tools Only</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-400 mt-1">→</span>
                  <span className="text-dark-200">Constraints force discipline</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-400 mt-1">→</span>
                  <span className="text-dark-200">Paid infra should be added when we've exhausted free limits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-400 mt-1">→</span>
                  <span className="text-dark-200">Prove execution with minimal resources first</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span>What This Proves</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-dark-200">Can deliver without burning money</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-dark-200">Understand real bottlenecks, not theoretical ones</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-dark-200">Make decisions based on actual constraints</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* When We Would Pay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">When We Would Introduce Paid Infrastructure</h3>
            <div className="space-y-4">
              {whenToPay.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-4 bg-dark-800/50 rounded-lg p-4"
                >
                  <item.icon className={`w-8 h-8 ${item.color} flex-shrink-0 mt-1`} />
                  <div className="flex-1">
                    <div className="font-semibold text-dark-50 mb-1">{item.condition}</div>
                    <div className="text-sm text-dark-400">Only {item.requirement}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cost as Design Constraint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="card p-8 bg-gradient-to-r from-primary-500/10 to-primary-700/10 border-primary-500/30"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Operating This Way Forces Us To:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-dark-900/50 rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                  <span className="text-dark-200">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-center text-lg text-primary-400 font-semibold">
              This discipline transfers directly to client work: we won't recommend expensive solutions when simpler ones work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
