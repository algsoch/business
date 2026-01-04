import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL
      
      console.log('Sending to Discord webhook')

      // Build service name mapping
      const serviceNames = {
        'chatbot': '🤖 AI Chatbot Development',
        'full-stack': '🚀 Full-Stack Web Application',
        'deep-learning': '🧠 Deep Learning & AI Models',
        'computer-vision': '👁️ Computer Vision System',
        'generative-ai': '✨ Generative AI & RAG',
        'backend': '⚙️ Backend API Development',
        'frontend': '🎨 Frontend Development',
        'open-source': '🌟 Open Source Contribution'
      }

      const serviceName = serviceNames[formData.service] || formData.service || 'General Inquiry'

      // Build stunning Discord message
      const payload = {
        content: `@everyone`,
        embeds: [{
          author: {
            name: '🚀 NEW CONTACT FROM ALGSOCH WEBSITE',
            icon_url: 'https://cdn.discordapp.com/emojis/1234567890123456789.png'
          },
          title: `💼 ${formData.name || 'Anonymous'} wants to work with you!`,
          description: `**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n\n${formData.message ? `> 💬 **${formData.message}**` : '*No message provided*'}\n\n**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**`,
          color: 16744192, // Bright orange
          fields: [
            {
              name: '👤 CLIENT NAME',
              value: `\`\`\`\n${formData.name || 'Not provided'}\n\`\`\``,
              inline: true
            },
            {
              name: '📧 EMAIL ADDRESS',
              value: `\`\`\`\n${formData.email || 'Not provided'}\n\`\`\``,
              inline: true
            },
            {
              name: '🏢 COMPANY',
              value: `\`\`\`\n${formData.company || 'Not provided'}\n\`\`\``,
              inline: true
            },
            {
              name: '🎯 INTERESTED SERVICE',
              value: `**${serviceName}**`,
              inline: false
            },
            {
              name: '💰 PROJECT VALUE',
              value: '```\n₹25,000 - ₹3,50,000 (50% OFF)\n```',
              inline: true
            },
            {
              name: '⚡ PRIORITY',
              value: '```\nHIGH - Respond ASAP!\n```',
              inline: true
            },
            {
              name: '📍 SOURCE',
              value: '```\nalgsoch.com\n```',
              inline: true
            }
          ],
          thumbnail: {
            url: 'https://em-content.zobj.net/thumbs/120/apple/354/fire_1f525.png'
          },
          footer: {
            text: '🔥 algsoch Contact System • Strike while hot!',
            icon_url: 'https://em-content.zobj.net/thumbs/120/apple/354/rocket_1f680.png'
          },
          timestamp: new Date().toISOString()
        }]
      }

      console.log('Payload:', JSON.stringify(payload))

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Discord webhook error:', errorText)
        throw new Error(`Discord webhook failed: ${response.status}`)
      }

      console.log('Form submitted - message sent to Discord successfully')
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(`Failed to send message: ${error.message}. Please email us directly at npdimagine@gmail.com`)
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "npdimagine@gmail.com",
      link: "mailto:npdimagine@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+918383848219",
      link: "tel:+918383848219"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: null
    }
  ]

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl" />
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
            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-bold">Let's Talk</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
            Start Your AI Project
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Tell us about your idea. We'll build it together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8">
                Send Message
              </h3>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-100 font-semibold">Message sent! We'll reply within 24 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-all text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-all text-sm sm:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-4 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-all text-sm sm:text-base"
                    placeholder="Your Company (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-300 mb-2">
                    What Do You Need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 sm:py-4 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-all text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="chatbot">AI Chatbot</option>
                    <option value="ai-agent">AI Agent & Automation</option>
                    <option value="deep-learning">Deep Learning</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="generative-ai">Generative AI & RAG</option>
                    <option value="backend">Backend & API</option>
                    <option value="hitl">Human-in-the-Loop</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 sm:py-4 bg-black border-2 border-gray-700 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-all resize-none text-sm sm:text-base"
                    placeholder="Describe your problem, timeline, budget..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-black text-base sm:text-lg flex items-center justify-center space-x-3 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  {!submitting && <Send className="w-5 h-5" />}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
                Contact Info
              </h3>
              
              <div className="space-y-5 sm:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-400 mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-base sm:text-lg font-bold text-white hover:text-orange-400 transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-base sm:text-lg font-bold text-white">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4">
                ⚡ Quick Response
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We reply within 24 hours. Urgent? Call us directly.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4">
                💰 Free Consultation
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                30-minute call to discuss your project. No cost, no commitment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
