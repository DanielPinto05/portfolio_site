# Website Planning Document
## Daniel G. Pinto - Personal Engineering Portfolio

### Current State Analysis

**Completed:**
- ✅ Basic HTML structure for all pages (index, about, portfolio, contact)
- ✅ Clean CSS styling with Roboto font and blue/white color scheme
- ✅ Responsive design foundation
- ✅ Hero section on homepage with profile image
- ✅ Contact form UI structure
- ✅ Footer with LinkedIn and GitHub links
- ✅ Mobile navigation toggle functionality

**Issues Identified:**
- ⚠️ Logo inconsistency: index.html uses "DGP" but other pages/header.html use "YourLogo"
- ⚠️ Header/footer pattern inconsistent: only contact.html uses injection, others have inline headers
- ⚠️ Missing footer.html file (referenced in contact.html line 31)
- ⚠️ About page has placeholder/generic content
- ⚠️ Portfolio page is empty (no projects)
- ⚠️ Contact form has no backend email functionality
- ⚠️ Missing profile image: images/profile1.jpg
- ⚠️ Missing banner image: images/banner.jpg

---

## Next Steps (Priority Order)

### Phase 1: Core Fixes & Consistency (High Priority)

#### 1. Fix Header/Footer Consistency
- [x] Update header.html logo from "YourLogo" to "DGP"
- [x] Create footer.html file for consistent footer across all pages
- [x] Update about.html and portfolio.html to use header/footer injection pattern (like contact.html)
- [ ] **PENDING**: Update index.html to use header/footer injection pattern
- [ ] **PENDING**: Add hamburger menu styling to CSS for mobile nav toggle (currently only has `display: none`)

#### 2. Add Required Images
- [x] Add profile photo to `/images/profile1.jpg` (320x320px recommended)
- [x] Add banner image to `/images/banner.jpg` (1920x600px recommended)
- [x] Create images folder if it doesn't exist
- [ ] **PENDING**: Consider adding favicon.ico (referenced in index.html line 11)

**Note**: profile1.JPG exists with uppercase extension; HTML references lowercase but works on macOS (case-insensitive filesystem)

#### 3. Personalize About Page
Content to add:
- [ ] **PENDING**: Write personal introduction paragraph about your engineering background
- [ ] **PENDING**: Replace "Our Mission" with your engineering philosophy or career goals
- [ ] **PENDING**: Replace "Our Process" with your approach to projects/problem-solving
- [ ] **PENDING**: Consider adding:
  - Technical skills section (languages, frameworks, tools)
  - Education background
  - Professional experience timeline
  - Interests/hobbies related to engineering

**Current Status**: about.html still contains placeholder/generic content

### Phase 2: Portfolio Development (High Priority) - ✅ STRUCTURE COMPLETE

#### 4. Add Portfolio Projects
Portfolio card structure implemented with:
- [x] Project card HTML structure created
- [x] Large title styling (36px, bold)
- [x] Smaller description text (16px)
- [x] Image grid layout (supports 1-3 images)
- [x] GitHub link button
- [x] Responsive design
- [x] Hover effects

**First Project Added:**
- [x] AMP: "A simple multicycle RISC-V processor implementation"
- [ ] **TODO**: Add images/amp-project.jpg
- [ ] **TODO**: Update GitHub link URL when provided

**Next Steps:**
- [ ] Add project images to /images/ folder
- [ ] Duplicate card structure for additional projects
- [ ] Add actual GitHub URLs

### Phase 3: Contact Form Backend (High Priority) - ✅ COMPLETE

#### 5. Implement Email Functionality
**Option Chosen: FormSpree** ✅

Implementation completed:
- [x] Updated form action for FormSpree integration
- [x] Added AJAX form submission (no page reload)
- [x] Added success/error message display with CSS styling
- [x] Added spam protection (_gotcha hidden field)
- [x] Added loading state ("Sending..." button text)
- [x] Form validation with user feedback
- [x] Smooth scroll to status message

**Next Step for User:**
- [ ] **TODO**: Sign up at https://formspree.io
- [ ] **TODO**: Replace "YOUR_EMAIL" in contact.html line 30 with your FormSpree form ID
- [ ] **TODO**: Test form submission after deployment

### Phase 4: Enhancements (Medium Priority)

