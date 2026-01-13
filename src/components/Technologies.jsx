import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Cpu, Zap } from 'lucide-react'

export default function Technologies() {
  const categories = [
    {
      title: "AI & ML Frameworks",
      icon: Cpu,
      gradient: "from-orange-500 to-red-500",
      techs: [
        { name: "PyTorch", level: "Expert", emoji: "🔥" },
        { name: "TensorFlow", level: "Expert", emoji: "🧠" },
        { name: "Scikit-learn", level: "Expert", emoji: "📊" },
        { name: "Hugging Face", level: "Advanced", emoji: "🤗" },
        { name: "OpenCV", level: "Advanced", emoji: "👁️" },
        { name: "LangChain", level: "Advanced", emoji: "🔗" }
      ]
    },
    {
      title: "LLMs & Generative AI",
      icon: Zap,
      gradient: "from-cyan-500 to-blue-500",
      techs: [
        { name: "GPT-4 / Claude", level: "Expert", emoji: "✨" },
        { name: "RAG Systems", level: "Expert", emoji: "🎯" },
        { name: "Vector DBs", level: "Advanced", emoji: "🗂️" },
        { name: "Prompt Engineering", level: "Expert", emoji: "💬" },
        { name: "Fine-tuning", level: "Advanced", emoji: "⚙️" },
        { name: "Embeddings", level: "Advanced", emoji: "🔢" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Code2,
      gradient: "from-green-500 to-emerald-500",
      techs: [
        { name: "FastAPI", level: "Expert", emoji: "⚡" },
        { name: "Django", level: "Advanced", emoji: "🐍" },
        { name: "Node.js", level: "Advanced", emoji: "🟢" },
        { name: "GraphQL", level: "Intermediate", emoji: "📊" },
        { name: "REST APIs", level: "Expert", emoji: "🔌" },
        { name: "WebSockets", level: "Advanced", emoji: "🔄" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-violet-500 to-purple-500",
      techs: [
        { name: "PostgreSQL", level: "Expert", emoji: "🐘" },
        { name: "MongoDB", level: "Advanced", emoji: "🍃" },
        { name: "Redis", level: "Advanced", emoji: "⚡" },
        { name: "Pinecone", level: "Advanced", emoji: "🌲" },
        { name: "Weaviate", level: "Intermediate", emoji: "🔍" },
        { name: "ElasticSearch", level: "Intermediate", emoji: "🔎" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-pink-500 to-rose-500",
      techs: [
        { name: "AWS", level: "Advanced", emoji: "☁️" },
        { name: "Docker", level: "Expert", emoji: "🐋" },
        { name: "Kubernetes", level: "Intermediate", emoji: "⚓" },
        { name: "GitHub Actions", level: "Advanced", emoji: "🔄" },
        { name: "Terraform", level: "Intermediate", emoji: "🏗️" },
        { name: "Monitoring", level: "Advanced", emoji: "📈" }
      ]
    },
    {
      title: "Frontend",
      icon: Code2,
      gradient: "from-amber-500 to-yellow-500",
      techs: [
        { name: "React", level: "Expert", emoji: "⚛️" },
        { name: "Vue.js", level: "Advanced", emoji: "💚" },
        { name: "Tailwind CSS", level: "Expert", emoji: "🎨" },
        { name: "TypeScript", level: "Advanced", emoji: "📘" },
        { name: "Vite", level: "Advanced", emoji: "⚡" },
        { name: "Framer Motion", level: "Advanced", emoji: "🎭" }
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "bg-emerald-500/20 text-emerald-400 border-emerald-500"
      case "Advanced": return "bg-blue-500/20 text-blue-400 border-blue-500"
      case "Intermediate": return "bg-amber-500/20 text-amber-400 border-amber-500"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500"
    }
  }

  return (
    <section id="technologies" className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500 to-blue-500 rounded-full blur-3xl" />
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
            <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-bold">Our Tech Stack</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
            What We Use
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Modern tools and frameworks—we use what works, not what's trendy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div 
                      key={techIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between bg-black/50 border border-gray-700 rounded-xl p-3 sm:p-4 hover:border-orange-500/50 transition-all"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-lg sm:text-xl">{tech.emoji}</span>
                        <span className="text-sm sm:text-base text-white font-semibold">
                          {tech.name}
                        </span>
                      </div>
                      <span className={`text-xs px-2 sm:px-3 py-1 rounded-full font-bold border ${getLevelColor(tech.level)}`}>
                        {tech.level}
                      </span>
                    </motion.div>
                  ))}
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
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-2 border-violet-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4">
              🎯 Always Learning
            </h3>
            <p className="text-sm sm:text-base text-gray-300 px-4">
              AI moves fast. We stay updated with the latest models, frameworks, and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
