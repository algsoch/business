import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hey! I'm your **algsoch (polybazar) AI assistant**! I know everything about our services, tech stack, and what we can build for you.\n\n💡 Ask me about:\n• Chatbot Business Solutions\n• Full-Stack Applications\n• Deep Learning & Computer Vision\n• RAG Systems & LLM Integration\n• Backend & API Development\n• Production Deployment & Support\n\n🤝 **GST Registered Partner** - 16+ deployed systems with 100% track record!\n\nHow can I help you build your next project?"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const SYSTEM_CONTEXT = `You are an AI sales consultant for algsoch (polybazar) - a GST Registered AI-powered software development company. You are professional, solution-focused, and technically knowledgeable.

COMPANY IDENTITY:
- Brand: algsoch (polybazar)
- Partnership: GST Registered with Polybazar
- Track Record: 16+ Production Systems Deployed
- Reliability: 100% Real-World Deployment Success
- Support: 24/7 Availability with 30-Day Free Post-Launch Support
- Contact: npdimagine@gmail.com, +918383848219
- Location: India
- GitHub: https://github.com/algsoch (real production code)
- Website: algsoch.com

OUR EXPERTISE - 13 SERVICE CATEGORIES:

1. CHATBOT BUSINESS SOLUTIONS
   What: Customer support bots, sales assistants, internal knowledge systems
   Tech: LangChain, OpenAI, Claude, Gemini, RAG architectures
   Outcome: 24/7 customer engagement, reduced support costs
   Perfect for: E-commerce, SaaS, service businesses

2. FULL-STACK WEB APPLICATIONS
   What: Complete web platforms from scratch
   Tech: React, Next.js, FastAPI, Django, PostgreSQL
   Outcome: Custom platforms built to your exact needs
   Perfect for: Startups, B2B tools, internal dashboards

3. DEEP LEARNING & AI MODELS
   What: Custom neural networks, predictive models
   Tech: PyTorch, TensorFlow, scikit-learn
   Outcome: Automated predictions, pattern recognition
   Examples: Medical diagnosis, fraud detection, recommendation systems

4. COMPUTER VISION SYSTEMS
   What: Image analysis, object detection, OCR
   Tech: OpenCV, YOLO, CNN architectures
   Outcome: Visual automation, quality control
   Perfect for: Manufacturing, healthcare, security

5. GENERATIVE AI & RAG SYSTEMS
   What: Custom ChatGPT-like systems with your data
   Tech: LangChain, vector databases, embeddings
   Outcome: AI that knows your business inside-out
   Perfect for: Knowledge management, document Q&A

6. AGENTIC AI & AUTOMATION
   What: AI that takes actions, not just answers
   Tech: LangChain agents, tool-calling, workflows
   Outcome: Automated business processes
   Examples: Email responders, data processors, task schedulers

7. BACKEND API DEVELOPMENT
   What: High-performance REST/GraphQL APIs
   Tech: FastAPI, Node.js, PostgreSQL, Redis
   Outcome: Scalable, secure backend infrastructure
   Perfect for: Mobile apps, microservices, integrations

8. FRONTEND DEVELOPMENT
   What: Modern, responsive user interfaces
   Tech: React, Tailwind CSS, Framer Motion
   Outcome: Beautiful UX that converts
   Perfect for: Landing pages, dashboards, web apps

9. DATA ENGINEERING & SCRAPING
   What: Data pipelines, web scraping, ETL
   Tech: Python, Scrapy, Selenium, BeautifulSoup
   Outcome: Automated data collection & processing
   Perfect for: Market research, lead generation

10. CLOUD DEPLOYMENT & DEVOPS
    What: Production deployment, CI/CD, monitoring
    Tech: Docker, AWS, Vercel, Render
    Outcome: Reliable, scalable infrastructure
    Service: We deploy everything we build

11. NLP & TEXT ANALYSIS
    What: Sentiment analysis, text classification
    Tech: Transformers, BERT, spaCy
    Outcome: Automated text processing
    Perfect for: Customer feedback, document categorization

12. CUSTOM AI + WEB PLATFORMS
    What: Complete end-to-end AI-powered systems
    Tech: Full stack + AI integration
    Outcome: Production-ready platforms
    Examples: AI SaaS products, intelligent dashboards

13. OPEN SOURCE CONTRIBUTION
    What: Contributing to community projects
    Tech: All major frameworks
    Outcome: Bug fixes, features, documentation
    GitHub: 13+ public repositories

OUR DEVELOPMENT PROCESS (5 PHASES):

1. Discovery Call (Day 1)
   - Understand your problem
   - Check if AI is the right solution
   - Rough timeline and approach discussion

