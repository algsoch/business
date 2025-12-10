#!/bin/bash

echo "🚀 Deploying to Vercel..."
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found!"
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI ready"
echo ""

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    echo "   This will deploy to production."
    echo ""
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo "🌐 Your site is now live!"
    else
        echo ""
        echo "❌ Deployment failed"
        echo "💡 Try: vercel login first, then run this script again"
    fi
else
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi
