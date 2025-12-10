import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Code, Brain, Database, Zap, Globe, Server, GitBranch } from 'lucide-react'

export default function SkillProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Brain,
      title: 'Deep Learning & AI',
      gradient: 'from-purple-500 to-pink-500',
      bgGlow: 'bg-purple-500',
      skills: [
        { name: 'PyTorch', level: 95, color: 'bg-orange-500' },
        { name: 'TensorFlow', level: 90, color: 'bg-orange-400' },
        { name: 'Transformers', level: 92, color: 'bg-purple-500' },
        { name: 'Computer Vision', level: 88, color: 'bg-pink-500' },
        { name: 'NLP', level: 90, color: 'bg-violet-500' },
      ],
      techs: ['CNNs', 'RNNs', 'YOLO', 'BERT', 'GPT', 'ResNet', 'Transfer Learning']
    },
    {
      icon: Zap,
      title: 'LLMs & RAG Systems',
      gradient: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500',
      skills: [
        { name: 'LangChain', level: 93, color: 'bg-blue-500' },
        { name: 'OpenAI API', level: 95, color: 'bg-cyan-500' },
        { name: 'Vector DBs', level: 90, color: 'bg-teal-500' },
        { name: 'Fine-Tuning', level: 87, color: 'bg-indigo-500' },
        { name: 'Prompt Engineering', level: 94, color: 'bg-sky-500' },
      ],
      techs: ['RAG', 'Pinecone', 'ChromaDB', 'Gemini', 'Llama', 'Embeddings', 'Semantic Search']
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      gradient: 'from-green-500 to-emerald-500',
      bgGlow: 'bg-green-500',
      skills: [
        { name: 'FastAPI', level: 96, color: 'bg-green-500' },
        { name: 'Node.js', level: 90, color: 'bg-emerald-500' },
        { name: 'Django/Flask', level: 88, color: 'bg-teal-600' },
        { name: 'REST APIs', level: 94, color: 'bg-lime-500' },
        { name: 'GraphQL', level: 85, color: 'bg-pink-600' },
      ],
      techs: ['Express.js', 'Spring Boot', 'Microservices', 'WebSockets', 'Auth', 'Rate Limiting']
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      gradient: 'from-cyan-500 to-blue-500',
      bgGlow: 'bg-cyan-500',
      skills: [
        { name: 'React', level: 93, color: 'bg-cyan-500' },
        { name: 'JavaScript/TypeScript', level: 92, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-red-500' },
        { name: 'Tailwind CSS', level: 94, color: 'bg-cyan-400' },
        { name: 'Next.js', level: 88, color: 'bg-slate-700' },
      ],
      techs: ['Vite', 'Redux', 'Context API', 'Framer Motion', 'Responsive Design', 'PWA']
    },
    {
      icon: Database,
      title: 'Databases & Data',
      gradient: 'from-yellow-500 to-orange-500',
      bgGlow: 'bg-yellow-500',
      skills: [
        { name: 'MongoDB', level: 91, color: 'bg-green-600' },
        { name: 'MySQL', level: 90, color: 'bg-blue-600' },
        { name: 'PostgreSQL', level: 89, color: 'bg-blue-700' },
        { name: 'Redis', level: 87, color: 'bg-red-600' },
        { name: 'Data Pipelines', level: 92, color: 'bg-orange-500' },
      ],
      techs: ['SQLAlchemy', 'Prisma', 'ETL', 'pandas', 'polars', 'Data Validation']
    },
    {
      icon: Globe,
      title: 'Web Scraping & Automation',
      gradient: 'from-pink-500 to-rose-500',
      bgGlow: 'bg-pink-500',
      skills: [
        { name: 'Selenium', level: 93, color: 'bg-green-500' },
        { name: 'BeautifulSoup', level: 95, color: 'bg-purple-500' },
        { name: 'Scrapy', level: 90, color: 'bg-emerald-600' },
        { name: 'Puppeteer', level: 88, color: 'bg-cyan-600' },
        { name: 'API Integration', level: 94, color: 'bg-blue-500' },
      ],
      techs: ['Playwright', 'Requests', 'CAPTCHA Solving', 'Proxies', 'Data Extraction', 'Parsing']
    },
    {
      icon: GitBranch,
      title: 'DevOps & Deployment',
      gradient: 'from-indigo-500 to-purple-500',
      bgGlow: 'bg-indigo-500',
      skills: [
        { name: 'Docker', level: 92, color: 'bg-blue-600' },
        { name: 'Kubernetes', level: 85, color: 'bg-blue-500' },
        { name: 'CI/CD', level: 90, color: 'bg-green-600' },
        { name: 'AWS/Cloud', level: 87, color: 'bg-orange-500' },
        { name: 'Monitoring', level: 91, color: 'bg-red-500' },
      ],
      techs: ['GitHub Actions', 'MLflow', 'Grafana', 'Prometheus', 'Nginx', 'Load Balancing']
    },
    {
      icon: Award,
      title: 'Data Annotation & QA',
      gradient: 'from-orange-500 to-red-500',
      bgGlow: 'bg-orange-500',
      skills: [
        { name: 'Image Annotation', level: 94, color: 'bg-purple-500' },
        { name: 'Text Labeling', level: 93, color: 'bg-blue-500' },
        { name: 'Video Annotation', level: 89, color: 'bg-pink-500' },
        { name: 'Quality Control', level: 95, color: 'bg-green-500' },
        { name: 'Custom Interfaces', level: 92, color: 'bg-cyan-500' },
      ],
      techs: ['Label Studio', 'CVAT', 'Bounding Boxes', 'Segmentation', 'OCR', 'Validation']
    },
  ]

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24 border-t border-dark-800 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
      />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-primary-500/10 border border-primary-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6"
            >
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              <span className="text-primary-400 text-sm sm:text-base font-semibold">Our Technical Arsenal</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-3 sm:px-4">
              <span className="gradient-text">Skills That Ship</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-dark-300 max-w-3xl mx-auto px-3 sm:px-4">
              Not just resume buzzwords—these are the technologies we use daily to build production systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-4">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative card p-5 sm:p-6 lg:p-8 overflow-hidden"
              >
                {/* Animated Background Glow */}
                <motion.div
                  className={`absolute inset-0 ${category.bgGlow} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-5 sm:mb-6">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-dark-50 group-hover:text-primary-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-dark-400">Production Experience</p>
                    </div>
                  </div>

                  {/* Skill Bars */}
                  <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs sm:text-sm font-medium text-dark-200">{skill.name}</span>
                          <span className="text-xs font-mono text-dark-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2,
                              duration: 1,
                              ease: "easeOut"
                            }}
                            className={`h-full ${skill.color} rounded-full relative`}
                          >
                            <motion.div
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                x: ['-100%', '200%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + techIndex * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-dark-800/50 text-dark-300 border border-dark-700/50 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 sm:mt-16 px-3 sm:px-4"
          >
            <div className="relative card p-6 sm:p-8 lg:p-10 text-center overflow-hidden bg-gradient-to-r from-primary-500/5 to-cyan-500/5 border-primary-500/20">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 blur-3xl"
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  <span className="gradient-text">Full-Stack AI Engineering</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed mb-4">
                  Most teams specialize in <span className="text-cyan-400 font-semibold">one area</span>. 
                  <br className="hidden sm:block" />
                  We've shipped projects across <span className="text-primary-400 font-bold">all of them</span>.
                </p>
                <p className="text-sm sm:text-base text-dark-300 max-w-2xl mx-auto">
                  From scraping data and annotating it, to training models and deploying APIs, 
                  to building React dashboards—<span className="text-primary-400 font-semibold">we do it all</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
