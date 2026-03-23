# Sharma Ayurvedic Store

## Current State
New project. No existing application files.

## Requested Changes (Diff)

### Add
- Full single-page production website for Sharma Ayurvedic Store
- SEO meta tags, Open Graph tags, LocalBusiness JSON-LD schema
- Sticky glassmorphism header with top contact bar, logo, nav links, hamburger menu
- Hero section with Vanta.js Birds animation (Three.js r134 + Vanta CDN)
- Treatments grid: Nadi Pariksha, Panchakarma, Herbal Therapy (hover lift + shadow)
- About/Trust section: split layout with image placeholder and bio for Vaidya Pankaj Sharma
- Booking & Contact form: Name, Phone, Service dropdown, Date; success message on submit
- Google Maps iframe placeholder for clinic location
- Floating WhatsApp button (fixed bottom-right) linking to wa.me/919414283196
- Semantic HTML with ARIA labels and accessibility throughout

### Modify
- index.html: inject Three.js r134 CDN and Vanta.js Birds CDN scripts in <head>

### Remove
- Nothing

## Implementation Plan
1. Minimal Motoko backend (actor stub)
2. Update index.html with CDN scripts for Three.js and Vanta.js, plus SEO meta/OG/JSON-LD
3. Build React frontend with all 7 sections using Tailwind custom colors
4. Load Crimson Text + Open Sans via Google Fonts
5. Wire Vanta.js Birds in Hero component via useEffect
6. Implement hamburger menu state, smooth-scroll nav, sticky header with blur on scroll
7. Booking form with local state, success message, form reset
8. Floating WhatsApp button component
