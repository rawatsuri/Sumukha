# Premier Turf Arena - Football Turf Website

A cutting-edge, SEO-optimized promotional website for a premium football turf facility. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Sections
- **Hero Section**: Full-screen immersive experience with animated headlines, video background, and parallax effects
- **About Section**: Interactive storytelling with animated statistics counters and feature showcases
- **Gallery**: Masonry grid with category filters and custom lightbox viewer
- **Features & Amenities**: 3D animated cards showcasing 12+ world-class amenities
- **Virtual Tour**: Interactive 360° hotspot tour with navigation
- **Testimonials**: Auto-playing carousel with customer reviews
- **Location & Contact**: Interactive Google Maps integration with contact forms

### Technical Highlights
- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Framer Motion** for smooth 60fps animations
- 📱 **Fully Responsive** design optimized for all devices
- 🔍 **SEO Optimized** with meta tags, schema markup, and semantic HTML
- ♿ **Accessibility** compliant with WCAG AA standards
- 🎯 **Performance** optimized with lazy loading and image optimization

### Animations & Effects
- Scroll-triggered reveal animations
- Parallax scrolling effects
- 3D card hover transforms
- Animated counters and statistics
- Smooth page transitions
- Floating elements and particle effects
- Interactive hotspots and tooltips

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with SEO metadata
├── page.tsx            # Main page composing all sections
├── globals.css         # Global styles and animations

components/
├── header.tsx          # Sticky navigation with mobile menu
├── hero-section.tsx    # Hero with animated headlines
├── about-section.tsx   # About with animated stats
├── gallery-section.tsx # Interactive image gallery
├── features-section.tsx # Animated feature cards
├── virtual-tour-section.tsx # 360° interactive tour
├── testimonials-section.tsx # Customer reviews carousel
├── location-section.tsx # Contact and map section
├── footer.tsx          # Site footer with links

components/ui/
├── button.tsx          # Reusable button component
├── dialog.tsx          # Modal dialog component

lib/
└── utils.ts            # Utility functions (cn helper)
```

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd football-turf-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The static files will be generated in the `dist` folder.

## 🎨 Customization

### Colors
The color scheme uses CSS custom properties in `globals.css`. Primary colors:
- **Turf Dark**: `#004D40`
- **Turf Primary**: `#1B5E20`
- **Turf Light**: `#2E7D32`
- **Gold Accent**: `#FFD700`

### Images
Replace placeholder images in each section component with your own:
- Update `galleryImages` array in `gallery-section.tsx`
- Update feature images in `about-section.tsx`
- Update virtual tour spots in `virtual-tour-section.tsx`

### Contact Information
Update contact details in `location-section.tsx`:
- Phone number
- Email address
- Address
- Social media links

### SEO
Update SEO metadata in `app/layout.tsx`:
- Title and description
- Keywords
- Open Graph tags
- Schema markup

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Optimization

- Images are optimized using Next.js Image component
- Lazy loading for below-the-fold content
- Code splitting by route
- CSS animations for GPU acceleration
- Intersection Observer for scroll animations

## 📄 License

This project is available for commercial use. Please customize the branding and content for your specific facility.

## 🤝 Support

For customization support or feature requests, please contact the development team.

---

**Built with ❤️ for football lovers everywhere**