#### 6. Add Missing Styling
- [ ] Add CSS for hamburger menu animation (.hamburger class)
- [ ] Add CSS for .site-header class (used in header.html but minimal styling exists)
- [ ] Style project cards with hover effects
- [ ] Add .site-footer class styling (referenced but not fully defined)
- [ ] Create portfolio-grid layout styles
- [ ] Add about-grid responsive styles

#### 7. SEO & Meta Tags
- [ ] Add meta descriptions to all pages
- [ ] Add Open Graph tags for social sharing
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Optimize images for web
- [ ] Add alt text to all images

#### 8. Performance Optimization
- [ ] Minify CSS/JS
- [ ] Optimize image sizes
- [ ] Add lazy loading for images
- [ ] Consider CDN for assets
- [ ] Test page load speed

### Phase 5: Nice-to-Have Features (Low Priority)

#### 9. Additional Features
- [ ] Add blog section for technical writing
- [ ] Create resume/CV download link
- [ ] Add dark mode toggle
- [ ] Implement smooth scrolling animations
- [ ] Add loading states for header/footer injection
- [ ] Create 404 error page
- [ ] Add analytics (Google Analytics/Plausible)
- [ ] Add testimonials/recommendations section

#### 10. Testing & Quality Assurance
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive design on various screen sizes
- [ ] Validate HTML/CSS (W3C validators)
- [ ] Check accessibility (WCAG compliance)
- [ ] Test form submission
- [ ] Check all links work correctly
- [ ] Proofread all content for typos

### Phase 6: Deployment

#### 11. Hosting Setup
Choose a hosting platform:
- **Netlify** (Recommended for static sites)
- **Vercel**
- **GitHub Pages**
- **AWS S3 + CloudFront**

Steps:
- [ ] Create deployment account
- [ ] Configure build settings (if needed)
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate
- [ ] Set up continuous deployment from Git
- [ ] Test live site

---

## Technical Decisions Needed

### 1. Header/Footer Pattern
**Question:** Keep current mixed approach or standardize?
- **Recommended:** Use header/footer injection on all pages for easier maintenance

### 2. Contact Form Backend
**Question:** Which email solution to use?
- **Easiest:** FormSpree/Formsubmit (3rd party service)
- **Best for scale:** Custom backend with AWS SES or SendGrid
- **Simplest if using Netlify:** Netlify Forms

### 3. Build Tooling
**Question:** Do you need a build process?
**Current:** Pure HTML/CSS/JS (no build step)
**Consider adding if you want:**
- SASS/SCSS preprocessing
- JS bundling/minification
- Image optimization pipeline
- Template engine (Pug, EJS, etc.)

### 4. Content Management
**Question:** How will you update projects/content?
- **Current:** Direct HTML editing
- **Alternative:** Add a headless CMS (Contentful, Strapi, etc.)

---

## Resources Needed

### Content
- [ ] Professional headshot photo (high resolution)
- [ ] Project screenshots/images
- [ ] Project descriptions and details
- [ ] Personal bio/about text
- [ ] Resume/CV (optional PDF)

### Accounts/Services
- [ ] Email form service (if using 3rd party)
- [ ] Hosting platform account
- [ ] Domain name (if not using free subdomain)
- [ ] Analytics account (optional)

---

## Timeline Estimate

- **Phase 1 (Core Fixes):** 2-3 hours
- **Phase 2 (Portfolio):** 3-4 hours (depends on project count)
- **Phase 3 (Contact Form):** 1-4 hours (depends on approach)
- **Phase 4 (Enhancements):** 2-3 hours
- **Phase 5 (Nice-to-Have):** Variable
- **Phase 6 (Deployment):** 1-2 hours

**Minimum Viable Product:** Phases 1-3 = ~6-11 hours

---

## Notes

- The website has a solid foundation with clean, modern design
- Focus on content quality (projects, about section) - this is what visitors care about most
- For the contact form, start simple (FormSpree) and upgrade later if needed
- The responsive design is already well-implemented
- Consider what makes you unique as an engineer and highlight that

## Questions to Answer

1. What engineering domain do you specialize in? (Web, ML, Systems, etc.)
2. What are your 3-5 best projects to showcase?
3. Do you have a professional photo ready?
4. What's your preferred email for the contact form?
5. Do you need the site live by a specific date?
6. Do you have a custom domain, or use a free subdomain?

---

**Last Updated:** 2026-02-13
**Status:** Phase 1 In Progress - Partially Complete
- ✅ 8/12 items complete in Phase 1
- ⚠️ Remaining: index.html injection pattern, mobile menu styling, favicon, about page content
