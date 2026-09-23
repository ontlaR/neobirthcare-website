# Neo Birth Care Center - WEDE5020 Part 2

Live Site: https://your-username.github.io/Neo-Birth-Care-Center-Project/html/index.html

## Part 2 Updates

### 1. Working through Feedback - Changelog (REQUIRED)

#### Date: 24 Sep 2026 - Feedback Entry 1: Navigation Inconsistency
- **Issue from Part 1:** Navigation menu was different on contact.html vs other pages.
- **Fix:** Made header identical on all 5 pages (index, about, services, team, contact) and added active link highlighting.

#### Date: 24 Sep 2026 - Feedback Entry 2: Missing Alt Attributes
- **Issue from Part 1:** Hero image missing alt text for accessibility.
- **Fix:** Added descriptive alt attributes to ALL images. Example: alt="Mother and baby smiling at Neo Birth Care Center"

#### Date: 24 Sep 2026 - Feedback Entry 3: Broken Image Paths
- **Issue from Part 1:** Images not showing on GitHub Pages because path was css/style.css instead of ../css/style.css and images/ instead of ../images/
- **Fix:** Fixed all relative paths to use ../images/ and ../css/ because html files are inside /html folder while images and css are outside.

#### Date: 24 Sep 2026 - Feedback Entry 4: Missing Viewport Tag
- **Issue from Part 1:** Website not responsive on mobile - viewport meta tag was missing.
- **Fix:** Added <meta name="viewport" content="width=device-width, initial-scale=1.0"> to all pages.

### 2. CSS Styling (Part 2)

#### 2.1 External Stylesheet
- Created external css/style.css and linked to all 5 pages using <link rel="stylesheet" href="../css/style.css">

#### 2.2 Base Style + Reset
- Added CSS Reset * { margin:0; padding:0; box-sizing:border-box; }
- Defined :root variables for colors, base font 16px, body line-height 1.7

#### 2.3 Typography
- Font-family: Georgia for headings, Segoe UI for body
- Typography scale: h1 2.5rem, h2 2rem, h3 1.5rem, p 1rem
- line-height, font-weight, letter-spacing implemented

#### 2.4 Layout
- Header uses Flexbox: display:flex; justify-content:space-between; align-items:center
- Hero section uses Grid: display:grid; grid-template-columns:1fr 1fr;
- Services uses Grid: grid-template-columns:repeat(2, 1fr)

#### 2.5 Visual Styles
- Colors: --primary #e91e63 pink
- Pseudo-classes: nav a:hover, button:hover, card:hover, :focus, :active
- Box-shadow, border-radius, transitions

### 3. Responsive Design

#### 3.1 Breakpoints + Media Queries
- Tablet: @media (max-width: 768px) - changes grid to single column, header to column
- Mobile: @media (max-width: 480px) - 95% width, smaller fonts, centered nav
- Desktop default is 1024px+ with 2 columns

#### 3.2 Relative Units
- Used rem for fonts and padding, % for widths (width:90%, 100%), em for margins, vw for responsive images

#### 3.3 Responsive Images
- Implemented <picture> element with <source media="(max-width:768px)">
- Used srcset with 480w, 768w, 1200w and sizes attribute: sizes="(max-width:480px) 100vw, (max-width:768px) 90vw, 50vw"

#### 3.4 Testing
- Tested using Chrome DevTools > Device Toolbar (Ctrl+Shift+M) at 375px mobile, 768px tablet, 1024px desktop

### Screenshots (Add your screenshots here)
- Desktop 1024px: [Paste screenshot]
- Tablet 768px: [Paste screenshot]
- Mobile 375px: [Paste screenshot]

To take screenshots: Open site in Chrome > Press F12 > Click phone icon > Select dimensions > Screenshot

### References
- Images: Unsplash.com (mother and baby images, royalty free)
- W3Schools - CSS Flexbox, Grid, Media Queries
- MDN Web Docs - Responsive images srcset, sizes, picture
- Google Fonts - Typography

### How to Run
1. Download ZIP from GitHub
2. Extract
3. Open html/index.html in browser
