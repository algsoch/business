import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GitBranch, Users, Play, Shield, FileCheck, RefreshCw } from 'lucide-react'

export default function ExecutionLoop() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      id: 1,
      icon: GitBranch,
      title: 'Task Intake & Scoping',
      color: 'from-blue-500 to-cyan-500',
      description: 'Client describes problem → We map it to concrete tasks',
      details: [
        'Define success criteria and output format',
        'Set clear delivery timeline',
        'No ambiguity, no handwaving',
        'Document specific edge cases to consider',
      ]
    },
    {
      id: 2,
      icon: Users,
      title: 'Pilot Batch (Always)',
      color: 'from-purple-500 to-pink-500',
      description: 'Small sample (50-200 instances) evaluated by all 5 members',
      details: [
        'Calibration session: resolve disagreements',
        'Clarify edge cases with specific examples',
        'Finalize guidelines with borderline cases',
        'Build initial QA automation to catch errors',
      ]
    },
    {
      id: 3,
      icon: Play,
      title: 'Execution',
      color: 'from-green-500 to-emerald-500',
      description: 'Task distributed across team with continuous validation',
      details: [
        'Every output validated by another person',
        'Automated checks run continuously',
        'Disagreements logged and resolved daily',
        'Progress tracked with real-time metrics',
      ]
    },
    {
      id: 4,
      icon: Shield,
      title: 'QA & Disagreement Resolution',
      color: 'from-orange-500 to-red-500',
      description: 'Systematic review of flagged cases with pattern analysis',
      details: [
        'Pattern analysis: recurring errors → guideline gaps',
        'Track inter-annotator agreement and error types',
        'Generate QA report with specific examples',
        'Document lessons for future improvements',
      ]
    },
    {
      id: 5,
      icon: FileCheck,
      title: 'Delivery & Retrospective',
      color: 'from-pink-500 to-rose-500',
      description: 'Structured output delivered with internal learning',
      details: [
        'Database-ready format (JSON, CSV)',
        'Internal retrospective: what worked, what slowed us',
        'Process improvements documented',
        'Automation opportunities identified',
      ]
    },
  ]

  const principles = [
    {
      title: 'No Silos',
      description: 'Everyone understands the full pipeline. No single-point failure.',
      icon: '🔄'
    },
    {
      title: 'Collective Ownership',
      description: 'Everyone reviews everyone\'s work. No "my task" vs "your task".',
      icon: '🤝'
    },
    {
      title: 'Discipline Over Speed',
      description: '1,000 perfect examples > 10,000 rushed ones. Quality compounds.',
      icon: '⚖️'
    },
    {
      title: 'Automate Wisely',
      description: 'Automate validation and format checks. Not judgment calls.',
      icon: '🤖'
    },
  ]

  return (
    <section id="execution" className="relative py-24 bg-dark-800/30">
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
              <RefreshCw className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-medium">Our Execution System</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Operate</h2>
            <p className="text-xl text-dark-300">A proven 5-phase execution loop</p>
          </div>

          {/* Execution Flow Diagram */}
          <div className="mb-16 relative">
            <div className="grid md:grid-cols-5 gap-4">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setActivePhase(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activePhase === index ? 'scale-105' : 'scale-100'
                  }`}
                >
                  <div className={`card p-6 text-center ${
                    activePhase === index ? 'ring-2 ring-primary-500 shadow-lg shadow-primary-500/20' : ''
                  }`}>
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs text-primary-400 font-semibold mb-2">PHASE {phase.id}</div>
                    <h3 className="text-sm font-bold mb-2">{phase.title}</h3>
                    {activePhase === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-dark-400 mt-2"
                      >
                        {phase.description}
                      </motion.div>
                    )}
                  </div>
                  
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute top-1/4 left-[calc(20%_+_12px)] w-[calc(20%_-_24px)] h-0.5 bg-gradient-to-r from-primary-500/50 to-primary-500/20" 
                         style={{ left: `calc(${(index + 1) * 20}% - ${12}px)` }} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Active Phase Details */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card p-8 mb-16"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phases[activePhase].color} flex items-center justify-center`}>
                {(() => {
                  const Icon = phases[activePhase].icon;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>
              <div>
                <div className="text-sm text-primary-400 font-semibold">PHASE {phases[activePhase].id}</div>
                <h3 className="text-2xl font-bold">{phases[activePhase].title}</h3>
              </div>
            </div>
            
            <p className="text-lg text-dark-200 mb-6">{phases[activePhase].description}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {phases[activePhase].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-dark-800/50 rounded-lg p-4"
                >
                  <span className="text-primary-400 text-lg">→</span>
                  <span className="text-dark-200">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Operating Principles */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Operating Principles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="card text-center p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{principle.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{principle.title}</h4>
                  <p className="text-sm text-dark-400">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
