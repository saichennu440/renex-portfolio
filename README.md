# Renex_Design Portfolio Website

A modern, production-ready portfolio website for web design business built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Mobile-first responsive design** - Optimized for all devices
- **SEO optimized** - Meta tags, structured data, sitemap ready
- **Performance optimized** - Lazy loading, optimized images, fast loading
- **Accessible** - WCAG 2.1 AA compliant with proper ARIA labels
- **Modern animations** - Smooth transitions and scroll animations
- **Contact form** - With validation and anti-spam protection
- **Portfolio showcase** - Modal case studies with project details
- **Testimonial slider** - Client reviews and ratings
- **Pricing tiers** - Clear service packages with features

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation and header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Services.tsx    # Services cards
│   ├── Portfolio.tsx   # Portfolio grid
│   ├── PortfolioModal.tsx # Project case studies
│   ├── About.tsx       # About section
│   ├── Testimonials.tsx # Client testimonials
│   ├── Pricing.tsx     # Pricing plans
│   ├── Contact.tsx     # Contact form
│   ├── ContactModal.tsx # Quick contact modal
│   └── Footer.tsx      # Footer with links
├── types.ts            # TypeScript interfaces
├── styles.css          # Custom CSS and variables
├── main.tsx           # App entry point
└── App.tsx            # Main app component
```

## 🎨 Customization

### Brand Colors
Update colors in `src/styles.css`:

```css
:root {
  --color-primary: #14B8A6;        /* Main accent color (Teal) */
  --color-primary-dark: #0F766E;   /* Darker shade for hovers */
  --color-primary-light: #5EEAD4;  /* Lighter shade for backgrounds */
}
```

**Alternative color schemes:**
- Electric Blue: `--color-primary: #3B82F6`
- Purple: `--color-primary: #8B5CF6`
- Orange: `--color-primary: #F97316`

### Logo Replacement
Replace the geometric logo placeholder in `src/components/Header.tsx` and `src/components/Footer.tsx`:

```tsx
{/* Replace this div with your logo image */}
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
  <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
</div>

{/* With your logo */}
<img src="/logo.png" alt="Renex_Design Logo" className="w-10 h-10 mr-3" />
```

### Contact Information
Update contact details in:
- `src/components/Contact.tsx` - Main contact form
- `src/components/Footer.tsx` - Footer links
- Update email: `hello@renex-design.com` → `your-email@domain.com`
- Update Instagram: `@renex_design` → `@your_handle`

### Content Updates

#### Portfolio Projects
Edit projects array in `src/components/Portfolio.tsx`:
- Replace placeholder images with your work
- Update project details, technologies, and outcomes
- Modify case study content in project objects

#### Services
Update services in `src/components/Services.tsx`:
- Modify service titles, descriptions, and benefits
- Replace Lucide React icons with your preferred icons

#### Testimonials
Replace testimonials in `src/components/Testimonials.tsx`:
- Add real client testimonials
- Update client names, companies, and photos
- Modify rating system if needed

#### Pricing
Update pricing tiers in `src/components/Pricing.tsx`:
- Adjust prices and features for each tier
- Modify package descriptions and inclusions

### Images
Replace placeholder images with your own:
- Hero section: Update hero image URL in `Hero.tsx`
- About section: Replace headshot in `About.tsx`
- Portfolio: Update project images in `Portfolio.tsx`
- Testimonials: Replace client photos in `Testimonials.tsx`

**Recommended image sources:**
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- Your own screenshots and client work

## 🔧 Form Integration

### Contact Form Setup
The contact form currently logs submissions to console. To connect it to your backend:

#### Option 1: EmailJS
```bash
npm install emailjs-com
```

Update `handleSubmit` in `Contact.tsx`:
```tsx
import emailjs from 'emailjs-com';

const handleSubmit = async (e: React.FormEvent) => {
  // ... validation code ...
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    setIsSubmitted(true);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
```

#### Option 2: Netlify Forms
Add `data-netlify="true"` to form tag and deploy to Netlify.

#### Option 3: Custom Backend
Replace the console.log with your API call:
```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 📱 WhatsApp Integration
Update WhatsApp links to your number:
```tsx
// In Contact.tsx, add WhatsApp link:
<a 
  href="https://wa.me/1234567890?text=Hi, I'm interested in web design services"
  className="text-primary hover:text-primary-dark"
>
  WhatsApp
</a>
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel
1. Connect repository
2. Framework preset: Vite
3. Deploy!

### Custom Domain Setup
1. Purchase domain from your preferred registrar
2. Update DNS settings to point to your hosting provider
3. Configure SSL certificate (usually automatic)

## 🔍 SEO Optimization

### Update Meta Tags
Edit meta tags in `index.html`:
- Title: Update page title
- Description: Write compelling meta description
- Keywords: Add relevant keywords (optional)
- Open Graph: Update OG image and descriptions

### Structured Data
Update the JSON-LD structured data in `index.html`:
- Business name and description
- Service area and contact info
- Services offered

### Performance
- Images are lazy-loaded by default
- Critical CSS is inlined
- Fonts are preloaded
- Components are code-split

## 📊 Analytics

### Google Analytics
Add to `index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Content Management

For easy content updates without coding:
1. **Projects**: Edit the `projects` array in `Portfolio.tsx`
2. **Services**: Update the `services` array in `Services.tsx`
3. **Testimonials**: Modify testimonials in `Testimonials.tsx`
4. **Pricing**: Change pricing tiers in `Pricing.tsx`

## 🎯 Conversion Optimization

The website is designed for conversion with:
- Clear value propositions
- Multiple call-to-action buttons
- Social proof through testimonials
- Portfolio showcasing results
- Easy contact methods
- Mobile-optimized experience

## 📞 Support

For questions or customization help:
- Email: hello@renex-design.com
- Instagram: @renex_design

## 📄 License

This template is provided for Renex_Design. Customize and use for your business.

---

**Quick Start Checklist:**
- [ ] Update brand colors in `styles.css`
- [ ] Replace logo in Header and Footer
- [ ] Update contact information
- [ ] Add your portfolio projects
- [ ] Replace testimonials with real ones
- [ ] Update pricing and services
- [ ] Configure contact form
- [ ] Replace placeholder images
- [ ] Update SEO meta tags
- [ ] Deploy to hosting platform