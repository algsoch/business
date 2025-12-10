import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, CheckCircle2 } from 'lucide-react'

export default function Identity() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const points = [
    { icon: '🕷️', title: 'Web Scraping & Data Extraction', desc: 'Selenium, BeautifulSoup, Scrapy - collecting raw data from anywhere', tags: ['Python', 'Selenium', 'Scrapy'] },
    { icon: '📝', title: 'Data Entry & Annotation Services', desc: 'Image, text, video labeling - creating clean training datasets with custom interfaces', tags: ['Labeling', 'QA', 'Data Cleaning'] },
    { icon: '💻', title: 'Full-Stack Web Applications', desc: 'Frontend: React, HTML5, CSS3, JavaScript/TypeScript | Backend: Python (Django/Flask), Node.js, Java (Spring Boot) | Databases: MongoDB, MySQL, PostgreSQL', tags: ['React', 'Node.js', 'Python', 'Java', 'MongoDB', 'MySQL'] },
    { icon: '⚡', title: 'Backend APIs & Services', desc: 'FastAPI, Express.js, REST APIs, GraphQL - serving predictions and handling production traffic', tags: ['FastAPI', 'REST', 'GraphQL', 'Microservices'] },
    { icon: '💬', title: 'RAG Chatbots & LLM Integration', desc: 'LangChain, vector databases (Pinecone, ChromaDB), OpenAI, Gemini API - talking to real customers over private docs', tags: ['LangChain', 'OpenAI', 'Gemini', 'RAG'] },
    { icon: '🔧', title: 'LLM Fine-Tuning & Model Training', desc: 'Fine-tuning GPT, Gemini, Llama models on custom datasets - making AI understand your specific domain', tags: ['Fine-tuning', 'LoRA', 'PEFT'] },
    { icon: '🧠', title: 'Deep Learning Models', desc: 'CNNs, object detection (YOLO, R-CNN), NLP (transformers, BERT) - PyTorch, TensorFlow training from scratch', tags: ['PyTorch', 'TensorFlow', 'CNNs', 'NLP'] },
    { icon: '📊', title: 'Monitoring & Analytics Dashboards', desc: 'Real-time dashboards showing what is happening in production - Grafana, custom React dashboards', tags: ['Grafana', 'Analytics', 'Metrics'] },
    { icon: '🔄', title: 'Human-in-Loop Automation', desc: 'AI suggests, humans review, system learns and improves - continuous feedback loops', tags: ['Automation', 'Feedback', 'ML Ops'] },
  ]

  return (
    <section id="identity" className="relative py-24 border-t border-dark-800">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Identity</h2>
              <p className="text-dark-400 mt-1">What we are in one definition</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-dark-200 leading-relaxed">
                We're 5 engineers who have been shipping AI systems for years. Not consultants pitching decks—
                <span className="text-primary-400 font-semibold"> we're the ones writing the actual code</span>. 
                Real systems running in production: chatbots answering customers, APIs serving predictions at scale, 
                scrapers extracting data 24/7, dashboards showing what works and what breaks.
              </p>
              
              <p className="text-dark-300 leading-relaxed font-semibold">
                What we have actually built and deployed:
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-dark-700/50 hover:border-primary-500/70 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/0 to-cyan-500/0 group-hover:from-primary-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{point.icon}</div>
                    <h3 className="text-lg font-bold text-dark-50 group-hover:text-primary-400 transition-colors">{point.title}</h3>
                  </div>
                  
                  <p className="text-dark-300 leading-relaxed mb-3 text-sm">{point.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {point.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary-500/10 to-cyan-500/10 border border-primary-500/30">
                <p className="text-dark-200 leading-relaxed text-lg">
                  <span className="text-primary-400 font-bold text-xl">We don't just train a model and hand over a Jupyter notebook.</span>
                  <br/><br/>
                  We scrape the data, annotate it if needed, clean it, 
                  <span className="text-cyan-400 font-semibold"> fine-tune the LLM</span>, 
                  <span className="text-purple-400 font-semibold"> build RAG pipelines with Gemini/OpenAI</span>, 
                  train the deep learning model, build the FastAPI backend, create the React frontend, 
                  set up the MySQL/MongoDB database, deploy with monitoring, create the analytics dashboard. 
                  <span className="text-primary-400 font-bold text-xl"> The whole damn thing.</span>
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-dark-800/50 border-l-4 border-primary-500">
                <p className="text-dark-100 leading-relaxed font-semibold text-lg">
                  <span className="text-primary-400 font-bold text-xl">Why this matters:</span> 
                  <br/><br/>
                  Most teams do one piece—data science <span className="text-dark-400">OR</span> frontend <span className="text-dark-400">OR</span> backend 
                  <span className="text-dark-400">OR</span> DevOps <span className="text-dark-400">OR</span> annotation <span className="text-dark-400">OR</span> fine-tuning. 
                  <br/><br/>
                  When you hire us, you get people who have done <span className="text-primary-400 font-bold">all of it</span>—
                  <span className="text-cyan-400"> HTML/CSS/JavaScript</span>, 
                  <span className="text-blue-400"> React</span>, 
                  <span className="text-green-400"> Node.js</span>, 
                  <span className="text-yellow-400"> Python</span>, 
                  <span className="text-red-400"> Java</span>, 
                  <span className="text-purple-400"> MongoDB</span>, 
                  <span className="text-pink-400"> MySQL</span>, 
                  <span className="text-orange-400"> FastAPI</span>, 
                  <span className="text-indigo-400"> PyTorch</span>. 
                  <br/><br/>
                  No hand-offs, no blame games, no "that's not my job." 
                  <span className="text-primary-400 font-bold text-xl"> Just working systems.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
