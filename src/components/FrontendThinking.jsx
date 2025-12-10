import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layout, Eye, GitBranch, CheckSquare } from 'lucide-react'

export default function FrontendThinking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const purposes = [
    {
      icon: Eye,
      title: 'Process Visualization',
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Dashboards showing task distribution and completion rates',
        'Error pattern visualization',
        'Not for clients—for us, to see where work bottlenecks',
        'Forces us to make workflow states explicit',
      ]
    },
    {
      icon: CheckSquare,
      title: 'QA Interfaces',
      color: 'from-purple-500 to-pink-500',
      items: [
        'Tools to review flagged cases side-by-side',
        'Disagreement resolution interfaces that log reasoning',
        'Makes quality checks systematic, not ad-hoc',
        'Enables pattern detection across evaluators',
      ]
    },
    {
      icon: GitBranch,
      title: 'Guideline Artifacts',
      color: 'from-green-500 to-emerald-500',
      items: [
        'Interactive examples of edge cases',
        'Not documentation—executable references',
        'Forces precision in defining "correct" outputs',
        'Living guidelines that evolve with the work',
      ]
    },
  ]

  return (
    <section id="frontend" className="relative py-24 border-t border-dark-800">
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
              <Layout className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Frontend as a Thinking Tool</h2>
              <p className="text-dark-400 mt-1">Not marketing, but process clarity</p>
            </div>
          </div>

          {/* Intro Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 mb-12 border-l-4 border-primary-500"
          >
            <p className="text-xl text-dark-100 leading-relaxed">
              We don't build frontends for marketing. We build them as{' '}
              <span className="text-primary-400 font-semibold">process visualization</span>,{' '}
              <span className="text-primary-400 font-semibold">QA interfaces</span>, and{' '}
              <span className="text-primary-400 font-semibold">guideline artifacts</span>.
            </p>
          </motion.div>

          {/* Purpose Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card group hover:shadow-xl hover:shadow-primary-500/20"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${purpose.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <purpose.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{purpose.title}</h3>
                
                <ul className="space-y-3">
                  {purpose.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-dark-300">
                      <span className="text-primary-400 mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Example Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Example: QA Dashboard</h3>
            <div className="bg-dark-900 rounded-lg p-6 border border-dark-700">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-dark-800 rounded p-4 text-center">
                  <div className="text-3xl font-bold text-primary-400">847</div>
                  <div className="text-sm text-dark-400 mt-1">Tasks Completed</div>
                </div>
                <div className="bg-dark-800 rounded p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">94.3%</div>
                  <div className="text-sm text-dark-400 mt-1">Agreement Rate</div>
                </div>
                <div className="bg-dark-800 rounded p-4 text-center">
                  <div className="text-3xl font-bold text-orange-400">23</div>
                  <div className="text-sm text-dark-400 mt-1">Flagged for Review</div>
                </div>
              </div>
              
              <div className="bg-dark-800 rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-dark-400">Error Pattern Distribution</span>
                  <span className="text-xs text-dark-500 font-mono">Last 24h</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Ambiguous edge case', value: 48, color: 'bg-red-500' },
                    { label: 'Guideline misinterpretation', value: 31, color: 'bg-orange-500' },
                    { label: 'Format inconsistency', value: 21, color: 'bg-yellow-500' },
                  ].map((error, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-dark-300">{error.label}</span>
                        <span className="text-dark-400">{error.value}%</span>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <div 
                          className={`${error.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${error.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why This Matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="card p-8 bg-gradient-to-r from-primary-500/10 to-primary-700/10 border-primary-500/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Why This Matters</h3>
            <div className="space-y-4 text-lg text-dark-200 text-center max-w-3xl mx-auto">
              <p>
                <span className="text-primary-400 font-semibold">Building a UI forces clarity.</span> If you can't make a workflow visual, you don't understand it well enough.
              </p>
              <p>
                These interfaces aren't for clients to judge our work—they're for us to <span className="text-primary-400 font-semibold">execute it correctly</span>.
              </p>
              <p className="text-base text-dark-300 italic mt-6">
                Every dashboard, every QA tool, every visualization is a forcing function for systems thinking.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
