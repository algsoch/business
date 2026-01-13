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
    <section id="process" className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
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
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 text-xs sm:text-sm"
          >
            <Zap className="w-3 h-3" />
            <span className="font-bold">Our Process</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
            How We Work
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Simple, transparent process—no hidden steps, no surprises
          </p>
        </motion.div>

        {/* Timeline Graph Design - Responsive */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-orange-500 via-blue-500 via-green-500 via-purple-500 to-pink-500 opacity-30" />
          
          {/* Mobile/Tablet: Horizontal Scroll | Desktop: Grid */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 sm:gap-5 min-w-max">
              {phases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative w-[280px] sm:w-[300px] flex-shrink-0"
                  >
                    {/* Step Card */}
                    <div className="bg-gray-800/50 border-2 border-gray-700 rounded-xl p-4 sm:p-5 hover:border-gray-600 transition-all h-full">
                      {/* Icon & Duration */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 bg-gray-900 px-2.5 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-white mb-2">
                        {phase.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-400 leading-snug mb-3">
                        {phase.description}
                      </p>
                      
                      {/* Deliverables */}
                      <div className="space-y-1.5">
                        {phase.deliverables.map((deliverable, i) => (
                          <div key={i} className="flex items-start space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-500 leading-snug">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Arrow Between Cards */}
                    {index < phases.length - 1 && (
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-600 text-xl">
                        →
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-gray-800/50 border-2 border-gray-700 rounded-xl p-4 sm:p-5 hover:border-gray-600 transition-all h-full">
                    {/* Icon & Duration */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 bg-gray-900 px-2.5 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-black text-white mb-2">
                      {phase.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-400 leading-snug mb-3">
                      {phase.description}
                    </p>
                    
                    {/* Deliverables */}
                    <div className="space-y-1.5">
                      {phase.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-500 leading-snug">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow Between Cards */}
                  {index < phases.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-600 text-xl">
                      →
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA - More Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500 rounded-xl px-6 py-3 max-w-xl">
            <h3 className="text-base sm:text-lg font-black text-white mb-1">
              🚀 Fast Turnaround
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Most projects done in 6-8 weeks. Need it faster? We can work with your timeline.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
