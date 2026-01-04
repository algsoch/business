import { useEffect, useRef } from 'react'

export default function VisitorTracker() {
  const sessionStartRef = useRef(Date.now())
  const sectionsVisitedRef = useRef(new Set())
  const scrollDepthRef = useRef(0)
  const sentRef = useRef(false)

  useEffect(() => {
    const trackSection = () => {
      const sections = ['home', 'services', 'process', 'technologies', 'portfolio', 'contact']
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0
          
          if (isVisible) {
            sectionsVisitedRef.current.add(sectionId)
          }
        }
      })

      // Track scroll depth
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      scrollDepthRef.current = Math.max(scrollDepthRef.current, scrollPercentage)
    }

    const handleScroll = () => {
      trackSection()
    }

    const sendAnalytics = async () => {
      if (sentRef.current) return
      
      const timeSpent = Math.round((Date.now() - sessionStartRef.current) / 1000) // seconds
      const sectionsVisited = Array.from(sectionsVisitedRef.current).join(', ')
      
      // Only send if user spent at least 5 seconds on the site
      if (timeSpent < 5) return
      
      sentRef.current = true

      try {
        const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL

        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            embeds: [{
              title: '📊 Visitor Analytics',
              color: 0x3B82F6, // Blue color
              fields: [
                { name: '⏱️ Time Spent', value: `${timeSpent} seconds`, inline: true },
                { name: '📏 Scroll Depth', value: `${scrollDepthRef.current}%`, inline: true },
                { name: '📍 Sections Visited', value: sectionsVisited || 'Home only', inline: false },
                { name: '🌐 Referrer', value: document.referrer || 'Direct visit', inline: false },
                { name: '📱 Device', value: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop', inline: true },
              ],
              timestamp: new Date().toISOString(),
              footer: {
                text: 'algsoch Visitor Tracker'
              }
            }]
          })
        })
      } catch (error) {
        console.error('Error sending analytics:', error)
      }
    }

    // Track sections on scroll
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    trackSection()

    // Send analytics when user leaves or after 30 seconds
    const analyticsTimer = setTimeout(sendAnalytics, 30000)
    window.addEventListener('beforeunload', sendAnalytics)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', sendAnalytics)
      clearTimeout(analyticsTimer)
    }
  }, [])

  return null // This component doesn't render anything
}
