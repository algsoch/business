import { motion } from 'framer-motion'
import { MessageSquare, FileText, Code2, Rocket, CheckCircle2, Zap } from 'lucide-react'

export default function Process() {
  const phases = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      duration: "Day 1",
      description: "We talk, understand your problem, and figure out if AI is the right solution",
      deliverables: [
        "Problem analysis",
        "Feasibility check",
        "Rough timeline estimate",
        "Budget discussion"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Design & Planning",
      duration: "Week 1",
      description: "Detailed technical design—architecture, models, APIs, databases",
      deliverables: [
        "System architecture diagram",
        "API specifications",
        "Database schema",
        "Tech stack finalization"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Code2,
      title: "Build & Iterate",
      duration: "Weeks 2-6",
      description: "Agile development with weekly demos—you see progress, we iterate",
      deliverables: [
        "Working prototypes (weekly)",
        "Code reviews",
        "Testing & debugging",
        "Performance benchmarks"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Deploy & Launch",
      duration: "Week 7",
      description: "Production deployment, monitoring, and knowledge transfer",
      deliverables: [
        "Production infrastructure",
        "CI/CD pipelines",
        "Monitoring dashboards",
        "Documentation & training"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: CheckCircle2,
      title: "Support",
      duration: "30 Days Free",
      description: "Bug fixes, tweaks, and support included for 30 days post-launch",
      deliverables: [
        "Bug fixes",
        "Performance tuning",
        "Minor feature additions",
        "Email/call support"
      ],
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="process" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500 to-purple-500 rounded-full blur-3xl" />
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
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-bold">Our Process</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
            How We Work
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Simple, transparent process—no hidden steps, no surprises
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-orange-500 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-xl`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                        {phase.title}
                      </h3>
                      <span className={`self-start sm:self-auto text-xs sm:text-sm font-bold text-white bg-gradient-to-r ${phase.color} px-4 py-2 rounded-full`}>
                        {phase.duration}
                      </span>
                    </div>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6">
                      {phase.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {phase.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-400">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < phases.length - 1 && (
                  <div className="hidden sm:block absolute left-8 sm:left-10 lg:left-12 top-full w-0.5 h-6 sm:h-8 bg-gradient-to-b from-gray-600 to-transparent" />
                )}
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
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4">
              🚀 Fast Turnaround
            </h3>
            <p className="text-sm sm:text-base text-gray-300 px-4">
              Most projects done in 6-8 weeks. Need it faster? We can work with your timeline.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
