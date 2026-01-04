# algsoch - AI Development Studio

Professional AI development company offering chatbots, deep learning models, computer vision systems, and full-stack AI solutions.

## 🚀 Features

- ✨ **Modern React** with Vite for blazing-fast performance
- 🎨 **Tailwind CSS** with custom gradients and animations
- 🎭 **Framer Motion** for smooth, professional animations
- 🤖 **AI Chatbot** powered by Google Gemini 2.5 Flash
- 📱 **Fully Responsive** design for all devices
- 💬 **Discord Integration** for instant contact notifications
- 🎯 **Interactive Navigation** with smooth scrolling
- 📊 **Real Portfolio** with 13+ live projects

## 📁 Project Structure

```
frontend-studio-pitch/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Responsive navbar
│   │   ├── Hero.jsx             # Landing with service cards
│   │   ├── Services.jsx         # Detailed service breakdown
│   │   ├── Process.jsx          # 4-phase workflow
│   │   ├── Technologies.jsx     # Tech stack showcase
│   │   ├── Portfolio.jsx        # Real project showcase
│   │   ├── Contact.jsx          # Contact form with Discord webhook
│   │   ├── Chatbot.jsx          # AI sales agent chatbot
│   │   ├── FloatingElements.jsx # Background animations
│   │   └── VisitorTracker.jsx   # Analytics integration
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Comic Sans font
├── .env                         # Environment variables (not in git)
├── .env.example                 # Example env file
├── render.yaml                  # Render.com deployment config
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

4. **Start development server**:
```bash
npm run dev
```

App runs at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

Build output goes to `dist/` folder.

## 🚢 Deploy to Render

1. Push code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Create new **Static Site**
4. Connect GitHub repo: `algsoch/business`
5. Set root directory: `frontend-studio-pitch`
6. Add environment variables in Render dashboard
7. Deploy!

Auto-deploys from `render.yaml` config.

## 🎯 Key Features

### AI Chatbot
- Powered by Google Gemini 2.5 Flash
- Acts as sales agent and AI consultant
- Knows all services, pricing, portfolio
- Persuasive personality with urgency messaging
- Floating button with pulsing indicator

### Discord Integration
- Rich embed notifications for contact form
- @everyone ping for immediate attention
- Formatted fields with emojis
- Bright orange color for visibility

### Responsive Design
- Mobile-first approach
- Granular breakpoints (sm, md, lg, xl)
- Navbar adapts height, padding, text size
- Service cards stack beautifully on mobile

### Pricing & Discounts
- 50% OFF launch offer across all services
- Negotiable pricing badges
- Range: ₹25k - ₹3.5L
- Strikethrough original pricing

## 🛠️ Technologies

- **React 18.2.0** - UI framework
- **Vite 5.0.2** - Build tool
- **Tailwind CSS 3.3.5** - Styling
- **Framer Motion 10.16.4** - Animations
- **Lucide React** - Icons
- **Google Gemini 2.5 Flash** - AI chatbot
- **Discord Webhooks** - Notifications

## 🎨 Customization

### Colors
Edit `tailwind.config.js` for color scheme changes.

### Fonts
Comic Sans used for "algsoch" branding via `.font-comic` class in `index.css`.

### Content
- **Services**: Edit `Services.jsx` and `Hero.jsx`
- **Portfolio**: Update `Portfolio.jsx` with your projects
- **Contact**: Change email/phone in `Contact.jsx` and `Chatbot.jsx`
- **Pricing**: Adjust values in `Services.jsx` and `Hero.jsx`

### Chatbot Personality
Edit `SYSTEM_CONTEXT` in `Chatbot.jsx` to change:
- Company info
- Service descriptions
- Sales approach
- Tone and style

## 📧 Contact

- **Email**: npdimagine@gmail.com
- **Phone**: +91 8383848219
- **GitHub**: [@algsoch](https://github.com/algsoch)
- **LinkedIn**: [algsoch](https://www.linkedin.com/in/algsoch/)

## 📝 License

Private repository - All rights reserved.
- Responsive images and layouts
- CSS animations with GPU acceleration

---

**Note**: This is a business-critical presentation. Take time to customize the contact information and any specific details about your team before presenting to mentors or clients.
