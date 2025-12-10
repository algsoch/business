import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Mail, MapPin } from 'lucide-react'

export default function Closing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="closing" className="relative py-24 border-t border-dark-800">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-12 mb-12 bg-gradient-to-br from-primary-500/10 via-dark-800/50 to-primary-700/10 border-primary-500/30"
          >
            <Sparkles className="w-12 h-12 text-primary-400 mx-auto mb-6" />
            
            <p className="text-2xl md:text-3xl text-dark-100 leading-relaxed mb-8">
              We're starting this—not pitching a vision, but <span className="text-primary-400 font-semibold">building systems</span> that solve real problems.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent my-8" />

            <p className="text-xl text-dark-200 leading-relaxed mb-8">
              AI teams don't just need models or data services. They need{' '}
              <span className="text-primary-400 font-semibold">complete automation systems</span> where backend APIs, 
              human-in-the-loop workflows, and quality checks work together from day one.
            </p>

            <p className="text-xl text-dark-200 leading-relaxed mb-8">
              We build that. <span className="text-primary-400 font-semibold">End-to-end</span>. With Python, FastAPI, and AI tools 
              that integrate into real workflows—not theoretical demonstrations.
            </p>

            <p className="text-lg text-dark-300 leading-relaxed">
              This isn't a pitch for funding or a 5-year plan. <span className="text-primary-400 font-semibold">This is a proposal 
              to start executing</span>—with clients who need working systems, under real constraints, proving capability through delivery.
            </p>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-2xl font-bold gradient-text">
              We'll prove capability through work, not deck slides.
            </p>
            
            <p className="text-xl text-dark-300">
              If this model makes sense to you, we're ready to start.
            </p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card p-8 mt-12 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold mb-6">Ready to Connect</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-dark-400">Email</div>
                    <div className="text-dark-100 font-medium">npdimagine@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-dark-400">Location</div>
                    <div className="text-dark-100 font-medium">Ghevra, North West Delhi 110081</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Sparkles className="w-6 h-6 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-dark-400">Availability</div>
                    <div className="text-dark-100 font-medium">Immediate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Emphasis */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-12 space-y-3 text-dark-400"
            >
              <p className="font-mono text-sm">Process over hype</p>
              <p className="font-mono text-sm">Capability over claims</p>
              <p className="font-mono text-sm">Long-term learning over quick wins</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
