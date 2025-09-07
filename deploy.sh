#!/bin/bash

# 🚀 Divine Fatherhood - One-Click Deployment to Vercel
# Author: MrSixPack
# Purpose: Deploy ultra-spacious Divine Fatherhood website to production

echo "🚀 Divine Fatherhood - Vercel Deployment Script"
echo "================================================"
echo ""

# Check if in correct directory
if [ ! -f "next.config.js" ]; then
    echo "❌ Error: Please run this script from the Divine Fatherhood project directory"
    echo "Expected files: next.config.js, package.json, vercel.json"
    exit 1
fi

echo "✅ Project directory confirmed"
echo ""

# Check if Vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel || {
        echo "⚠️  Global install failed, using local version..."
        npx vercel --version || {
            echo "❌ Please install Vercel CLI manually: npm install -g vercel"
            exit 1
        }
        VERCEL_CMD="npx vercel"
    }
else
    VERCEL_CMD="vercel"
    echo "✅ Vercel CLI found"
fi

echo ""

# Test build first
echo "🔨 Testing build process..."
npm run build || {
    echo "❌ Build failed! Please fix build errors before deploying."
    exit 1
}

echo "✅ Build successful"
echo ""

# Deploy to production
echo "🚀 Deploying to Vercel production..."
echo "This will deploy to: divine-fatherhood.vercel.app"
echo ""

$VERCEL_CMD --prod || {
    echo "❌ Deployment failed!"
    echo ""
    echo "💡 Troubleshooting tips:"
    echo "1. Run 'vercel login' to authenticate"
    echo "2. Ensure you have push access to the GitHub repository"
    echo "3. Check Vercel dashboard for detailed error logs"
    exit 1
}

echo ""
echo "🎉 Deployment Successful!"
echo ""
echo "📍 Your Divine Fatherhood website is now live at:"
echo "   Primary: divine-fatherhood.vercel.app"
echo "   Custom Domain: www.mrsixpackempire.com (after DNS setup)"
echo ""
echo "🔧 To add custom domain:"
echo "   1. Run: vercel domains add www.mrsixpackempire.com"
echo "   2. Update DNS: CNAME www -> cname.vercel-dns.com"
echo ""
echo "✅ Ultra-spacious 'CROWNED WITH PURPOSE' website is live!"