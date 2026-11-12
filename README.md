# Alfa Cleaning Systems — Official Website

> **Premium, Mobile-First Angular Website for Alfa Cleaning Systems**  
> Established in 2006 | Mumbai & Palghar, Maharashtra, India  
> Specialization: Turnkey Mechanized Water Storage Tank Cleaning, Disinfection & Maintenance Services  
> **Note:** Alfa Cleaning Systems is **strictly a specialized service provider**. It does not manufacture or trade equipment.

---

## 1. Project Overview

**Alfa Cleaning Systems** has been delivering specialized turnkey mechanized water tank cleaning, reservoir disinfection, and preventive maintenance across the Mumbai Metropolitan Region (MMR) and Maharashtra since 2006.

This web application has been built from the ground up as a high-performance, mobile-first, static Angular 18 application incorporating:
- **Verified Business Profile**: Official dual offices (Nallasopara West Head Office + Bhandup West Marketing Office), 2 partners/owners (**Padmakar Nimbalkar** & **Dinesh Satavase**), and official GSTIN (`27AAOFA7537Q2ZK`).
- **Primary WhatsApp Routing**: Direct quote requests routed to `+91 9821210247`.
- **Photo & Video Gallery**: User-provided authentic field photographs and on-site operation videos organized by category (Underground Sumps, Overhead Tanks, Open Wells, Plastic Tanks, Settling Tanks, Terrace & Floors, Videos) with clean titles and zero clutter.
- **108 Verified Esteemed Clients**: Complete roster of 108 real corporate, government, railway, banking, hospital, and residential society clients extracted from official documentation.
- **Scientific Mechanized Cleaning Protocol**: Documented 6-stage mechanized process eliminating hazardous traditional manual bucket cleaning.
- **Custom Company Logo**: Real logo integrated at `public/assets/images/logo/company-logo.png`.
- **Zero Backend / 100% Static Deployment**: Lightning-fast load times, zero server dependencies, and full SEO/Schema.org readiness.

---

## 2. Technology Stack & Architecture

- **Framework**: Angular 18 (Standalone Components, no legacy NgModules)
- **Language**: TypeScript 5.5
- **Styling**: SCSS with design tokens (Deep Navy `#0A1E3F`, Industrial Blue `#0284C7`, Water Cyan `#0EA5E9`)
- **Routing & Navigation**: Single-page smooth scrolling with intelligent fixed header and mobile drawer
- **Build Output**: Static HTML5/CSS3/JavaScript bundle deployable anywhere

### Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── config/
│   │   │   └── company.config.ts          # Centralized coordinates, 2 owners, phones, WhatsApp (9821210247)
│   │   ├── data/
│   │   │   ├── services.data.ts           # 10 verified water tank cleaning services with matching real photos
│   │   │   ├── clients.data.ts            # Complete 108 verified clients categorized by sector
│   │   │   ├── gallery.data.ts            # Categorized photos and on-site videos with concise titles
│   │   │   ├── process-stages.data.ts     # 6-Stage scientific protocol
│   │   │   ├── why-choose.data.ts         # 6 verified trust pillars & compliance benefits
│   │   │   ├── industries.data.ts         # 6 client sectors served (Societies, Corporates, etc.)
│   │   │   └── faqs.data.ts               # Frequently asked questions for clients
│   │   ├── models/
│   │   │   └── company.model.ts           # Strict TypeScript data models & interfaces
│   │   └── services/
│   │       └── whatsapp.service.ts        # Pre-filled WhatsApp quote & enquiry link generator (+91 9821210247)
│   ├── features/
│   │   ├── hero/                          # Dual-pathway hero (Housing Societies vs Commercial/Govt)
│   │   ├── about/                         # 18-year legacy, Mumbai & Palghar offices, 2 owners overview
│   │   ├── services/                      # Filterable services grid with matching authentic field photos
│   │   ├── process/                       # Mechanized procedure walkthrough & manual vs mechanized table
│   │   ├── clients/                       # 108 Esteemed clients showcase with marquee, search & sector filters
│   │   ├── industries/                    # Customer sectors (Housing Societies, Hospitals, PSUs, etc.)
│   │   ├── why-choose/                    # Trust signals, certified safe chemicals, mechanized tech
│   │   ├── gallery/                       # Photo & Video gallery with category filters & lightbox modal
│   │   ├── dual-cta/                      # High-converting dual CTA (Societies vs Large Infrastructure)
│   │   ├── faq/                           # Interactive accordion answering operational questions
│   │   └── contact/                       # Dual office coordinates, 2 owners' direct phones & quote form
│   └── shared/
│       └── components/
│           ├── header/                    # Sticky header with logo, navigation (Process, Photo Gallery) & CTA
│           ├── footer/                    # Comprehensive sitemap, 2 owners' phones, GSTIN, copyright
│           ├── floating-ctas/             # Pulsing WhatsApp button (+91 9821210247) & mobile-bottom action bar
│           └── icon/                      # Lightweight crisp SVG industrial icons (including video play icon)
public/
└── assets/
    ├── images/
    │   ├── logo/
    │   │   └── company-logo.png           # Company logo
    │   ├── about/
    │   │   └── about-operations.jpg       # High-resolution operations image for About section
    │   ├── services/                      # Scaled authentic field photos matched to each service
    │   └── real-photos/                   # Comprehensive library of authentic categorized photos
    └── videos/                            # Real on-site operation videos
```

---

## 3. Key Contact & Business Coordinates

- **Owners / Partners**:
  1. **Mr. Dinesh Satavase** (Operations & Managing Partner)  
     - Primary WhatsApp & Direct Phone: `+91 9821210247`
     - Alternate Phone: `+91 7506267666`
  2. **Mr. Padmakar Nimbalkar** (Founding Partner)  
     - Direct Phone: `+91 9821620247`
     - Alternate Phone: `+91 9833590247`
- **Head Office**: `E-105, Olive Apt., Shriprastha Road, Nallasopara (West), Tal. Vasai, Dist. Palghar - 401203`
- **Marketing/Operations Office**: `604/B, Shramik Building, Sai Vihar Corner, T.P. Road, Ashok Kedare Chowk, Bhandup (West), Mumbai - 400078`
- **GSTIN**: `27AAOFA7537Q2ZK`

---

## 4. How to Run Locally

### Prerequisites
- Node.js (v18.x or v20.x)
- npm (v9.x or v10.x)

### Commands
```bash
# 1. Install dependencies (if setting up on a fresh machine)
npm install

# 2. Run local development server
npm start
```
Open your browser and navigate to: `http://localhost:4200/`

---

## 5. How to Build & Deploy (100% Static)

### Building for Production
```bash
npm run build
```
This produces an optimized static distribution in:
`dist/alfa-cleaning-app/browser/`

### Deployment Options

#### Option A: Apache / cPanel / Shared Web Hosting
Upload all contents of `dist/alfa-cleaning-app/browser/` into your `public_html/` or domain document root. The included `.htaccess` file ensures smooth client-side routing.

#### Option B: Nginx
Point the `root` directive to `dist/alfa-cleaning-app/browser`:
```nginx
server {
    listen 80;
    server_name alfacleaningsystems.in www.alfacleaningsystems.in;
    root /var/www/alfacleaningsystems/dist/alfa-cleaning-app/browser;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(jpg|jpeg|png|gif|svg|ico|css|js|mp4)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

#### Option C: Netlify / Vercel
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/alfa-cleaning-app/browser`

#### Option D: GitHub Pages / AWS S3 + CloudFront
Upload the contents of `dist/alfa-cleaning-app/browser` directly to the S3 bucket or GitHub Pages repository.
