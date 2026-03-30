#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status

# Configuration
APP_DIR="/home/entricksystems/htdocs/entricksystems.com"
APP_NAME="entricksystems"

echo "🚀 Starting deployment for $APP_NAME..."

# Navigate to project directory
cd $APP_DIR || { echo "❌ Directory $APP_DIR not found"; exit 1; }

# Pull latest changes (assuming git is used)
# git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install
npm audit fix --force

# Build the project
echo "🧹 Cleaning previous build..."
rm -rf .next

echo "🏗️ Building the project..."
npm run build || { echo "❌ Build failed. Check if next.config.ts is still present (delete it!)."; exit 1; }

# Standalone assets (CRITICAL for static/routing issues)
echo "📂 Moving standalone assets..."
cp -r public .next/standalone/ || true
cp -r .next/static .next/standalone/.next/ || true

# Restart with PM2
echo "🔄 Restarting PM2 process on Port 3001..."
pm2 delete $APP_NAME || true
PORT=3001 pm2 start .next/standalone/server.js --name "$APP_NAME"

git pull origin main
pm2 delete entrick
pm2 start npm --name "entrick" -- start -- -p 8080

# Save PM2 state
pm2 save

echo "---------------------------------------------------"
echo "✅ Deployment successful! Site is on Port 3001"
echo "📡 Check logs with: pm2 logs $APP_NAME"
echo "---------------------------------------------------"


# 1. Reset any local changes
# git reset --hard origin/main
# 2. Pull just to be sure
# git pull origin main



Entrick Information Systems engineers Domain-Specific Private AI for SME and enterprise scaling. We bridge pioneering AI research with implementation through a holistic ecosystem.

Key Services: 🔹Bespoke AI Agents & LLM Fine-tuning 🔹AI Research & Custom Software 🔹Enterprise Cybersecurity 🔹Managed Infrastructure & IT Training

We prioritize sovereign, privacy-first AI with Zero Trust security. Our mission: engineering the future of intelligent enterprise. 🚀

Tagline Suggestion (for the header): Domain-Specific Private AI for SME and Enterprise Scaling.


git pull origin main
npm ci
npm run build
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
pm2 delete entricksystems || true
PORT=3001 pm2 start .next/standalone/server.js --name "entricksystems"
pm2 save


# SSH in
cd /home/entricksystems/htdocs/entricksystems.com
git pull origin main

# Create the env file
echo "NEXT_PUBLIC_API_URL=https://api.entricksystems.com/api" > .env.local

npm ci
npm run build

##Main for production
# Make sure static assets are in standalone (required for standalone mode)
git stash
git pull origin main
npm ci
npm run build
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
pm2 delete entrick
PORT=3001 pm2 start .next/standalone/server.js --name "entrick"
pm2 save

