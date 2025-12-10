import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, AlertTriangle, TrendingUp, Shield } from 'lucide-react'

export default function CoreInsight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Data Drift',
      description: 'Model degrades in production due to changing user behavior'
    },
    {
      icon: AlertTriangle,
      title: 'Edge Cases',
      description: 'Subtle issues in queries that benchmarks don\'t catch'
    },
    {
      icon: AlertTriangle,
      title: 'Silent Hallucinations',
      description: 'Standard metrics miss confident but incorrect outputs'
    },
  ]

  const needs = [
    { icon: Shield, text: 'Human-in-the-loop evaluation (RLHF-style feedback)' },
    { icon: TrendingUp, text: 'Structured annotation for fine-tuning datasets' },
    { icon: Shield, text: 'Automated QA that catches reasoning failures' },
    { icon: TrendingUp, text: 'Feedback loops that improve models over time' },
  ]

  return (
    <section id="insight" className="relative py-24 bg-dark-800/30">
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
              <Lightbulb className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Core Insight</h2>
              <p className="text-dark-400 mt-1">Why this model exists</p>
            </div>
          </div>

          {/* Main Thesis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card mb-12 p-8 border-l-4 border-primary-500"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-4">The Gap We Fill</h3>
            <p className="text-lg text-dark-200 leading-relaxed mb-4">
              Companies want to use AI in their workflows. They have ideas: automate customer support, 
              process documents faster, build internal knowledge assistants.
            </p>
            <p className="text-lg text-dark-200 leading-relaxed mb-4">
              But they hit the same walls:
            </p>
            <ul className="space-y-2 mb-4 ml-6">
              <li className="text-dark-200">• <span className="text-primary-400 font-semibold">Models alone aren't enough</span> — they need backends, APIs, monitoring</li>
              <li className="text-dark-200">• <span className="text-primary-400 font-semibold">AI can't be fully autonomous</span> — humans need to review, correct, provide feedback</li>
              <li className="text-dark-200">• <span className="text-primary-400 font-semibold">Data is messy</span> — ingestion, cleanup, validation take more time than the AI itself</li>
              <li className="text-dark-200">• <span className="text-primary-400 font-semibold">No one owns the full stack</span> — data teams don't build backends, engineers don't design workflows</li>
            </ul>
            <p className="text-lg text-dark-200 leading-relaxed">
              <span className="text-primary-400 font-semibold">This is where we operate.</span> We build the complete system: 
              backend APIs, automation pipelines, human-in-the-loop interfaces, and quality monitoring—end-to-end.
            </p>
          </motion.div>

          {/* Problem Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <problem.icon className="w-10 h-10 text-red-400 mb-4" />
                <h4 className="text-lg font-semibold text-dark-50 mb-2">{problem.title}</h4>
                <p className="text-dark-400 text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What Teams Need */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-center">What AI Teams Actually Need</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {needs.map((need, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-3 bg-dark-800/50 rounded-lg p-4 border border-dark-700"
                >
                  <need.icon className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-200">{need.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 card p-8 bg-gradient-to-r from-primary-500/10 to-primary-700/10 border-primary-500/30"
          >
            <p className="text-lg text-dark-100 text-center leading-relaxed">
              <span className="font-semibold text-primary-400">Building this infrastructure internally is expensive, slow, and pulls engineers away from core product work.</span>
              <br />
              <br />
              We exist because we've already built these systems, understand the full pipeline, and can execute at the intersection of human judgment and automation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
