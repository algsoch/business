import { motion } from 'framer-motion'
import { 
  Globe, Server, Bot, Zap, Sparkles, Brain, Eye, Database, 
  Code, Wrench, Cloud, GitBranch, Settings, Users, FileText, Rocket
} from 'lucide-react'

export default function ServicesDetailed() {
  const serviceCategories = [
    {
      category: "Core Software & Web Systems",
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
      services: [
        "Custom Web Application Development (B2B / B2C)",
        "Full-Stack Platform Development",
        "Admin Dashboards & Internal Tools",
        "Backend Architecture & API Engineering",
        "Authentication & Role-Based Access Systems",
        "Real-time Systems (WebSockets, Event-driven)"
      ]
    },
    {
      category: "Backend & Infrastructure",
      icon: Server,
      gradient: "from-cyan-500 to-blue-500",
      services: [
        "REST & GraphQL API Development",
        "High-Performance Backend Systems",
        "Database Design & Optimization",
        "Caching & Performance Tuning",
        "Cloud-Native Application Backends"
      ]
    },
    {
      category: "AI Chatbot Systems",
      icon: Bot,
      gradient: "from-green-500 to-emerald-500",
      services: [
        "Customer Support AI Chatbots",
        "Business & Internal Knowledge Assistants",
        "Domain-Specific Chatbots",
        "Multi-language Chatbot Systems",
        "WhatsApp / Web / Telegram Bot Integration"
      ]
    },
    {
      category: "Agentic AI & Automation",
      icon: Zap,
      gradient: "from-violet-500 to-purple-500",
      services: [
        "Autonomous Task Execution Agents",
        "Multi-step AI Workflow Automation",
        "Tool-Using AI Agents",
        "Decision-Based AI Systems",
        "AI Agents with Human-in-the-Loop Control"
      ]
    },
    {
      category: "Generative AI & RAG Systems",
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-500",
      services: [
        "Retrieval-Augmented Generation (RAG) Systems",
        "Enterprise Knowledge Base AI",
        "Document Q&A Systems",
        "Hallucination-Controlled LLM Pipelines",
        "Prompt & Context Engineering Systems"
      ]
    },
    {
      category: "Custom AI / Machine Learning",
      icon: Brain,
      gradient: "from-indigo-500 to-blue-500",
      services: [
        "Custom ML Model Development",
        "Predictive & Risk Scoring Systems",
        "NLP Models & Pipelines",
        "Deep Learning Model Training",
        "Model Evaluation & Optimization"
      ]
    },
    {
      category: "Computer Vision Solutions",
      icon: Eye,
      gradient: "from-amber-500 to-orange-500",
      services: [
        "Image Classification Systems",
        "Object Detection & Tracking",
        "OCR & Text Extraction",
        "Medical Image Analysis",
        "Real-time Video Analytics"
      ]
    },
    {
      category: "Data Engineering & Automation",
      icon: Database,
      gradient: "from-teal-500 to-cyan-500",
      services: [
        "Web Scraping & Data Extraction",
        "ETL & Data Pipelines",
        "Data Cleaning & Transformation",
        "Scheduled & Event-driven Automation",
        "Market & Business Intelligence Pipelines"
      ]
    },
    {
      category: "AI-Powered Internal Tools",
      icon: Wrench,
      gradient: "from-lime-500 to-green-500",
      services: [
        "AI Writing & Content Tools",
        "Research & Analysis Assistants",
        "Prompt Engineering Platforms",
        "Internal Decision-Support Systems"
      ]
    },
    {
      category: "Human-in-the-Loop AI Systems",
      icon: Users,
      gradient: "from-fuchsia-500 to-pink-500",
      services: [
        "AI Suggestion & Recommendation Engines",
        "Review & Approval Workflows",
        "Annotation & Validation Interfaces",
        "Audit & Traceability Systems"
      ]
    },
    {
      category: "Full AI + Web Platforms",
      icon: Rocket,
      gradient: "from-red-500 to-pink-500",
      services: [
        "End-to-End System Architecture Design",
        "Frontend + Backend + AI Integration",
        "Scalable SaaS & Platform Development",
        "Production Deployment & Maintenance"
      ]
    },
    {
      category: "Cloud, DevOps & Deployment",
      icon: Cloud,
      gradient: "from-sky-500 to-blue-500",
      services: [
        "Dockerized Application Deployment",
        "CI/CD Pipeline Setup",
        "Cloud Infrastructure Management",
        "Monitoring, Logging & Alerts",
        "Cost-Optimized Scaling"
      ]
    },
    {
      category: "Bespoke & Experimental Systems",
      icon: GitBranch,
      gradient: "from-purple-500 to-indigo-500",
      services: [
        "Custom-Built AI + Software Systems",
        "Hybrid & Non-Standard Architectures",
        "Research-Grade & Experimental Builds",
        "Systems Built Strictly to Specification"
      ]
    }
  ]

  return (
    <section id="services-detailed" className="relative py-8 sm:py-12 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full mb-6"
          >
            <span className="text-orange-400 font-bold text-sm sm:text-base">FULL SERVICE OFFERING</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Services Offered
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            From AI chatbots to full-stack platforms, computer vision to cloud deployment—comprehensive solutions for modern software challenges
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((category, idx) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="relative text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {category.category}
                </h3>

                {/* Services List */}
                <ul className="relative space-y-3">
                  {category.services.map((service, sIdx) => (
                    <motion.li
                      key={sIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + sIdx * 0.02 }}
                      className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-200"
                    >
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient} mt-2 mr-3 flex-shrink-0`} />
                      <span className="text-sm sm:text-base leading-relaxed">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-8 py-10 max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Looking for something specific?
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Every project is unique. If you don't see what you need, let's discuss a custom solution.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
            >
              Discuss Your Project →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
