# 🚀 DEPLOY DIVINE FATHERHOOD TO www.mrsixpackempire.com

## ✅ **OPTION: FREE NETLIFY HOSTING**

This is 100% FREE forever and perfect for your website!

---

## 📋 **STEP-BY-STEP INSTRUCTIONS**

### **PART 1: Setup Netlify Account (5 minutes)**

1. **Go to Netlify:**
   - Visit: https://app.netlify.com/signup
   
2. **Sign up with GitHub:**
   - Click "Sign up with GitHub"
   - It will ask you to authorize Netlify
   - Click "Authorize netlify"
   
3. **You're in!**
   - You now have a free Netlify account

---

### **PART 2: Connect Your GitHub Repository (3 minutes)**

1. **Import project:**
   - Click "Add new site" → "Import an existing project"
   
2. **Connect to GitHub:**
   - Click "Deploy with GitHub"
   - Find and select your repository: **Divine-Fatherhood**
   
3. **Configure build settings:**
   ```
   Build command: npm run build
   Publish directory: out
   ```
   
4. **Click "Deploy site"**
   - Netlify will build and deploy your website
   - This takes 2-3 minutes
   
5. **Get your Netlify URL:**
   - After deployment, you'll see something like:
   - `https://your-site-name.netlify.app`
   - **Write this down!**

---

### **PART 3: Add Custom Domain in Netlify (2 minutes)**

1. **In your Netlify dashboard:**
   - Go to "Domain settings"
   
2. **Click "Add custom domain"**
   - Enter: `www.mrsixpackempire.com`
   - Click "Verify"
   
3. **Netlify will give you DNS instructions**
   - **Keep this page open!**
   - You'll need these DNS records for the next part

---

### **PART 4: Update Hostinger DNS Settings (5 minutes)**

**NOW WE GO TO HOSTINGER:**

1. **Log into Hostinger:**
   - Go to: https://hpanel.hostinger.com
   - Log in with your credentials
   
2. **Find DNS settings:**
   - Click on "Domains" in the sidebar
   - Find "mrsixpackempire.com"
   - Click "Manage"
   - Click "DNS / Name Servers" tab
   
3. **Add/Update DNS Records:**
   
   **IMPORTANT:** Netlify will tell you EXACTLY what to add. It will look something like this:
   
   **Record 1:**
   ```
   Type: CNAME
   Name: www
   Points to: your-site-name.netlify.app
   TTL: 3600 (or Auto)
   ```
   
   **Steps:**
   - Click "Add Record" or edit existing CNAME record for "www"
   - Type: Select "CNAME"
   - Name: Enter "www"
   - Points to: Enter what Netlify gave you (ends with .netlify.app)
   - TTL: Leave as is (usually 3600 or Auto)
   - Click "Save" or "Add Record"

4. **Wait for DNS propagation:**
   - This can take 5 minutes to 48 hours
   - Usually works in 15-30 minutes
   - You'll know it's working when you visit www.mrsixpackempire.com and see your Divine Fatherhood website!

---

## 🎯 **WHAT YOU'LL SEE**

After DNS propagates (15-30 minutes typically):
- Visit: **https://www.mrsixpackempire.com**
- You'll see: Your Divine Fatherhood website with Command Corner lead magnet!
- It will have: Green padlock (SSL certificate - automatic from Netlify)

---

## ❓ **COMMON QUESTIONS**

**Q: How much does this cost?**
A: $0.00/month. Netlify free tier includes everything you need.

**Q: What if I make changes to my website?**
A: Just push to GitHub. Netlify automatically rebuilds and deploys!

**Q: Will the old yoga site disappear?**
A: Yes! Once DNS updates, your Divine Fatherhood site replaces it.

**Q: Can I undo this?**
A: Yes! Just change the DNS back in Hostinger anytime.

**Q: Do I need to cancel anything with Hostinger?**
A: No! Keep your Hostinger account and domain. You're just pointing it to Netlify.

---

## 🆘 **IF YOU GET STUCK**

**Take a screenshot of where you're stuck and I'll help you!**

Common stuck points:
1. "I can't find DNS settings in Hostinger" → Look for "Domains" → "Manage" → "DNS/Name Servers"
2. "Netlify is building" → Wait 2-3 minutes, it's working!
3. "My domain still shows old site" → DNS takes time (up to 48 hours, usually 30 minutes)

---

## ✅ **VERIFICATION CHECKLIST**

After setup:
- [ ] Netlify account created
- [ ] GitHub repository connected to Netlify
- [ ] Site deployed on Netlify (you have a .netlify.app URL)
- [ ] Custom domain added in Netlify
- [ ] DNS records updated in Hostinger
- [ ] Waiting for DNS propagation (15-30 mins)
- [ ] Website loads at www.mrsixpackempire.com
- [ ] SSL certificate is active (green padlock)
- [ ] Command Corner lead magnet visible and working

---

## 🎉 **YOU'RE DONE!**

Once your domain shows the Divine Fatherhood website:
- Share the link!
- Start collecting leads with your Command Corner magnet
- Make changes by pushing to GitHub (auto-deploys)

**Your website will be LIVE at: www.mrsixpackempire.com**
