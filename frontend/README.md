# Animesh Giri - Portfolio

Professional portfolio website for Data Scientist, AI Engineer, and Clinical ML specialist.

## 🚀 Live Site

Visit: [https://animesh352.github.io/portfolio/](https://animesh352.github.io/portfolio/)

## 💻 Tech Stack

- **Frontend**: React 19 + Create React App + CRACO
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Animesh352/portfolio.git
cd portfolio/frontend

# Install dependencies
yarn install

# Start development server
yarn start
```

The app will run on `http://localhost:3000`

### Build

```bash
# Create production build
yarn build
```

The build outputs to the `build/` folder.

## 📦 Deployment to GitHub Pages

### One-Time Setup

1. **Create GitHub Repository**
   - Create a new repository named `portfolio` on GitHub
   - Do NOT initialize with README (we'll push existing code)

2. **Initialize Git and Push**

```bash
# From the root directory (/app)
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/Animesh352/portfolio.git
git push -u origin main
```

### Deploy

```bash
# From /app/frontend directory
yarn deploy
```

This will:
1. Build the production version to `build/` folder
2. Create/update the `gh-pages` branch
3. Push the build to GitHub Pages

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes for deployment
6. Visit: `https://animesh352.github.io/portfolio/`

## 📄 Resume

Place your resume PDF at:
```
/app/frontend/public/Animesh_Giri_Resume.pdf
```

The "Download Resume" button will automatically link to this file.

## 📸 Profile Photo

Place your professional headshot at:
```
/app/frontend/public/profile.jpg
```

**Image Specifications:**
- **Format**: JPG or PNG
- **Size**: 400x400px to 600x600px (square)
- **File size**: Under 500KB
- **Quality**: High-quality professional photo
- **Background**: Clean, neutral background
- **Lighting**: Good, even lighting

**What to expect:**
- Displays as circular image in Hero section
- Responsive sizing (112px to 160px depending on screen)
- Subtle border that adapts to dark/light themes
- Soft shadow effect
- Lazy loading for performance
- Graceful fallback if image is missing

After adding your photo:
```bash
cd /app
git add frontend/public/profile.jpg
git commit -m "Add professional headshot"
git push origin main

cd /app/frontend
yarn deploy
```

## 🎨 Features

- ✅ Dark/Light theme toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Project filtering by category
- ✅ Professional typography (Inter + Roboto Mono)
- ✅ Optimized for recruiters and hiring managers
- ✅ SEO-friendly metadata

## 📧 Contact

- **Email**: animesh.giri2000@gmail.com
- **LinkedIn**: [linkedin.com/in/animesh-giri](https://www.linkedin.com/in/animesh-giri)
- **GitHub**: [github.com/Animesh352](https://github.com/Animesh352)

## 📝 License

© 2025 Animesh Giri. All rights reserved.
