import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Database, Zap, MessageSquare, Image, FileText, Video, Gauge, Code, Layers, Tag } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Brain,
      title: 'Deep Learning & Computer Vision',
      story: 'From medical imaging to product recognition',
      color: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/10',
      items: [
        'CNN models: brain tumor detection, image classification, object recognition',
        'PyTorch & TensorFlow training pipelines with GPU optimization',
        'Transfer learning: ResNet, EfficientNet, BERT for fast deployment',
        'Computer vision: object detection, semantic segmentation, face recognition',
        'NLP systems: text classification, NER, sentiment analysis',
        'Model fine-tuning and quantization for production',
      ]
    },
    {
      icon: MessageSquare,
      title: 'Chatbots & RAG Systems',
      story: 'AI that actually talks to your customers',
      color: 'from-purple-500 to-pink-500',
      bgGlow: 'bg-purple-500/10',
      items: [
        'RAG chatbots over your private documents (PDFs, wikis, databases)',
        'LangChain + vector databases (Pinecone, Qdrant, ChromaDB)',
        'Customer support bots that know your products',
        'Document Q&A: search through thousands of pages instantly',
        'Dynamic prompt studios for testing and optimization',
        'OpenAI, Anthropic, or open-source LLMs',
      ]
    },
    {
      icon: Tag,
      title: 'Data Annotation & Labeling',
      story: 'High-quality labeled datasets for training',
      color: 'from-green-500 to-emerald-500',
      bgGlow: 'bg-green-500/10',
      items: [
        'Image annotation: bounding boxes, segmentation masks, keypoint detection',
        'Text annotation: NER, intent classification, QA pairs, entity linking',
        'Video annotation: object tracking, action recognition, temporal segmentation',
        'Audio transcription and speaker identification',
        'Custom annotation interfaces built for your specific needs',
        'Quality assurance and inter-annotator agreement checks',
      ]
    },
    {
      icon: Database,
      title: 'Web Scraping & Data Extraction',
      story: 'Getting the raw data AI needs to learn',
      color: 'from-orange-500 to-red-500',
      bgGlow: 'bg-orange-500/10',
      items: [
        'Web scrapers: BeautifulSoup, Selenium, Scrapy for any website',
        'API integration and data extraction from third-party services',
        'PDF parsing and structured data extraction',
        'Real-time data monitoring and automated collection',
        'Data cleaning, deduplication, and validation',
        'ETL pipelines: ingest → transform → validate → load',
      ]
    },
    {
      icon: Zap,
      title: 'Backend APIs & Automation',
      story: 'Serving predictions at scale',
      color: 'from-yellow-500 to-orange-500',
      bgGlow: 'bg-yellow-500/10',
      items: [
        'FastAPI backends serving ML model predictions',
        'PostgreSQL, MongoDB, Redis for data storage and caching',
        'Task queues (Celery, Redis) for async processing',
        'Human-in-loop workflows: AI suggests, humans review, system learns',
        'Webhook integrations and event-driven architectures',
        'Rate limiting, authentication, and API security',
      ]
    },
    {
      icon: Gauge,
      title: 'Monitoring & Dashboards',
      story: 'See exactly what is happening in production',
      color: 'from-cyan-500 to-blue-500',
      bgGlow: 'bg-cyan-500/10',
      items: [
        'Real-time dashboards showing system health and metrics',
        'Performance tracking: latency, throughput, error rates, costs',
        'Model drift detection and automated retraining triggers',
        'Admin panels for data management and output review',
        'Alerting systems for failures and anomalies',
        'Usage analytics and business metrics',
      ]
    },
    {
      icon: Code,
      title: 'Full-Stack Web Applications',
      story: 'Complete systems from frontend to database',
      color: 'from-pink-500 to-rose-500',
      bgGlow: 'bg-pink-500/10',
      items: [
        'MERN stack: MongoDB, Express, React, Node.js',
        'Salon booking systems, milestone trackers, poll APIs',
        'React + Tailwind frontends with smooth animations',
        'User authentication, role-based access control',
        'Integration of AI features into existing apps',
        'Responsive design for mobile, tablet, desktop',
      ]
    },
    {
      icon: Layers,
      title: 'Deployment & MLOps',
      story: 'From laptop to production servers',
      color: 'from-indigo-500 to-purple-500',
      bgGlow: 'bg-indigo-500/10',
      items: [
        'Docker containerization for all services',
        'Deployment to Render, AWS, Heroku, or your cloud',
        'CI/CD pipelines for automated testing and deployment',
        'Model versioning and A/B testing frameworks',
        'Load balancing and auto-scaling',
        'Complete API documentation and testing suites',
      ]
    },
  ]

  return (
    <section id="services" className="relative py-24 border-t border-dark-800">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6"
            >
              <span className="text-primary-400 font-semibold text-sm">8 Core Service Areas</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything We Actually Do</h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Not vague promises. Real services from real projects we have shipped and are running in production right now.
            </p>
          </div>

          {/* Services - Each with its own story */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative"
              >
                {/* Service Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card p-8 md:p-10 relative overflow-hidden group"
                >
                  {/* Animated glow effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.05, 0.15, 0.05],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${service.color} blur-3xl ${service.bgGlow}`}
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.03, 0.1, 0.03],
                      rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className={`absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-tl ${service.color} blur-3xl ${service.bgGlow}`}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                      {/* Icon Section */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 mb-6 md:mb-0"
                      >
                        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                          {(() => {
                            const Icon = service.icon
                            return <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                          })()}
                        </div>
                      </motion.div>

                      {/* Content Section */}
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                          <p className={`text-lg bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-semibold mb-6`}>
                            {service.story}
                          </p>
                        </motion.div>

                        {/* Items Grid */}
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                          {service.items.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + i * 0.05 }}
                              whileHover={{ x: 5, color: '#60a5fa' }}
                              className="flex items-start space-x-3 text-dark-200 group/item"
                            >
                              <motion.span 
                                whileHover={{ scale: 1.5, rotate: 90 }}
                                className={`text-lg bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-bold mt-0.5`}
                              >
                                ▸
                              </motion.span>
                              <span className="text-sm md:text-base group-hover/item:text-primary-400 transition-colors">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-center mt-16 px-4"
          >
            <p className="text-xl md:text-2xl text-dark-200 font-medium">
              Every service listed here? <span className="text-primary-400 font-bold">We have actually built and deployed it.</span>
              <br/>
              <span className="text-dark-400 text-lg mt-2 block">Not theory. Not plans. Running code serving real users.</span>
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
