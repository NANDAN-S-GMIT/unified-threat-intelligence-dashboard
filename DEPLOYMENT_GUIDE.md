# 🚀 Deploying OSINT Web to Netlify

## ⚠️ IMPORTANT: Next.js Deployment

**Drag & Drop WILL NOT WORK** for Next.js applications!
You must use **Git deployment** or **Netlify CLI**.

---

## ✅ Recommended Method: Git Deployment

### Step 1: Push Your Code to GitHub

#### A. Create a GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **"New repository"** (green button)
3. Name it: `osint-web` or any name you like
4. **DO NOT** initialize with README (your project already has files)
5. Click **"Create repository"**

#### B. Push Your Code to GitHub

Run these commands in your project folder:

```bash
# Initialize git (already done ✅)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - OSINT Web Application"

# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify from GitHub

1. Go to [netlify.com](https://netlify.com) and login
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub
5. Select your **`osint-web`** repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: (leave empty)
7. Click **"Deploy site"**
8. Wait 2-3 minutes for deployment
9. **Done!** Your site is live! 🎉

---

## Alternative: Deploy via Netlify CLI

If you don't want to use GitHub, use Netlify CLI:

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Deploy
```bash
# Deploy to production
netlify deploy --prod
```

When prompted:
- **Publish directory**: `.next`
- Confirm and deploy!

---

## Important Configuration Details

### ✅ Build Settings (Already Configured)
- **Build Command**: `npm run build` ✓
- **Publish Directory**: `.next` ✓
- **Node Version**: 18.x or higher (Netlify auto-detects)

### 📁 What Folder to Upload?
**Upload the `.next` folder** - This is your built/compiled application

**Location**: `E:\PROJECTS\CYBER\OS-INT\OSINT_WEB\.next`

### 🔧 Configuration File
A `netlify.toml` file has been created in your project root with the correct settings.

---

## Troubleshooting

### If deployment fails:
1. Make sure you uploaded the **`.next`** folder, not the entire project
2. Check that `npm run build` completed successfully (it did! ✅)
3. Verify Node.js version is 18.x or higher in Netlify settings

### If you see errors about missing files:
- Netlify needs the `.next` folder which contains all compiled files
- Make sure the folder isn't empty

---

## Post-Deployment

### Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

### Environment Variables (If Needed Later)
1. Go to Site settings → Environment variables
2. Add any API keys or secrets

---

## Quick Answer to Your Questions:

**Q: What command to run?**
**A**: `npm run build` ✅ (You already did this successfully!)

**Q: What folder to upload?**
**A**: The **`.next`** folder located at:
`E:\PROJECTS\CYBER\OS-INT\OSINT_WEB\.next`

**Q: Is the build correct?**
**A**: YES! ✅ Your build completed successfully with:
- Main page: 145 kB
- About page: 141 kB
- All routes compiled successfully

---

## Next Steps:
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag & drop the `.next` folder
4. Done! Your OSINT tool will be live! 🚀

Your site will get a URL like: `https://your-site-name.netlify.app`

Good luck with your deployment! 🎉
