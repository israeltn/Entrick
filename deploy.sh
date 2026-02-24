#!/bin/bash

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
npm run build

# Standalone assets (CRITICAL for static/routing issues)
echo "📂 Moving standalone assets..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Restart with PM2
echo "🔄 Restarting PM2 process..."
pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js

# Save PM2 state
pm2 save

echo "✅ Deployment successful!"
