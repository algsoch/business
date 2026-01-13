# algsoch (polybazar) - AI-Powered Software Development

Professional AI development company in partnership with Polybazar (GST Registered), offering chatbots, deep learning models, full-stack applications, and end-to-end AI solutions.

## 🌐 Live Demo

**🔗 Website**: [https://business-9yh3.onrender.com/](https://business-9yh3.onrender.com/)

## 🚀 Features

- ✨ **Modern React** with Vite for blazing-fast performance
- 🎨 **Tailwind CSS** with custom gradients, box designs, and animations
- 🎭 **Framer Motion** for smooth, professional animations
- 🤖 **AI Chatbot** powered by Google Gemini 2.5 Flash
- 📱 **Fully Responsive** design for all devices (mobile-optimized horizontal scroll)
- 💬 **Discord Integration** for instant contact notifications
- 📧 **Email Notifications** via Vercel serverless function
- 🎯 **Interactive Navigation** with smooth scrolling and logo
- 🤝 **Partnership Badges** with Polybazar (GST Registered)
- 📊 **16+ Production Systems** deployed and maintained
- 🏆 **100% Real-World Solutions** - no demos, all production code

## 📁 Project Structure

```
frontend-studio-pitch/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Fixed navbar with logo
│   │   ├── Hero.jsx             # Landing with service cards + trust badges
│   │   ├── Services.jsx         # Detailed 13 service categories
│   │   ├── ServicesDetailed.jsx # Extended service descriptions
│   │   ├── Process.jsx          # 5-phase timeline graph (responsive)
│   │   ├── Technologies.jsx     # Tech stack showcase
│   │   ├── Portfolio.jsx        # Real project showcase
│   │   ├── Experience.jsx       # Client testimonials & achievements
│   │   ├── Contact.jsx          # Contact form (Discord + Email)
│   │   ├── Chatbot.jsx          # AI sales agent chatbot
│   │   ├── FloatingElements.jsx # Background animations
│   │   └── VisitorTracker.jsx   # Analytics integration
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles with scrollbar-hide utility
├── api/
│   └── send-email.js            # Vercel serverless email function
├── public/
│   ├── logo.jpg                 # Company logo
│   └── favicon.svg              # Favicon (legacy)
├── .env                         # Environment variables (not in git)
├── .env.example                 # Example env file
├── render.yaml                  # Render.com deployment config
├── vercel.json                  # Vercel deployment config
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ⚙️ Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/algsoch/business.git
cd business/frontend-studio-pitch
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env
```

Edit `.env` and add your keys:
```env
VITE_DISCORD_WEBHOOK_URL=your_discord_webhook_url
VITE_GEMINI_API_KEY=your_gemini_api_key
```

For Vercel deployment, also set:
```env
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

4. **Start development server**:
```bash
npm run dev
```

App runs at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

Build output goes to `dist/` folder.

## 🚢 Deployment Options

### Deploy to Vercel (Recommended for Email)

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Set root directory: `frontend-studio-pitch`
4. Add environment variables:
   - `VITE_DISCORD_WEBHOOK_URL`
   - `VITE_GEMINI_API_KEY`
   - `SMTP_EMAIL`
   - `SMTP_PASSWORD`
5. Deploy!

### Deploy to Render (Static Site)

1. Push code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Create new **Static Site**
4. Connect GitHub repo: `algsoch/business`
5. Set root directory: `frontend-studio-pitch`
6. Add environment variables in Render dashboard
7. Deploy!

Auto-deploys from `render.yaml` config.

## 🎯 Key Features

### Brand Identity
- **algsoch (polybazar)** branding with subscript styling
- Custom logo in navigation and favicon
- Partnership emphasis: GST Registered with Polybazar
- Trust badges: 16+ systems, 100% deployed, 24/7 support
- Professional box design with gradients and shadows

### Hero Section
- Box-style design with border and shadow effects
- algsoch(polybazar) with proper subscript formatting
- 6 service boxes in 3-column grid
- Integrated trust badges showing partnership
- Mission statement in matching box design
- Tech stack tags at bottom

### Process Section (Responsive Timeline)
- **Desktop**: 5 cards side-by-side with connecting line
- **Mobile/Tablet**: Horizontal scroll (swipe through)
- Timeline graph with arrows between steps
- Color-coded phases: Discovery → Planning → Build → Deploy → Support
- 30 days free support included

### AI Chatbot
- Powered by Google Gemini 2.5 Flash
- Acts as sales agent and AI consultant
- Knows all services and portfolio
- Persuasive personality focused on business value
- Floating button with pulsing indicator

### Contact Integration
- **Discord**: Rich embed notifications with @everyone ping
- **Email**: Serverless function via Vercel (nodemailer)
- Dual notification system for zero missed leads
- Orange-themed, professional formatting

### Responsive Design
- **Mobile-first** approach with horizontal scroll for process timeline
- **Desktop**: Full grid layout, no scrolling needed
- Fixed navbar with responsive logo sizing
- Service cards stack beautifully on mobile
- Hidden scrollbar with swipe functionality
- Granular breakpoints (sm, md, lg, xl)

### No Pricing Displayed
- Focus on value and partnership, not cost
- Encourages direct contact for quotes
- Business-focused language (not tech jargon)
- Service titles emphasize business outcomes

## 🛠️ Technologies

- **React 18.2.0** - UI framework
- **Vite 5.0.2** - Build tool
- **Tailwind CSS 3.3.5** - Styling with custom utilities
- **Framer Motion 10.16.4** - Smooth animations
- **Lucide React** - Modern icon library
- **Google Gemini 2.5 Flash** - AI chatbot engine
- **Discord Webhooks** - Real-time notifications
- **Nodemailer 6.9.7** - Email sending
- **Vercel Serverless Functions** - Email backend

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js` for color scheme changes. Current palette:
- Orange (#F97316) - Primary brand color
- Gray/Black gradients - Backgrounds and cards
- Color-coded phases in Process section

### Fonts
- **Inter** - Body text
- **Poppins** - Headings (font-black for bold impact)

### Logo & Favicon
- Replace `/public/logo.jpg` with your logo
- Update `index.html` favicon reference
- Logo appears in navigation with gradient background

### Content Updates
- **Services**: Edit `Services.jsx` and `Hero.jsx` (13 service categories)
- **Portfolio**: Update `Portfolio.jsx` with your projects
- **Contact**: Change email/phone in `Contact.jsx` and `Chatbot.jsx`
- **Process**: Customize phases in `Process.jsx`
- **Trust Badges**: Update stats in `Hero.jsx`

### Chatbot Personality
Edit `SYSTEM_CONTEXT` in `Chatbot.jsx` to change:
- Company information
- Service descriptions
- Sales approach and tone
- Partnership details

## 📧 Contact

- **Email**: npdimagine@gmail.com
- **Phone**: +91 8383848219
- **GitHub**: [@algsoch](https://github.com/algsoch)
- **LinkedIn**: [algsoch](https://www.linkedin.com/in/algsoch/)

## 🔧 Environment Variables

Required for full functionality:

```env
# Chatbot (Required)
VITE_GEMINI_API_KEY=your_gemini_api_key

# Discord Notifications (Required)
VITE_DISCORD_WEBHOOK_URL=your_discord_webhook_url

# Email Notifications (Vercel deployment only)
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_specific_password
```

## 📝 Recent Updates

- ✅ Removed all pricing information (focus on consultation)
- ✅ Added logo.jpg to navigation and favicon
- ✅ Integrated trust badges in Hero section
- ✅ Optimized spacing (50-60% reduction across components)
- ✅ Redesigned Process section with responsive timeline
- ✅ Added algsoch(polybazar) branding throughout
- ✅ Implemented horizontal scroll for mobile Process section
- ✅ Email backend ready (needs Vercel deployment)
- ✅ 13 service categories with business-focused descriptions

## 📝 License

Private repository - All rights reserved.

---

**Built with ❤️ by algsoch (polybazar) - Your partner in AI-powered software development**
