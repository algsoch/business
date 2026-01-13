import { motion } from 'framer-motion'
import { Bot, Brain, Eye, Sparkles, Code, Workflow, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      tagline: "Automate customer support 24/7",
      price: "₹25,000 - ₹75,000",
      originalPrice: "₹50,000 - ₹1,50,000",
      gradient: "from-orange-500 to-red-500",
      steps: [
        {
          title: "Intent Training",
          description: "We train your chatbot to understand customer queries in natural language",
          examples: ["Product inquiries", "Order tracking", "FAQs automation", "Lead qualification"]
        },
        {
          title: "Integration & Deployment",
          description: "Connect to WhatsApp, Telegram, website—wherever your customers are",
          examples: ["WhatsApp Business API", "Website widget", "Telegram bot", "Facebook Messenger"]
        },
        {
          title: "Continuous Learning",
          description: "Your bot gets smarter over time by learning from real conversations",
          examples: ["Conversation analytics", "Auto-improvement", "Fallback handling", "Human handoff"]
        },
        {
          title: "Analytics Dashboard",
          description: "Track conversations, response accuracy, and customer satisfaction in real-time",
          examples: ["Conversation logs", "Sentiment analysis", "Resolution rate", "User feedback"]
        }
      ]
    },
    {
      icon: Workflow,
      title: "AI Agents & Automation",
      tagline: "Autonomous systems that handle tasks for you",
      price: "₹40,000 - ₹1,25,000",
      originalPrice: "₹80,000 - ₹2,50,000",
      gradient: "from-cyan-500 to-blue-500",
      steps: [
        {
          title: "Task Automation Design",
          description: "We map your workflows and design AI agents that execute tasks autonomously",
          examples: ["Email automation", "Data entry", "Document processing", "Calendar scheduling"]
        },
        {
          title: "Tool Integration",
          description: "Connect agents to your existing tools—CRM, email, databases, APIs",
          examples: ["Zapier/Make integration", "Google Workspace", "Salesforce/HubSpot", "Slack/Teams"]
        },
        {
          title: "Decision Logic",
          description: "AI agents make smart decisions based on rules and machine learning",
          examples: ["Conditional workflows", "Priority handling", "Exception detection", "Smart routing"]
        },
        {
          title: "Monitoring & Alerts",
          description: "Get notified when agents complete tasks or need human intervention",
          examples: ["Real-time dashboards", "Error alerts", "Performance metrics", "Audit logs"]
        }
      ]
    },
    {
      icon: Brain,
      title: "Deep Learning & Custom Models",
      tagline: "Neural networks trained for your specific problem",
      price: "₹60,000 - ₹1,75,000",
      originalPrice: "₹1,20,000 - ₹3,50,000",
      gradient: "from-green-500 to-emerald-500",
      steps: [
        {
          title: "Data Preparation",
          description: "We clean, label, and augment your data to train accurate models",
          examples: ["Data cleaning", "Label annotation", "Augmentation pipelines", "Train/test splits"]
        },
        {
          title: "Model Architecture",
          description: "Custom neural networks designed for your problem—not generic templates",
          examples: ["CNNs for images", "RNNs for sequences", "Transformers for NLP", "Hybrid architectures"]
        },
        {
          title: "Training & Validation",
          description: "GPU-accelerated training with validation until production-ready accuracy",
          examples: ["Hyperparameter tuning", "Cross-validation", "Transfer learning", "Early stopping"]
        },
        {
          title: "API Deployment",
          description: "Models deployed as REST APIs, dockerized, and monitored",
          examples: ["FastAPI endpoints", "Docker containers", "Model versioning", "A/B testing"]
        }
      ]
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      tagline: "Image recognition & video analytics that see for you",
      price: "₹45,000 - ₹1,40,000",
      originalPrice: "₹90,000 - ₹2,80,000",
      gradient: "from-violet-500 to-purple-500",
      steps: [
        {
          title: "Problem Analysis",
          description: "We understand what you need to detect, classify, or track in images/videos",
          examples: ["Object detection", "Face recognition", "OCR (text extraction)", "Defect detection"]
        },
        {
          title: "Model Training",
          description: "Train vision models on your custom dataset for high accuracy",
          examples: ["YOLO for detection", "ResNet for classification", "Tesseract for OCR", "Custom datasets"]
        },
        {
          title: "Real-Time Processing",
          description: "Process video streams or images in real-time with low latency",
          examples: ["Live video analysis", "Batch image processing", "Edge deployment", "GPU optimization"]
        },
        {
          title: "Integration & Alerts",
          description: "Connect to cameras, apps, or systems with instant alerts",
          examples: ["IP camera integration", "Mobile app SDK", "Email/SMS alerts", "Dashboard reporting"]
        }
      ]
    },
    {
      icon: Sparkles,
      title: "Generative AI & RAG Systems",
      tagline: "LLMs that understand and generate content for your business",
      price: "₹50,000 - ₹1,50,000",
      originalPrice: "₹1,00,000 - ₹3,00,000",
      gradient: "from-pink-500 to-rose-500",
      steps: [
        {
          title: "Knowledge Base Setup",
          description: "Index your documents, PDFs, and data for semantic search",
          examples: ["Document parsing", "Vector embeddings", "Pinecone/Weaviate setup", "Metadata tagging"]
        },
        {
          title: "LLM Integration",
          description: "Connect GPT-4, Claude, or open-source LLMs with fine-tuning if needed",
          examples: ["OpenAI API", "Anthropic Claude", "Llama 3 fine-tuning", "Prompt engineering"]
        },
        {
          title: "RAG Pipeline",
          description: "Build retrieval systems that fetch context and generate accurate responses",
          examples: ["Semantic search", "Context ranking", "Citation tracking", "Hallucination detection"]
        },
        {
          title: "Production Deployment",
          description: "Scalable APIs with caching, rate limiting, and cost optimization",
          examples: ["Redis caching", "Token optimization", "Load balancing", "Usage analytics"]
        }
      ]
    },
    {
      icon: Code,
      title: "Backend & API Development",
      tagline: "Scalable systems that power your AI applications",
      price: "₹35,000 - ₹1,00,000",
      originalPrice: "₹70,000 - ₹2,00,000",
      gradient: "from-amber-500 to-yellow-500",
      steps: [
        {
          title: "Architecture Design",
          description: "We design scalable, maintainable backend systems for your needs",
          examples: ["REST/GraphQL APIs", "Microservices", "Event-driven architecture", "Database design"]
        },
        {
          title: "Core Implementation",
          description: "Clean, tested code with proper error handling and security",
          examples: ["FastAPI/Django", "PostgreSQL/MongoDB", "JWT authentication", "Input validation"]
        },
        {
          title: "Performance Optimization",
          description: "Database indexing, caching, and query optimization for speed",
          examples: ["Redis caching", "Query optimization", "Connection pooling", "CDN integration"]
        },
        {
          title: "DevOps & CI/CD",
          description: "Docker, GitHub Actions, and cloud deployment for smooth releases",
          examples: ["Docker containers", "GitHub Actions", "AWS/GCP deployment", "Monitoring setup"]
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "Human-in-the-Loop Systems",
      tagline: "AI suggests, humans decide—best of both worlds",
      price: "₹42,500 - ₹1,10,000",
      originalPrice: "₹85,000 - ₹2,20,000",
      gradient: "from-teal-500 to-cyan-500",
      steps: [
        {
          title: "Workflow Mapping",
          description: "Identify where AI can assist without replacing human judgment",
          examples: ["Task automation mapping", "Approval workflows", "Exception handling", "UI mockups"]
        },
        {
          title: "AI Component Build",
          description: "ML models or LLM agents that suggest, not decide",
          examples: ["Document classification", "Smart pre-filling", "Anomaly detection", "Recommendations"]
        },
        {
          title: "Review Interface",
          description: "Intuitive dashboards for humans to review and approve AI suggestions",
          examples: ["Admin panels", "Batch review tools", "Annotation interfaces", "Audit trails"]
        },
        {
          title: "System Integration",
          description: "Connect to your CRM, ERP, or existing tools seamlessly",
          examples: ["API integrations", "Webhook triggers", "User training docs", "Performance tracking"]
        }
      ]
    }
  ]

  return (
    <section id="services" className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full mb-3 sm:mb-4 md:mb-6 text-[10px] sm:text-xs md:text-sm"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span className="font-bold">HOW WE BUILD</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4">
            AI Solutions Built for Real Business Problems
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 md:px-8 mb-3 sm:mb-4">
            Production-ready AI systems—chatbots, agents, ML models, computer vision. Every solution deployed, tested, and maintained by experts.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4"
          >
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-full text-sm font-bold">
              <span>💡</span>
              <span>Pricing negotiable for startups</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500 text-blue-400 px-4 py-2 rounded-full text-sm font-bold">
              <span>🚀</span>
              <span>Bigger discounts for multiple services</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon
            return (
              <motion.div
                key={serviceIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-orange-500 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-5">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                    {service.steps.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                        className="bg-black/50 border border-gray-700 rounded-lg p-3 sm:p-4 hover:border-orange-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                          <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center font-black text-xs sm:text-sm`}>
                            {stepIndex + 1}
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-white">
                            {step.title}
                          </h4>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="space-y-1.5">
                          {step.examples.map((example, exampleIndex) => (
                            <div key={exampleIndex} className="flex items-start space-x-1.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-[10px] sm:text-xs text-gray-400">{example}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 sm:mt-8 lg:mt-10 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 max-w-2xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3">
              Need Something Custom?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 px-4">
              Every business is different. Tell us your problem, and we'll build the perfect AI solution for you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Get Custom Quote</span>
              <motion.span whileHover={{ x: 5 }}>→</motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
