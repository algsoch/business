import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Bot, TrendingUp, CheckCircle, Sparkles } from 'lucide-react'

export default function Experience() {
  const academicWork = [
    {
      title: "AI-Based FRQ Formatter for Statistics & Calculus",
      organization: "IITian Academy",
      description: "Designed and built an automated AI system to convert statistics and calculus Free-Response Questions (FRQs) into strict, copy-ready HTML formats.",
      scale: "2000+ questions processed",
      achievements: [
        "Enforced precise LaTeX usage with \\( \\) delimiters",
        "Generated step-by-step solutions aligned with official scoring guides",
        "Supported tables, diagrams, and media embedding",
        "Optimized for consistency, clarity, and evaluator standards"
      ]
    },
    {
      title: "AI Solution for Multi-Angle Image Generation",
      organization: "Independent Project",
      status: "In Progress",
      description: "Developing a computer vision–based system that generates multiple realistic angles of an object or person from limited input images.",
      achievements: [
        "Focus on data augmentation and synthetic view generation",
        "Applicable to e-commerce, 3D perception, and vision training datasets"
      ]
    }
  ]

  const agenticSystems = [
    {
      title: "Venture Capital Intelligence Agent",
      status: "In Progress",
      description: "Building an autonomous AI agent to analyze startups from multiple signals.",
      features: [
        "Web data ingestion and scraping",
        "Structured reasoning and scoring",
        "Investment memo generation",
        "Designed for VC-style decision workflows"
      ]
    },
    {
      title: "Job Agentic System",
      status: "Completed",
      description: "Autonomous AI system for job discovery, analysis, and reporting.",
      features: [
        "Multi-step reasoning",
        "Task orchestration",
        "Automated insights delivery"
      ]
    }
  ]

  const freelanceRoles = [
    {
      title: "Data Trainer — SME Careers",
      period: "Dec 2025 – Present",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Supported large-scale AI model training and evaluation initiatives",
        "Developed and reviewed structured prompts",
        "Assessed, ranked, and analyzed AI-generated responses",
        "Identified inconsistencies, bias, and edge cases",
        "Contributed to improving model accuracy, alignment, and reliability",
        "Operated under strict confidentiality and compliance standards"
      ]
    },
    {
      title: "RLHF Annotator — Mercor",
      period: "Oct 2025 – Nov 2025",
      location: "Remote (San Francisco, USA)",
      type: "Freelance",
      responsibilities: [
        "Reviewed and evaluated AI-generated outputs for production systems",
        "Analyzed model behavior and response quality",
        "Provided structured, actionable feedback for system improvement",
        "Worked within RLHF-style evaluation pipelines",
        "Focused on accuracy, relevance, and real-world applicability"
      ]
    },
    {
      title: "AI Trainer — Soul AI",
      period: "Aug 2025",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Validated 70+ AI-generated prompts and responses",
        "Applied rubric-based evaluation (instruction-following, relevance, factual correctness, coherence)",
        "Conducted RLHF-style scoring and comparisons",
        "Performed multi-turn conversation QA",
        "Identified weaknesses in context retention and persona stability"
      ]
    },
    {
      title: "Prompt Engineer — Outlier",
      period: "Sep 2024 – Mar 2025",
      location: "Remote (Delhi, India)",
      type: "Freelance",
      responsibilities: [
        "Designed and refined structured prompts for mathematics, programming, and logic",
        "Evaluated hundreds of AI-generated responses for correctness and clarity",
        "Identified hallucinations, reasoning gaps, and failure patterns",
        "Built task variations and interactive exercises",
        "Helped transform experimental outputs into stable, production-ready systems"
      ]
    }
  ]

  const keyThemes = [
    "Production-grade AI systems",
    "Prompt engineering & RLHF workflows",
    "Agentic reasoning and automation",
    "Education-focused AI tooling",
    "Evaluation, alignment, and reliability of LLMs"
  ]

  return (
    <section id="experience" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm"
          >
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-bold">PROFESSIONAL EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6"
          >
            Real Work, Real Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From AI model training to production systems—extensive hands-on experience across the full AI development lifecycle.
          </motion.p>
        </div>

        {/* Academic & Education Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-orange-500" />
            <h3 className="text-3xl font-black text-white">Academic & Education-Focused Work</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {academicWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{work.title}</h4>
                    <p className="text-orange-500 font-semibold">{work.organization}</p>
                  </div>
                  {work.status && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full">
                      {work.status}
                    </span>
                  )}
                </div>
                
                {work.scale && (
                  <div className="mb-4 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg">
                    <p className="text-orange-300 font-bold text-sm">📊 {work.scale}</p>
                  </div>
                )}
                
                <p className="text-gray-300 mb-4 leading-relaxed">{work.description}</p>
                
                <ul className="space-y-2">
                  {work.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agentic Systems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Bot className="w-8 h-8 text-purple-500" />
            <h3 className="text-3xl font-black text-white">AI & Agentic Systems</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {agenticSystems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/30 to-gray-800/50 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{system.title}</h4>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    system.status === 'In Progress' 
                      ? 'bg-yellow-500/20 text-yellow-400' 
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {system.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{system.description}</p>
                
                <ul className="space-y-2">
                  {system.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Freelance Roles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            <h3 className="text-3xl font-black text-white">Freelance & Contract AI Roles</h3>
          </div>

          <div className="space-y-6">
            {freelanceRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{role.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-blue-400 font-semibold">📅 {role.period}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">📍 {role.location}</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded">
                        {role.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Themes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-900/30 via-gray-900 to-purple-900/30 rounded-2xl p-8 border border-gray-700/50"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-8 h-8 text-orange-500" />
            <h3 className="text-2xl font-black text-white">Key Themes Across My Work</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyThemes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300"
              >
                <p className="text-white font-semibold text-sm text-center">{theme}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-lg border-l-4 border-orange-500">
            <p className="text-gray-300 italic leading-relaxed">
              All roles and projects emphasize <span className="text-orange-400 font-bold">real-world deployment</span>, <span className="text-purple-400 font-bold">structured reasoning</span>, and <span className="text-blue-400 font-bold">system-level thinking</span>, not experimental demos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
