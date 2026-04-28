# 📸 Profile Photo Setup Guide

## Current Status
✅ Profile image section implemented in Hero  
⏳ Waiting for your professional headshot

## Quick Setup

### Step 1: Prepare Your Photo
- **Format**: JPG or PNG
- **Size**: 400×400px to 600×600px (square aspect ratio)
- **File size**: Under 500KB for web performance
- **Quality**: High-resolution professional headshot

### Step 2: Photo Guidelines
✅ Professional attire  
✅ Clean, neutral background  
✅ Good lighting (natural or studio)  
✅ Face clearly visible and centered  
✅ Friendly, professional expression  
✅ High contrast (avoid low-light photos)

### Step 3: Add to Project
```bash
# Place your photo at this exact location:
/app/frontend/public/profile.jpg
```

### Step 4: Test Locally
```bash
cd /app/frontend
yarn start
# Visit http://localhost:3000 to verify
```

### Step 5: Deploy
```bash
cd /app
git add frontend/public/profile.jpg
git commit -m "Add professional headshot"
git push origin main

cd /app/frontend
yarn deploy
```

## What You'll See

### Before Adding Photo (Current)
- Blue gradient circular placeholder
- User icon from Lucide React
- Professional fallback design

### After Adding Photo
- Your headshot in circular format
- Responsive sizing:
  - Mobile: ~112px diameter
  - Tablet: ~144px diameter  
  - Desktop: ~160px diameter
- Subtle border (adapts to dark/light theme)
- Soft shadow effect
- Lazy loading for performance

## Technical Details

### Image Behavior
- **Object-fit**: cover (maintains aspect ratio, fills circle)
- **Border**: 2px adaptive border
- **Shadow**: Soft shadow for depth
- **Loading**: Lazy loaded for performance
- **Alt text**: "Animesh Giri" (accessibility)
- **Fallback**: Graceful icon if image fails to load

### Theme Support
- Works perfectly in both dark and light modes
- Border color adapts automatically
- No manual theme adjustments needed

## Troubleshooting

### Image Not Showing?
1. Check file path: `/app/frontend/public/profile.jpg`
2. Check file name: must be exactly `profile.jpg` (lowercase)
3. Clear browser cache: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. Check file format: JPG or PNG only
5. Check file size: should be under 500KB

### Image Looks Stretched?
- Ensure your image is square (1:1 aspect ratio)
- Crop your photo to square before uploading
- Use photo editing software to resize to 500×500px

### Image Quality Issues?
- Use higher resolution source image
- Avoid compression artifacts
- Ensure good lighting in original photo
- Use professional photo editing if needed

## Photo Editing Tips

### Recommended Tools (Free)
- **Remove Background**: [remove.bg](https://remove.bg)
- **Crop to Square**: Built-in OS tools or Canva
- **Lighting Adjustment**: [Photopea](https://photopea.com) (free Photoshop alternative)
- **Professional Touch-up**: Canva, GIMP, or Photoshop

### Quick Crop to Square
1. Open image in any editor
2. Select 1:1 aspect ratio crop
3. Center your face
4. Export as JPG (quality: 85-90%)
5. Verify size is under 500KB

## Best Practices

### ✅ DO
- Use recent photo (within 1-2 years)
- Smile naturally
- Use professional attire
- Ensure good lighting
- Use neutral background
- Center your face
- Keep it simple and professional

### ❌ DON'T
- Use casual/vacation photos
- Include other people
- Use heavily filtered images
- Use low-resolution images
- Use photos with busy backgrounds
- Over-edit (keep it natural)
- Use dated photos

## Examples of Good Profile Photos

**Professional Headshot:**
- Business attire
- Solid background
- Good lighting
- Direct eye contact
- Friendly expression

**Casual Professional:**
- Smart casual attire
- Blurred background
- Natural lighting
- Approachable smile
- Confident posture

## File Formats Supported

| Format | Recommended | Notes |
|--------|-------------|-------|
| JPG | ✅ Yes | Best for photos, smaller file size |
| PNG | ✅ Yes | Good for transparent backgrounds |
| WEBP | ⚠️ May work | Not all browsers support |
| GIF | ❌ No | Not suitable for profile photos |
| SVG | ❌ No | Not for photos |

## Accessibility

The implementation includes:
- Proper `alt` text: "Animesh Giri"
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- WCAG 2.1 compliant

## Performance

Optimization features:
- Lazy loading (loads only when visible)
- Compressed image recommended (<500KB)
- Responsive sizing (serves appropriate size)
- Cached by browser
- Fast loading time

## Need Help?

If you're having trouble:
1. Check the file path is correct
2. Verify file permissions (readable)
3. Clear cache and hard reload
4. Check browser console for errors
5. Ensure file format is JPG or PNG

---

**Status**: Ready for your photo  
**Location**: `/app/frontend/public/profile.jpg`  
**Action**: Add your professional headshot and redeploy
