import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: "Silent Disease Detection Engine",
      category: "AI/ML Health Tech - GFG Competition",
      description: "AI system detecting 5 diseases (Diabetes, Hypertension, Cardiac, Liver, Mental Health) from 25 health signals. 91% accuracy, <2s prediction. Built for Byte Quest 2025.",
      tech: ["XGBoost", "FastAPI", "React", "Python", "Scikit-learn"],
      gradient: "from-red-500 to-pink-600",
      icon: "🏥",
      link: "https://github.com/algsoch/GFGBQ-Team-algsoch",
      homepage: "https://silent-killer-kdnm.onrender.com/",
      stars: 0
    },
    {
      title: "Brain Tumor Detection System",
      category: "Computer Vision & Deep Learning",
      description: "CNN model for brain tumor classification using medical images. Deployed web app with real-time prediction.",
      tech: ["PyTorch", "Jupyter", "FastAPI", "Python"],
      gradient: "from-red-500 to-orange-500",
      icon: "🧠",
      link: "https://github.com/algsoch/brain_tumor",
      homepage: "https://brain-tumor-mcug.onrender.com/",
      stars: 0
    },
    {
      title: "AI Chatbot Assistant",
      category: "AI Chatbot & NLP",
      description: "Intelligent chatbot assistant for automated customer support. Pattern recognition and dynamic response generation.",
      tech: ["Python", "LangChain", "FastAPI", "Vercel"],
      gradient: "from-cyan-500 to-blue-500",
      icon: "🤖",
      link: "https://github.com/algsoch/assistant_chatbot",
      homepage: "https://chatbot-for-tds-iit-madras-shy2.vercel.app",
      stars: 1
    },
    {
      title: "OOP Learning Platform",
      category: "Full-Stack Web App",
      description: "Interactive platform to learn object-oriented programming concepts. Deployed on Render with clean UI.",
      tech: ["JavaScript", "Node.js", "HTML/CSS", "Render"],
      gradient: "from-green-500 to-emerald-500",
      icon: "📚",
      link: "https://github.com/algsoch/opps",
      homepage: "https://oop-learning-platform.onrender.com/",
      stars: 0
    },
    {
      title: "Indian Labour Law RAG System",
      category: "Generative AI & RAG",
      description: "AI-powered legal assistant for Indian labour law queries. Document Q&A using RAG architecture.",
      tech: ["Python", "LangChain", "FastAPI", "Vercel"],
      gradient: "from-violet-500 to-purple-500",
      icon: "⚖️",
      link: "https://github.com/algsoch/indianlabour",
      homepage: "https://indianlabour.vercel.app",
      stars: 0
    },
    {
      title: "HTML Code Cleaner",
      category: "Web Tool & Automation",
      description: "Web app to clean HTML code and remove unwanted text like cite_start markers. Simple, effective solution.",
      tech: ["CSS", "JavaScript", "HTML", "Render"],
      gradient: "from-orange-500 to-red-500",
      icon: "🧹",
      link: "https://github.com/algsoch/html-checker",
      homepage: "https://html-checker-1.onrender.com",
      stars: 1
    },
    {
      title: "Dynamic Prompt Studio",
      category: "AI Tool & Automation",
      description: "Advanced AI-powered tool for generating dynamic prompt templates and curating educational content.",
      tech: ["Python", "FastAPI", "OpenAI", "Render"],
      gradient: "from-pink-500 to-rose-500",
      icon: "✨",
      link: "https://github.com/algsoch/dynamic-prompt-studio",
      homepage: "https://prompt-template-studio-v1-0-2.onrender.com/",
      stars: 0
    },
    {
      title: "AI Freelancer Bid Writer",
      category: "AI Automation & NLP",
      description: "AI agent that writes professional bids for freelancer.com projects. Automated proposal generation.",
      tech: ["Python", "OpenAI", "FastAPI", "Vercel"],
      gradient: "from-amber-500 to-yellow-500",
      icon: "📝",
      link: "https://github.com/algsoch/freelancer.com",
      homepage: "https://freelancer-com-omega.vercel.app",
      stars: 0
    },
    {
      title: "Video Portfolio Website",
      category: "Frontend & Design",
      description: "Professional video portfolio website with modern design. Built for videographer client.",
      tech: ["CSS", "HTML", "JavaScript", "GitHub Pages"],
      gradient: "from-teal-500 to-cyan-500",
      icon: "🎬",
      link: "https://github.com/algsoch/edited.frame",
      homepage: "https://algsoch.github.io/sachin/",
      stars: 1
    },
    {
      title: "Agricultural Data Collection System",
      category: "Backend & Automation",
      description: "Automated data collection system for agricultural applications. Python-based data pipeline.",
      tech: ["Python", "Data Processing", "Automation"],
      gradient: "from-green-600 to-lime-500",
      icon: "🌾",
      link: "https://github.com/algsoch/agri-data-template",
      stars: 0
    },
    {
      title: "Web Scraper for German Companies",
      category: "Web Scraping & Data",
      description: "Scraping tool to extract information about Germany-based companies. Data extraction automation.",
      tech: ["Python", "BeautifulSoup", "Selenium"],
      gradient: "from-indigo-500 to-blue-500",
      icon: "🔍",
      link: "https://github.com/algsoch/web_scraping",
      stars: 0
    },
    {
      title: "Hospital Data Extraction Tool",
      category: "Data Extraction & NLP",
      description: "Python-based tool for finding and extracting people details from hospital and clinic data.",
      tech: ["Python", "Data Extraction", "Automation"],
      gradient: "from-red-600 to-pink-500",
      icon: "🏥",
      link: "https://github.com/algsoch/data_extraction",
      stars: 0
    },
    {
      title: "TDS Assistant Chatbot",
      category: "AI Assistant & Query Solver",
      description: "Vicky Data Science Assistant with pattern recognition and specialized solvers for data science queries.",
      tech: ["Python", "FastAPI", "Pattern Matching", "Render"],
      gradient: "from-purple-600 to-violet-500",
      icon: "🎯",
      link: "https://github.com/algsoch/chatbot_assistant",
      homepage: "https://tds-assistant.onrender.com/",
      stars: 0
    }
  ]

  return (
    <section id="portfolio" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-500 to-red-500 rounded-full blur-3xl" />
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-bold">Production Projects</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
            Our Portfolio
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Real projects from my GitHub—AI systems, web apps, automation tools, all deployed and working
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-orange-500 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl">
                    {project.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.stars > 0 && (
                      <span className="flex items-center space-x-1 text-yellow-400 text-sm">
                        <span>⭐</span>
                        <span>{project.stars}</span>
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4`}>
                  {project.category}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed min-h-[60px] sm:min-h-[72px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-black/50 border border-gray-700 text-gray-300 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-emerald-400 font-semibold">
                    <span>✓</span>
                    <span>Live & Deployed</span>
                  </div>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-3xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4">
              🚀 Your Project Could Be Next
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 px-4">
              These are real systems built for real clients. We can build similar solutions for your business—or something completely custom.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <motion.span whileHover={{ x: 5 }}>→</motion.span>
              </a>
              <a
                href="https://github.com/algsoch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border border-gray-700 hover:border-orange-500"
              >
                <Github className="w-5 h-5" />
                <span>View GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
