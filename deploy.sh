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

# Build the project
echo "🏗️ Building the project..."
npm run build || { echo "❌ Build failed. Check if next.config.ts is still present (delete it!)."; exit 1; }

# Standalone assets (CRITICAL for static/routing issues)
echo "📂 Moving standalone assets..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Restart with PM2
echo "🔄 Restarting PM2 process..."
# We explicitly set the port here as well just in case
PORT=3001 pm2 reload ecosystem.config.js || PORT=3001 pm2 start ecosystem.config.js

# Save PM2 state
pm2 save

echo "---------------------------------------------------"
echo "✅ Deployment successful!"
echo "📡 Check logs with: pm2 logs $APP_NAME"
echo "---------------------------------------------------"
