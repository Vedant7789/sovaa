# Background Setup Guide

## 🎨 Enhanced Website Features

Your SOVAA hookah lounge website has been enhanced with:

### ✨ **Improved Typography**
- **Hero Text**: Large, bold, responsive text that scales beautifully
- **Section Titles**: Prominent headings with proper hierarchy
- **Body Text**: Readable, well-sized text throughout
- **Responsive Design**: Text adapts to all screen sizes

### 🎭 **Visual Enhancements**
- **Clean Black Background**: Elegant black background throughout
- **Glass Morphism**: Modern glass-like effects on cards and navigation
- **Hover Effects**: Glowing text effects on interactive elements
- **Sticky Navigation**: Navigation bar stays at top when scrolling
- **Enhanced Spacing**: Better padding and margins throughout

## 📁 Adding Your Background Assets

### 1. **Background Video Setup**

To add your smokey animation video:

1. **Place your video file** in the `public/videos/` folder:
   ```
   public/
   └── videos/
       └── smoke-background.mp4
   ```

2. **Uncomment the video section** in `src/app/page.tsx` (around line 25):
   ```tsx
   {/* Background Video - Uncomment and update path */}
   <video className="video-background" autoPlay muted loop>
     <source src="/videos/smoke-background.mp4" type="video/mp4" />
   </video>
   ```

### 2. **Background Wallpaper Setup**

To add your wallpaper images:

1. **Place your wallpaper** in the `public/images/` folder:
   ```
   public/
   └── images/
       ├── background-wallpaper.jpg
       ├── gallery1.jpg
       ├── gallery2.jpg
       └── gallery3.jpg
   ```

2. **Uncomment the background image section** in `src/app/page.tsx` (around line 30):
   ```tsx
   {/* Background Image - Uncomment and update path */}
   <div 
     className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
     style={{backgroundImage: 'url(/images/background-wallpaper.jpg)'}}
   ></div>
   ```

### 3. **Gallery Images Setup**

To add gallery images:

1. **Place your gallery images** in `public/images/`
2. **Uncomment the Image components** in the Gallery section (around line 180):
   ```tsx
   <Image 
     src="/images/gallery1.jpg" 
     alt="Gallery Image 1" 
     className="w-full h-full object-cover"
   />
   ```

## 🎯 **Recommended File Formats**

- **Videos**: MP4 format, optimized for web (compressed)
- **Images**: JPG/JPEG for photos, PNG for graphics with transparency
- **File Sizes**: Keep videos under 10MB, images under 2MB for fast loading

## 🚀 **Customization Options**

### Adjusting Typography Sizes
The typography uses CSS clamp() for responsive sizing:
- **Hero text**: `clamp(3rem, 8vw, 6rem)` - scales from 3rem to 6rem
- **Section titles**: `clamp(2.5rem, 6vw, 4rem)` - scales from 2.5rem to 4rem
- **Body text**: `clamp(1rem, 2vw, 1.25rem)` - scales from 1rem to 1.25rem

### Adjusting Glass Effect
In `src/app/globals.css`, you can modify the glass morphism effect:
- **Opacity**: Adjust `rgba(255, 255, 255, 0.1)` for transparency
- **Blur**: Change `blur(10px)` for different blur intensity
- **Border**: Modify `rgba(255, 255, 255, 0.2)` for border opacity

## 🔧 **Performance Tips**

1. **Optimize your video**: Compress it to reduce file size
2. **Use WebP images**: Convert images to WebP format for better compression
3. **Lazy load gallery images**: Consider implementing lazy loading for better performance
4. **Test on mobile**: Ensure animations don't impact mobile performance

## 📱 **Mobile Responsiveness**

The website is fully responsive with:
- **Mobile-first design**: Optimized for all screen sizes
- **Touch-friendly**: Large touch targets for mobile navigation
- **Performance optimized**: Clean design for fast loading

## 🎨 **Color Scheme**

Current color scheme:
- **Primary**: Black (#000000) - Clean background
- **Accent**: Red (#e53e3e) - for highlights and hover effects
- **Text**: White (#ffffff)
- **Glass effect**: Semi-transparent white with blur

You can customize these colors in the CSS variables at the top of `globals.css`.

---

**Ready to add your assets?** Just follow the steps above and your website will have a clean, elegant black background with your custom images and video! 🎉
