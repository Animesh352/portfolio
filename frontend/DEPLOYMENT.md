# 🚀 Deployment Guide for GitHub Pages

## Tech Stack

This portfolio uses:
- **Create React App (CRA)** with **CRACO** (not Vite)
- **Build Output**: `build/` folder (not `dist/`)
- **GitHub Pages**: Deployed from `gh-pages` branch

## Prerequisites
- GitHub account (username: Animesh352)
- Git installed on your machine
- Node.js 18+ and Yarn installed

## Configuration

The portfolio is configured with:
```json
"homepage": "https://Animesh352.github.io/portfolio"
```

This ensures:
- All assets are correctly prefixed with `/portfolio/`
- Routing works on GitHub Pages subpath
- Images and files load correctly

## Step-by-Step Deployment Instructions

### 1️⃣ First-Time Setup

#### A. Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository" or go to: https://github.com/new
3. Repository settings:
   - **Name**: `portfolio`
   - **Description**: "Professional portfolio for Data Scientist & AI Engineer"
   - **Visibility**: Public
   - **DO NOT** check "Initialize this repository with README"
4. Click "Create repository"

#### B. Initialize Git and Push Code

```bash
# Navigate to the project root
cd /app

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional portfolio website"

# Rename branch to main
git branch -M main

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/Animesh352/portfolio.git

# Push to GitHub
git push -u origin main
```

### 2️⃣ Deploy to GitHub Pages

```bash
# Navigate to frontend directory
cd /app/frontend

# Deploy to GitHub Pages (this will build and deploy)
yarn deploy
```

**What happens when you run `yarn deploy`:**
1. Runs `yarn build` to create production build
2. Creates a new branch called `gh-pages`
3. Pushes the `build/` folder contents to the `gh-pages` branch
4. GitHub automatically deploys from this branch

### 3️⃣ Configure GitHub Pages

1. Go to your repository on GitHub: https://github.com/Animesh352/portfolio
2. Click **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `gh-pages` and `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes for deployment

### 4️⃣ Access Your Portfolio

Your portfolio will be live at:
```
https://animesh352.github.io/portfolio/
```

## 📄 Adding Your Resume

Place your PDF resume file at:
```
/app/frontend/public/Animesh_Giri_Resume.pdf
```

The "Download Resume" button is already configured to link to this file.

After adding the resume:
```bash
cd /app
git add frontend/public/Animesh_Giri_Resume.pdf
git commit -m "Add resume PDF"
git push origin main

cd /app/frontend
yarn deploy
```

## 🔄 Updating Your Portfolio

Whenever you make changes to your portfolio:

```bash
# 1. Save your changes
cd /app
git add .
git commit -m "Update: [describe your changes]"
git push origin main

# 2. Deploy to GitHub Pages
cd /app/frontend
yarn deploy
```

## 🛠️ Troubleshooting

### Issue: `gh-pages` branch not created
**Solution**: Ensure you have write permissions to the repository and try:
```bash
cd /app/frontend
yarn deploy --verbose
```

### Issue: 404 error when visiting site
**Solution**: 
1. Check that GitHub Pages is enabled in repository settings
2. Verify the `gh-pages` branch exists
3. Wait 2-3 minutes after deployment
4. Check the base path in `vite.config.js` matches your repository name

### Issue: Assets not loading (broken images/CSS)
**Solution**: The `homepage` field in `package.json` must match your repository name:
```json
"homepage": "https://Animesh352.github.io/portfolio"
```

All assets will automatically be prefixed with `/portfolio/` during build.

### Issue: Resume download not working
**Solution**: 
1. Ensure the PDF is at `/app/frontend/public/Animesh_Giri_Resume.pdf`
2. Rebuild and redeploy: `yarn build && yarn deploy`

## 📱 Testing Before Deployment

```bash
# Build locally
cd /app/frontend
yarn build

# Serve the build locally to test (install serve if needed)
npx serve -s build -l 3000

# The app will be served at: http://localhost:3000
# Note: Local serving won't include the /portfolio/ prefix,
# but GitHub Pages will handle it correctly
```

## 🔐 Using Personal Access Token (if needed)

If GitHub asks for authentication:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use token as password when pushing:
   ```bash
   git push https://[YOUR_TOKEN]@github.com/Animesh352/portfolio.git main
   ```

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] Resume PDF placed in `public/` folder
- [ ] `yarn deploy` executed successfully
- [ ] GitHub Pages enabled in settings
- [ ] Site accessible at https://animesh352.github.io/portfolio/
- [ ] All sections loading correctly
- [ ] Resume download working
- [ ] Links to GitHub, LinkedIn, Email working
- [ ] Mobile responsive design verified
- [ ] Theme toggle working

## 📊 Analytics (Optional)

To add Google Analytics:
1. Get your GA4 measurement ID
2. Add to `public/index.html` in the `<head>` section
3. Redeploy

## 🎨 Customization

All content is in:
- **Hero**: `/app/frontend/src/components/Hero.jsx`
- **About**: `/app/frontend/src/components/About.jsx`
- **Skills**: `/app/frontend/src/components/Skills.jsx`
- **Projects**: `/app/frontend/src/components/Projects.jsx`
- **Experience**: `/app/frontend/src/components/Experience.jsx`
- **Contact**: `/app/frontend/src/components/Contact.jsx`

After changes, commit and redeploy:
```bash
git add . && git commit -m "Update content" && git push
cd /app/frontend && yarn deploy
```

## 🆘 Support

If you encounter issues:
1. Check GitHub repository Actions tab for build errors
2. Review browser console for JavaScript errors
3. Verify all environment variables are set correctly
4. Check GitHub Pages deployment status in Settings → Pages

---

**Live URL**: https://animesh352.github.io/portfolio/
**Repository**: https://github.com/Animesh352/portfolio
