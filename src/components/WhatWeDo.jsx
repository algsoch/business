import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Database, Cpu, Workflow, Users, CheckCircle2, ArrowRight, Zap } from 'lucide-react'

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  const offerings = [
    {
      icon: Cpu,
      title: 'Deep Learning Development',
      subtitle: 'Training models that actually work',
      color: 'from-blue-500 to-cyan-500',
      details: [
        {
          phase: 'Data Preparation',
          description: 'We clean, augment, and structure your data for optimal model performance',
          examples: ['Medical imaging datasets', 'Text corpus preprocessing', 'Time-series data normalization']
        },
        {
          phase: 'Model Architecture',
          description: 'Custom neural networks designed for your specific problem—not generic templates',
          examples: ['CNN for tumor detection', 'Transformer models for NLP', 'Hybrid architectures for complex tasks']
        },
        {
          phase: 'Training & Optimization',
          description: 'Hyperparameter tuning, transfer learning, and validation until metrics are production-ready',
          examples: ['GPU-accelerated training', 'Early stopping strategies', 'Cross-validation protocols']
        },
        {
          phase: 'Deployment',
          description: 'Models packaged as APIs, dockerized, monitored—ready for real traffic',
          examples: ['FastAPI endpoints', 'Model versioning', 'A/B testing infrastructure']
        }
      ]
    },
    {
      icon: Zap,
      title: 'Generative AI & RAG Systems',
      subtitle: 'LLMs that understand your business',
      color: 'from-purple-500 to-pink-500',
      details: [
        {
          phase: 'Knowledge Base Setup',
          description: 'Ingest your documents, PDFs, databases—turn them into searchable vector embeddings',
          examples: ['Document parsing', 'Chunking strategies', 'Vector database indexing']
        },
        {
          phase: 'Prompt Engineering',
          description: 'Craft prompts that extract accurate, relevant, hallucination-free responses',
          examples: ['System prompts', 'Few-shot examples', 'Chain-of-thought reasoning']
        },
        {
          phase: 'RAG Pipeline',
          description: 'Retrieval-augmented generation that grounds LLM outputs in your actual data',
          examples: ['Semantic search', 'Re-ranking algorithms', 'Context injection']
        },
        {
          phase: 'Integration',
          description: 'Chat interfaces, Slack bots, API endpoints—wherever you need AI assistance',
          examples: ['Chatbot UI', 'Webhook integrations', 'Multi-turn conversations']
        }
      ]
    },
    {
      icon: Database,
      title: 'Backend & API Development',
      subtitle: 'Systems that scale and perform',
      color: 'from-green-500 to-emerald-500',
      details: [
        {
          phase: 'API Design',
          description: 'RESTful endpoints with proper authentication, rate limiting, and documentation',
          examples: ['FastAPI with Pydantic', 'JWT authentication', 'OpenAPI specs']
        },
        {
          phase: 'Database Architecture',
          description: 'PostgreSQL for relational, MongoDB for documents, Redis for caching—right tool for each job',
          examples: ['Schema design', 'Query optimization', 'Database migrations']
        },
        {
          phase: 'Business Logic',
          description: 'Core functionality that processes requests, validates data, enforces rules',
          examples: ['Payment processing', 'User workflows', 'Data transformations']
        },
        {
          phase: 'Monitoring',
          description: 'Logging, metrics, alerts—know when something breaks before users do',
          examples: ['Error tracking', 'Performance metrics', 'Uptime monitoring']
        }
      ]
    },
    {
      icon: Workflow,
      title: 'Human-in-the-Loop Automation',
      subtitle: 'AI assists, humans control',
      color: 'from-orange-500 to-red-500',
      details: [
        {
          phase: 'AI Processing',
          description: 'AI handles the bulk work—classification, extraction, generation',
          examples: ['Document classification', 'Data extraction', 'Content generation']
        },
        {
          phase: 'Review Interface',
          description: 'Humans review AI outputs through intuitive dashboards',
          examples: ['Annotation tools', 'Approval workflows', 'Quality scoring']
        },
        {
          phase: 'Feedback Loop',
          description: 'Corrections feed back into the system to improve AI behavior',
          examples: ['Active learning', 'Model retraining', 'Performance tracking']
        },
        {
          phase: 'Full Automation',
          description: 'Once confidence is high, move to full automation with exception handling',
          examples: ['Confidence thresholds', 'Fallback logic', 'Human escalation']
        }
      ]
    }
  ]

  return (
    <section id="what-we-do" className="relative py-16 sm:py-20 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 px-3 sm:px-4 py-2 rounded-full mb-4"
            >
              <Code className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-xs sm:text-sm font-medium">How We Execute</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
              What We Do, <span className="gradient-text">Step by Step</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-dark-300 max-w-3xl mx-auto px-4">
              Not vague promises. Here's exactly how we build each type of system—from data to deployment.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {offerings.map((offering, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(index)}
                className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === index
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-dark-700 bg-dark-800/50 hover:border-dark-600'
                }`}
              >
                {(() => {
                  const Icon = offering.icon
                  return <Icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${
                    activeTab === index ? 'text-primary-400' : 'text-dark-400'
                  }`} />
                })()}
                <div className={`text-xs sm:text-sm font-semibold mb-1 ${
                  activeTab === index ? 'text-primary-400' : 'text-dark-300'
                }`}>
                  {offering.title}
                </div>
                <div className="text-xs text-dark-500 hidden sm:block">{offering.subtitle}</div>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="card bg-gradient-to-br from-dark-800/80 to-dark-900/80 border-primary-500/30 p-6 sm:p-8 md:p-12"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${offerings[activeTab].color} flex items-center justify-center`}
              >
                {(() => {
                  const Icon = offerings[activeTab].icon
                  return <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                })()}
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{offerings[activeTab].title}</h3>
                <p className="text-sm sm:text-base text-dark-400">{offerings[activeTab].subtitle}</p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {offerings[activeTab].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="relative pl-6 sm:pl-8 border-l-2 border-primary-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h4 className="text-base sm:text-lg font-bold text-primary-400 mb-2 sm:mb-0">
                      {index + 1}. {detail.phase}
                    </h4>
                  </div>
                  
                  <p className="text-sm sm:text-base text-dark-200 mb-3 leading-relaxed">
                    {detail.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {detail.examples.map((example, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                        className="flex items-center space-x-2 bg-dark-900/50 border border-dark-700 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm"
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary-400 flex-shrink-0" />
                        <span className="text-dark-300">{example}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-base sm:text-lg text-dark-300 mb-6 px-4">
              Every system we build follows this structured approach—no guesswork, no shortcuts.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-primary-600 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg cursor-pointer"
            >
              <span className="text-sm sm:text-base">See These Methods in Action</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