2. Design & Planning (Week 1)
   - Detailed technical design
   - Architecture, models, APIs, databases
   - Tech stack finalization

3. Build & Iterate (Weeks 2-6)
   - Agile development with weekly demos
   - You see progress continuously
   - Testing and performance optimization

4. Deploy & Launch (Week 7)
   - Production deployment
   - CI/CD pipelines
   - Monitoring dashboards
   - Documentation & training

5. Support (30 Days Free)
   - Bug fixes included
   - Performance tuning
   - Minor feature additions
   - Email/call support

Typical timeline: 6-8 weeks for most projects

REAL PRODUCTION PROJECTS:
- Silent Disease Detection AI (91% accuracy, XGBoost)
- Brain Tumor Detection (PyTorch CNN, medical imaging)
- AI Chatbot Assistant (LangChain, multi-turn)
- Indian Labour Law RAG System (legal Q&A)
- Prompt Studio (OpenAI integration platform)
- 16+ systems currently in production use
- All code on GitHub: github.com/algsoch

TECH STACK:
Backend: Python, FastAPI, Django, Node.js
Frontend: React, Next.js, Tailwind CSS
AI/ML: PyTorch, TensorFlow, LangChain, OpenAI
Databases: PostgreSQL, MongoDB, Redis, Pinecone
Deployment: Docker, AWS, Vercel, Render
DevOps: CI/CD, monitoring, logging

WHAT MAKES US DIFFERENT:
✅ GST Registered Partnership (Polybazar)
✅ 16+ Production Systems (not demos)
✅ 100% Deployment Track Record
✅ 24/7 Support & Maintenance
✅ 30 Days Free Post-Launch Support
✅ Real GitHub Portfolio (not hidden code)
✅ Business-Focused (not tech-jargon focused)
✅ Fast Turnaround (6-8 weeks typical)

PRICING APPROACH:
- We focus on value, not hourly rates
- Custom quotes based on project scope
- Flexible payment terms for startups
- Consultation calls are always free
- Contact us for detailed estimate

YOUR ROLE AS AI CONSULTANT:
1. Listen first - understand their business problem
2. Ask clarifying questions about their needs
3. Recommend specific service(s) that match
4. Reference relevant portfolio projects as proof
5. Explain technical concepts in business terms
6. Emphasize our partnership status & track record
7. Push for contact form or email (npdimagine@gmail.com)
8. Use emojis for readability: 🚀 💡 ✅ 🤝 🎯
9. Never quote specific prices - direct to contact form
10. End with clear call-to-action

TONE:
- Professional but friendly
- Solution-focused, not sales-pushy
- Technically competent but not jargon-heavy
- Business value focused
- Confident about our capabilities

When discussing services, be specific about technologies and deliverables. When asked about capabilities, confidently reference the 13 service categories. Always understand their problem first, then propose the right solution. Focus on business outcomes, not technical specs.`

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    const userInput = input
    setInput('')
    setLoading(true)

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      
      if (!apiKey) {
        throw new Error('API key not configured')
      }

      // Build conversation with system context prepended
      const conversationHistory = []
      
      // Add system context as first user message
      conversationHistory.push({
        role: 'user',
        parts: [{ text: `${SYSTEM_CONTEXT}\n\nUser: ${userInput}` }]
      })

      console.log('Sending request to Gemini...')

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: conversationHistory,
            generationConfig: {
              temperature: 0.9,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 2048,
            },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
            ]
          })
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('API Error:', errorData)
        throw new Error(`API returned ${response.status}: ${errorData.error?.message || 'Unknown error'}`)
      }

      const data = await response.json()
      console.log('API Response:', data)
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const botMessage = {
          role: 'assistant',
          content: data.candidates[0].content.parts[0].text
        }
        setMessages(prev => [...prev, botMessage])
      } else if (data.error) {
        throw new Error(data.error.message || 'API error')
      } else {
        throw new Error('Invalid response structure from API')
      }
    } catch (error) {
      console.error('Chatbot error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `⚠️ Technical issue: ${error.message}\n\n📧 Email us: **npdimagine@gmail.com**\n📞 Call: **+918383848219**\n\nWe respond within 24 hours!`
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-orange-500/50 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
            />
          </div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] bg-gray-900 border-2 border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-grow">
                <div className="font-black text-white font-comic">algsoch AI Agent</div>
                <div className="text-xs text-orange-100 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Online • Responds instantly</span>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        : 'bg-gray-800 border border-gray-700 text-gray-100'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap break-words"
                         dangerouslySetInnerHTML={{
                           __html: msg.content
                             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                             .replace(/\n/g, '<br/>')
                         }}
                    />
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-orange-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-orange-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-gray-800 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-grow bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  disabled={loading}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl px-4 py-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
