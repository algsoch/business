import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hey! I'm your **algsoch AI agent**! I know everything about our services, pricing, and what we can build for you.\n\n💡 Ask me about:\n• AI Chatbots & Agents\n• Full-Stack Web Apps\n• Deep Learning Models\n• Computer Vision\n• RAG Systems & LLMs\n• Backend APIs\n• Human-in-the-Loop Systems\n\n🎁 **50% OFF Launch Offer** - First 10 clients only!\n\nHow can I help you today?"
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

  const SYSTEM_CONTEXT = `You are an AI sales agent for algsoch - a professional AI development company. You are helpful, friendly, and persuasive.

COMPANY INFO:
- Name: algsoch (always lowercase, comic sans font)
- Brand: AI That Works
- Contact: npdimagine@gmail.com, +918383848219
- Location: Delhi, India
- GitHub: https://github.com/algsoch
- LinkedIn: https://www.linkedin.com/in/algsoch/

SERVICES & PRICING (50% OFF LAUNCH OFFER):
1. AI Chatbot Development: ₹25k-₹75k (was ₹50k-₹1.5L)
   - WhatsApp, Telegram, website integration
   - 24/7 automated customer support
   - Natural language understanding
   
2. AI Agents & Automation: ₹40k-₹1.25L (was ₹80k-₹2.5L)
   - Autonomous task execution
   - Tool integration (Zapier, CRM, etc)
   - Email/calendar automation
   
3. Deep Learning Models: ₹60k-₹1.75L (was ₹1.2L-₹3.5L)
   - Custom neural networks
   - CNNs, RNNs, Transformers
   - GPU-accelerated training
   
4. Computer Vision: ₹45k-₹1.4L (was ₹90k-₹2.8L)
   - Object detection (YOLO)
   - Face recognition
   - OCR (text extraction)
   - Video analytics
   
5. Generative AI & RAG: ₹50k-₹1.5L (was ₹1L-₹3L)
   - GPT-4, Claude, Llama integration
   - Document Q&A systems
   - Vector databases (Pinecone)
   - Semantic search
   
6. Backend APIs: ₹35k-₹1L (was ₹70k-₹2L)
   - FastAPI, Django, Node.js
   - PostgreSQL, MongoDB
   - Microservices architecture
   
7. Human-in-the-Loop: ₹42.5k-₹1.1L (was ₹85k-₹2.2L)
   - AI suggests, humans approve
   - Review dashboards
   - Workflow automation

REAL PROJECTS (from algsoch GitHub):
- Silent Disease Detection (XGBoost, 91% accuracy)
- Brain Tumor Detection (PyTorch CNN)
- AI Chatbot Assistant (LangChain)
- Indian Labour Law RAG
- Prompt Studio (OpenAI)

SPECIAL OFFERS:
- 50% OFF for first 10 clients (LIMITED TIME)
- Negotiable pricing for startups
- Bigger discounts for multiple services
- Free consultation calls

YOUR JOB:
1. Be enthusiastic and sales-focused
2. Understand the client's needs first
3. Recommend specific services based on their requirements
4. Emphasize the 50% discount and urgency (limited slots)
5. Show relevant portfolio projects as proof
6. Push for contact form submission or email
7. Use emojis and formatting for readability
8. Be technical when needed but explain clearly
9. Always mention pricing in rupees (₹)
10. End responses with clear call-to-action

TONE: Professional but friendly, persuasive, helpful, enthusiastic about AI

When user asks about services, pricing, portfolio, or capabilities - answer confidently with specific details. Always try to close the sale or get them to fill the contact form.`

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
