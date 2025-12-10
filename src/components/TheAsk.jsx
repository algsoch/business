import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, MessageSquare, XCircle, CheckCircle } from 'lucide-react'

export default function TheAsk() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const wants = [
    {
      icon: Users,
      title: 'Space',
      color: 'from-blue-500 to-cyan-500',
      description: 'A workspace where we can operate as a focused unit',
      details: 'Not a desk—a place where we can sync daily, review work collectively, and maintain discipline'
    },
    {
      icon: Target,
      title: 'Process Guidance',
      color: 'from-purple-500 to-pink-500',
      description: 'Feedback on our execution loop from someone who\'s scaled AI operations',
      details: 'Help identifying where our processes will break at higher volume. Honest assessment of gaps we haven\'t seen yet'
    },
    {
      icon: MessageSquare,
      title: 'Early Feedback',
      color: 'from-green-500 to-emerald-500',
      description: 'Opportunity to execute a pilot project with your network',
      details: 'Real client constraints, real deadlines, real QA standards. Permission to fail small and learn publicly'
    },
  ]

  const notWants = [
    'Guarantees (we want to prove capability, not get validated prematurely)',
    'Protection from failure (we need to hit real constraints to understand our limits)',
    'Hand-holding (we\'ll ask when stuck, but we default to execution)',
  ]

  const brings = [
    'Immediate availability (we start now, not after setup)',
    'Full transparency (you\'ll see our internal processes, not just deliverables)',
    'Adult execution (we own mistakes, document learning, and adjust quickly)',
    'Systems thinking (we build for repeatability, not one-off success)',
  ]

  return (
    <section id="ask" className="relative py-24 bg-dark-800/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 px-4 py-2 rounded-full mb-4"
            >
              <Target className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-medium">What We're Looking For</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Ask</h2>
            <p className="text-xl text-dark-300">Very clear & limited</p>
          </div>

          {/* What We Want */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">We're Looking For:</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {wants.map((want, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="card group hover:shadow-xl hover:shadow-primary-500/20"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${want.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <want.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{want.title}</h3>
                  <p className="text-dark-200 mb-4">{want.description}</p>
                  <p className="text-sm text-dark-400 italic">{want.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What We DON'T Want */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card bg-dark-800/80 border-red-500/30 p-8 mb-16"
          >
            <div className="flex items-center space-x-3 mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold">What We Don't Want</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {notWants.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-3 bg-dark-900/50 rounded-lg p-4"
                >
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What We Bring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="card p-8 bg-gradient-to-r from-primary-500/10 to-primary-700/10 border-primary-500/30"
          >
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary-400" />
              <h3 className="text-2xl font-bold">What We Bring</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {brings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-start space-x-3 bg-dark-900/50 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
