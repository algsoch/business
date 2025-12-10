import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

export default function CaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    { label: 'Responses Evaluated', before: '0', after: '2,847', icon: TrendingUp },
    { label: 'Errors Caught', before: 'Unknown', after: '127', icon: AlertCircle },
    { label: 'Failure Rate Identified', before: 'Hidden', after: '4.5%', icon: AlertCircle },
    { label: 'Production Confidence', before: '70%', after: '98%', icon: CheckCircle },
  ]

  const timeline = [
    { day: 'Day 1-2', title: 'Pilot Batch', description: '100 responses evaluated by all 5 members. Found 8 edge cases. Built evaluation rubric.' },
    { day: 'Day 3-7', title: 'Full Evaluation', description: '2,847 responses evaluated. Disagreements resolved in daily syncs. Patterns documented.' },
    { day: 'Day 8-9', title: 'Automation', description: 'Built Python script to catch 67% of errors automatically. Reduced QA time by 60%.' },
    { day: 'Day 10', title: 'Delivery', description: 'Delivered report with 127 flagged cases, error taxonomy, and automated QA tool.' },
  ]

  return (
    <section id="casestudy" className="relative py-24 border-t border-dark-800">
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
              className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full mb-4"
            >
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Real Project Results</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study: Fintech Chatbot</h2>
            <p className="text-xl text-dark-300">How we caught 127 silent failures in 10 days</p>
          </div>

          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 mb-12 bg-red-500/5 border-red-500/30"
          >
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-12 h-12 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                <p className="text-lg text-dark-200 leading-relaxed mb-4">
                  A fintech startup had deployed a GPT-4 based chatbot to answer customer questions about 
                  loans, interest rates, and payment schedules. After 3 weeks live, customer support noticed 
                  users were getting incorrect information.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-dark-900/50 rounded-lg p-4">
                    <div className="text-sm text-dark-400 mb-1">Model Accuracy</div>
                    <div className="text-3xl font-bold text-red-400">93%</div>
                    <div className="text-xs text-dark-500 mt-1">Looked great in testing</div>
                  </div>
                  <div className="bg-dark-900/50 rounded-lg p-4">
                    <div className="text-sm text-dark-400 mb-1">Wrong Answers Given</div>
                    <div className="text-3xl font-bold text-red-400">1,200+</div>
                    <div className="text-xs text-dark-500 mt-1">To real customers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">10-Day Execution Timeline</h3>
            <div className="space-y-4">
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="card p-6 hover:border-primary-500/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary-500/10 flex items-center justify-center">
                        <span className="text-primary-400 font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm text-primary-400 font-semibold">{phase.day}</span>
                        <ArrowRight className="w-4 h-4 text-dark-600" />
                        <span className="text-lg font-bold">{phase.title}</span>
                      </div>
                      <p className="text-dark-300">{phase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Measurable Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="card text-center p-6"
                >
                  <metric.icon className="w-10 h-10 text-primary-400 mx-auto mb-4" />
                  <div className="text-sm text-dark-400 mb-2">{metric.label}</div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-dark-500 line-through text-sm">{metric.before}</span>
                    <ArrowRight className="w-4 h-4 text-primary-400" />
                    <span className="text-2xl font-bold text-primary-400">{metric.after}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What We Delivered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="card p-8 bg-gradient-to-r from-green-500/10 to-green-700/10 border-green-500/30"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span>What We Delivered</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-200">Complete evaluation report: 2,847 responses analyzed</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-200">127 flagged cases with severity rankings</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-200">Error taxonomy: 6 categories of failure modes</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-200">Python QA automation tool (67% error detection)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-200">Updated evaluation rubric for future deployments</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-dark-200">Process documentation for their internal team</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-green-500/20">
              <p className="text-lg text-dark-200 text-center">
                <span className="text-green-400 font-semibold">Client outcome:</span> Re-deployed chatbot with 98% confidence. 
                Zero hallucination incidents in 6 weeks post-launch.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
