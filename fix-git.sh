#!/bin/bash

echo "🔧 Fixing: Creating separate repo for frontend-studio-pitch only"
echo ""

# Go to frontend folder
cd "/Users/viclkykumar/Library/CloudStorage/GoogleDrive-vickyiitbombay2@gmail.com/My Drive/business/frontend-studio-pitch"

# Remove old git if exists
if [ -d ".git" ]; then
    echo "❌ Removing old .git folder..."
    rm -rf .git
fi

# Initialize fresh git repo
echo "✅ Creating new git repository..."
git init

# Add all files
echo "➕ Adding files..."
git add .

# Commit
echo "💾 Creating commit..."
git commit -m "Initial commit: AI Studio Pitch website"

# Rename to main
echo "🔀 Setting branch to main..."
git branch -M main

echo ""
echo "✅ Done! Now create a NEW GitHub repository and run:"
echo ""
echo "git remote add origin https://github.com/algsoch/frontend-studio-pitch.git"
echo "git push -u origin main"
echo ""
