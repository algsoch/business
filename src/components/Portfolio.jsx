import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Brain, MessageSquare, CheckCircle, TrendingUp, Sparkles, Code } from 'lucide-react'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'Brain Tumor Detection',
      category: 'Deep Learning • Computer Vision',
      description: 'CNN-based medical imaging system for automated brain tumor detection and classification from MRI scans.',
      tech: ['PyTorch', 'CNN', 'Flask', 'Medical Imaging'],
      url: 'https://brain-tumor-mcug.onrender.com/',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      impact: 'Medical AI diagnosis system'
    },
    {
      title: 'Dynamic Prompt Studio',
      category: 'Generative AI • LLM Tools',
      description: 'Interactive platform for testing and optimizing prompts for LLMs with real-time response analysis and comparison.',
      tech: ['OpenAI API', 'React', 'FastAPI', 'Prompt Engineering'],
      url: 'https://dynamic-prompt-studio-2wyi.onrender.com/',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
      impact: 'AI prompt optimization tool'
    },
    {
      title: 'Portfolio AI Chatbot',
      category: 'RAG • Conversational AI',
      description: 'Intelligent chatbot with RAG architecture to answer questions about portfolio, projects, and technical expertise.',
      tech: ['LangChain', 'Vector DB', 'FastAPI', 'RAG System'],
      url: 'https://myportfoliochatbot-yg2r.onrender.com/',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      impact: 'Knowledge base chatbot'
    },
    {
      title: 'Assistant Chatbot',
      category: 'NLP • Virtual Assistant',
      description: 'Multi-purpose AI assistant with context awareness, task management, and natural language understanding.',
      tech: ['NLP', 'Python', 'Machine Learning', 'API Integration'],
      url: 'https://assistant-chatbot-izrt.onrender.com/',
      icon: MessageSquare,
      color: 'from-orange-500 to-red-500',
      impact: 'Personal AI assistant'
    },
    {
      title: 'QuickPoll API',
      category: 'Backend • API Development',
      description: 'RESTful API for real-time polling and voting systems with analytics dashboard and user management.',
      tech: ['FastAPI', 'PostgreSQL', 'REST API', 'Real-time'],
      url: 'https://quickpoll-api-3lqv.onrender.com/',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      impact: 'Real-time polling platform'
    },
    {
      title: 'HTML Validator',
      category: 'Automation • Web Tools',
      description: 'Automated HTML validation tool with accessibility checks, SEO analysis, and best practices enforcement.',
      tech: ['Python', 'BeautifulSoup', 'Flask', 'Automation'],
      url: 'https://html-checker-yc8t.onrender.com/',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      impact: 'Code quality automation'
    },
    {
      title: 'Milestone Tracker',
      category: 'Project Management • Full-Stack',
      description: 'Comprehensive project tracking system with progress visualization, deadline management, and team collaboration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Real-time Updates'],
      url: 'https://milestone-tracker-1lj5.onrender.com/',
      icon: CheckCircle,
      color: 'from-teal-500 to-cyan-500',
      impact: 'Project management system'
    },
    {
      title: 'Alert Hair Salon',
      category: 'Business Automation • Booking System',
      description: 'Full-featured salon management platform with appointment scheduling, customer management, and notifications.',
      tech: ['Full-Stack', 'Booking API', 'Payment Integration', 'SMS Alerts'],
      url: 'https://alert-hair-saloon-1.onrender.com/',
      icon: CheckCircle,
      color: 'from-pink-500 to-rose-500',
      impact: 'Business automation platform'
    },
    {
      title: 'Sachin Portfolio',
      category: 'Frontend • UI/UX Design',
      description: 'Modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      url: 'https://algsoch.github.io/sachin/',
      icon: Sparkles,
      color: 'from-violet-500 to-purple-500',
      impact: 'Professional portfolio site'
    },
  ]

  return (
    <section id="portfolio" className="relative py-24 bg-dark-800/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 px-4 py-2 rounded-full mb-4"
            >
              <Code className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-medium">Real Projects</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Live Work. <span className="gradient-text">Not Promises.</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              These aren't mockups or demos. Every project below is a production system we've built and deployed—
              from deep learning models to full-stack applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
                }}
                className="card group relative overflow-hidden cursor-pointer"
              >
                {/* Animated background gradient */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} blur-2xl`}
                />

                <div className="relative z-10 p-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Category */}
                  <div className="text-xs text-primary-400 font-semibold mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 px-3 py-1 rounded-full mb-4">
                    <CheckCircle className="w-3 h-3 text-primary-400" />
                    <span className="text-xs text-primary-400 font-medium">{project.impact}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.05 + i * 0.05 }}
                        className="text-xs bg-dark-800 border border-dark-700 px-2 py-1 rounded text-dark-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.div
                    className="flex items-center space-x-2 text-primary-400 font-semibold text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.a>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="card bg-gradient-to-br from-primary-500/20 via-dark-800/50 to-primary-700/20 border-primary-500/50 p-8 md:p-12 text-center relative overflow-hidden"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 blur-3xl"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                This is What We Do.
              </h3>
              <p className="text-lg text-dark-200 max-w-3xl mx-auto mb-6">
                From <span className="text-primary-400 font-semibold">brain tumor detection CNNs</span> to{' '}
                <span className="text-primary-400 font-semibold">RAG-powered chatbots</span>,{' '}
                <span className="text-primary-400 font-semibold">real-time APIs</span> to{' '}
                <span className="text-primary-400 font-semibold">full-stack platforms</span>—
                we build AI systems that solve real problems.
              </p>
              <p className="text-dark-400 italic">
                Every line of code. Every model. Every deployment. Done by us.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
