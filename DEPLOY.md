# Deploy to Vercel - Step by Step Guide

## 🚀 Quick Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd "/Users/viclkykumar/Library/CloudStorage/GoogleDrive-vickyiitbombay2@gmail.com/My Drive/business/frontend-studio-pitch"
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? → Yes
   - Which scope? → Select your account
   - Link to existing project? → No
   - Project name? → Press Enter (or type custom name)
   - Directory? → Press Enter (./  current directory)
   - Override settings? → No

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AI Studio Pitch"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard (Direct Upload)

1. **Build the project locally**:
   ```bash
   npm run build
   ```

2. **Go to Vercel Dashboard**:
   - Visit https://vercel.com/new
   - Drag and drop the `dist` folder
   - Done!

## 📝 Files Created

✅ `vercel.json` - Vercel configuration for SPA routing
✅ `public/favicon.svg` - Custom 5× logo favicon with gradient
✅ Updated `index.html` - Added favicon, meta tags, SEO

## 🎨 Favicon Details

- **Icon**: "5×" text with AI chip symbol
- **Colors**: Blue → Cyan → Purple gradient
- **Format**: SVG (scales perfectly on all devices)
- **Location**: `/public/favicon.svg`

## 🔧 Vercel Configuration

The `vercel.json` file ensures:
- Proper SPA routing (all routes → index.html)
- Vite framework detection
- Correct build output from `dist` folder

## 📱 After Deployment

Your site will be live at:
- Preview: `https://your-project-name-xxxx.vercel.app`
- Production: `https://your-project-name.vercel.app`

You can also add a custom domain in Vercel dashboard!

## 🐛 Troubleshooting

If deployment fails:

1. **Clear build cache**:
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   ```

2. **Check build locally**:
   ```bash
   npm run build
   npm run preview
   ```

3. **View Vercel logs** in dashboard for errors

## 🌟 Next Steps After Deployment

1. Add custom domain (optional)
2. Enable Vercel Analytics
3. Set up automatic deployments from Git
4. Configure environment variables (if needed)

---

Ready to deploy? Run: `vercel --prod`
