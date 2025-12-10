#!/bin/bash

echo "🔧 Setting up separate GitHub repo for frontend-studio-pitch"
echo ""

cd "/Users/viclkykumar/Library/CloudStorage/GoogleDrive-vickyiitbombay2@gmail.com/My Drive/business/frontend-studio-pitch"

# Check if .git already exists
if [ -d ".git" ]; then
    echo "⚠️  Git repository already exists here."
    echo "   Removing old .git folder..."
    rm -rf .git
fi

# Initialize new git repo
echo "📦 Initializing new git repository..."
git init

# Add all files
echo "➕ Adding all files..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: AI Studio Pitch - Full-stack website with animations"

# Rename to main branch
echo "🔀 Setting branch to main..."
git branch -M main

echo ""
echo "✅ Local repository setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Create a NEW repository on GitHub: https://github.com/new"
echo "   Repository name: frontend-studio-pitch (or any name you want)"
echo "   Make it PUBLIC or PRIVATE"
echo ""
echo "2. After creating the repo, run these commands:"
echo "   cd \"/Users/viclkykumar/Library/CloudStorage/GoogleDrive-vickyiitbombay2@gmail.com/My Drive/business/frontend-studio-pitch\""
echo "   git remote add origin https://github.com/YOUR_USERNAME/frontend-studio-pitch.git"
echo "   git push -u origin main"
echo ""
echo "3. Then deploy to Vercel:"
echo "   vercel --prod"
echo ""
