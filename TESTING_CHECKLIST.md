# SEO Implementation Testing Checklist

## 🧪 Local Testing (Before Production Push)

Your dev server is running on: **http://localhost:5174/**

---

## ✅ Phase 1: URL Structure Testing

### Test 1.1: Root Redirect
- [ ] Navigate to `http://localhost:5174/`
- **Expected:** Automatically redirects to `http://localhost:5174/en/`
- **Status:** ___________

### Test 1.2: Legacy URL Redirects
- [ ] Navigate to `http://localhost:5174/acacia-gum`
- **Expected:** Redirects to `http://localhost:5174/en/acacia-gum`
- [ ] Navigate to `http://localhost:5174/construction`
- **Expected:** Redirects to `http://localhost:5174/en/construction`
- **Status:** ___________

### Test 1.3: Language Switching
- [ ] Go to `http://localhost:5174/en/acacia-gum`
- [ ] Click the "FR" button in the language switcher
- **Expected:** URL changes to `http://localhost:5174/fr/acacia-gum`
- [ ] Content displays in French
- [ ] Click "AR" button
- **Expected:** URL changes to `http://localhost:5174/ar/acacia-gum`
- [ ] Content displays in Arabic with RTL layout
- **Status:** ___________

### Test 1.4: Hard Refresh Persistence
- [ ] Navigate to `http://localhost:5174/fr/contact`
- [ ] Press Cmd+R (Mac) or Ctrl+R (Windows) to hard refresh
- **Expected:** Page stays in French, URL remains `/fr/contact`
- **Status:** ___________

### Test 1.5: Browser Navigation
- [ ] Navigate through several pages
- [ ] Click browser Back button
- **Expected:** Returns to previous language-specific URL
- [ ] Click browser Forward button
- **Expected:** Moves forward correctly
- **Status:** ___________

---

## ✅ Phase 2: Meta Tags Testing

### Test 2.1: View Page Source
- [ ] Go to `http://localhost:5174/en/`
- [ ] Right-click → "View Page Source" (or Ctrl+U / Cmd+Option+U)
- [ ] Search for these tags (Ctrl+F / Cmd+F):

**Canonical URL:**
```html
<link rel="canonical" href="https://sanimexsa.com/en/">
```
- [ ] Found? ___________

**Hreflang Tags:**
```html
<link rel="alternate" hreflang="en" href="https://sanimexsa.com/en/">
<link rel="alternate" hreflang="fr" href="https://sanimexsa.com/fr/">
<link rel="alternate" hreflang="ar" href="https://sanimexsa.com/ar/">
<link rel="alternate" hreflang="x-default" href="https://sanimexsa.com/en/">
```
- [ ] All 4 found? ___________

**Open Graph Tags:**
```html
<meta property="og:title" content="SANIMEX | Acacia Gum, Construction & Logistics in Chad">
<meta property="og:description" content="...">
<meta property="og:url" content="https://sanimexsa.com/en/">
<meta property="og:image" content="https://sanimexsa.com/og-home-en.jpg">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
```
- [ ] All found? ___________

**Twitter Cards:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```
- [ ] All found? ___________

### Test 2.2: French & Arabic Meta Tags
- [ ] Visit `http://localhost:5174/fr/`
- [ ] View source, check `og:locale` = "fr_FR"
- [ ] Visit `http://localhost:5174/ar/`
- [ ] View source, check `og:locale` = "ar_AR"
- **Status:** ___________

---

## ✅ Phase 3: Structured Data Testing

### Test 3.1: JSON-LD on Home Page
- [ ] Go to `http://localhost:5174/en/`
- [ ] View page source
- [ ] Search for `<script type="application/ld+json">`
- [ ] Should find 2 scripts:
  - [ ] Organization schema (contains "SANIMEX S.A")
  - [ ] LocalBusiness schema (contains geo coordinates)
- **Status:** ___________

### Test 3.2: Copy Schema for Validation
- [ ] Copy one of the JSON-LD scripts (everything between the script tags)
- [ ] Go to https://validator.schema.org/
- [ ] Paste the JSON
- [ ] Click "RUN TEST"
- **Expected:** "No errors found" ✅
- **Status:** ___________

### Test 3.3: Google Rich Results Test
- [ ] Go to https://search.google.com/test/rich-results
- [ ] Enter: `http://localhost:5174/en/`
- **Note:** This won't work for localhost, so we'll test after deployment
- **Status:** Skip for now (test after deployment)

---

## ✅ Phase 4: Navigation Testing

### Test 4.1: All Navigation Links Work
- [ ] Click each navbar link (Acacia Gum, Construction, Logistics)
- **Expected:** Each navigates to correct `/en/[page]` URL
- [ ] Switch to French
- [ ] Click navbar links again
- **Expected:** Navigate to `/fr/[page]` URLs
- **Status:** ___________

### Test 4.2: Footer Links Work
- [ ] Scroll to footer
- [ ] Click each sector link
- **Expected:** Maintains current language in URL
- **Status:** ___________

### Test 4.3: Home Link Works
- [ ] Click "SANIMEX S.A" logo in navbar
- **Expected:** Returns to `/[current-lang]/` (e.g., `/fr/` if in French)
- **Status:** ___________

---

## ✅ Phase 5: Browser Compatibility

### Test 5.1: Chrome/Edge
- [ ] Open in Chrome or Edge
- [ ] Test all URLs redirect correctly
- [ ] Language switcher works
- **Status:** ___________

### Test 5.2: Firefox
- [ ] Open in Firefox
- [ ] Test all URLs redirect correctly
- [ ] Language switcher works
- **Status:** ___________

### Test 5.3: Safari (if on Mac)
- [ ] Open in Safari
- [ ] Test all URLs redirect correctly
- [ ] Language switcher works
- **Status:** ___________

---

## ✅ Phase 6: Sitemap Verification

### Test 6.1: Check Sitemap File
- [ ] Open `public/sitemap.xml` in your code editor
- [ ] Verify it contains all 15 URLs (5 pages × 3 languages)
- [ ] Each URL should have hreflang alternates
- **Example:**
```xml
<url>
  <loc>https://sanimexsa.com/en/</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://sanimexsa.com/en/"/>
  <xhtml:link rel="alternate" hreflang="fr" href="https://sanimexsa.com/fr/"/>
  <xhtml:link rel="alternate" hreflang="ar" href="https://sanimexsa.com/ar/"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://sanimexsa.com/en/"/>
  <lastmod>2025-12-27</lastmod>
  <priority>1.0</priority>
</url>
```
- **Status:** ___________

---

## ✅ Phase 7: Console Errors Check

### Test 7.1: Browser Console
- [ ] Open browser DevTools (F12 or Cmd+Option+I)
- [ ] Go to Console tab
- [ ] Navigate through all pages
- **Expected:** No errors (warnings are okay)
- **Status:** ___________

### Test 7.2: Network Tab
- [ ] Open DevTools → Network tab
- [ ] Reload page
- [ ] Check for failed requests (red entries)
- **Expected:** All resources load successfully (200 status)
- **Status:** ___________

---

## 🚀 Ready for Production?

### All Tests Pass?
- [ ] All URL redirects work correctly
- [ ] All meta tags present in page source
- [ ] Structured data validates
- [ ] Navigation works in all languages
- [ ] No console errors
- [ ] Sitemap generated correctly

### Pre-Deployment Checklist
- [ ] Run `npm run generate:sitemap` (creates final sitemap)
- [ ] Commit all changes to git
- [ ] Push to GitHub
- [ ] Deploy to production
- [ ] Test on production URL
- [ ] Submit sitemap to Google Search Console

---

## 📝 Issues Found

Document any issues here:

1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________

---

## ✅ Post-Deployment Testing (After Production Push)

These tests can only be done after deploying to production:

### Test 1: Facebook Sharing Debugger
- [ ] Go to https://developers.facebook.com/tools/debug/
- [ ] Enter: `https://sanimexsa.com/en/`
- [ ] Click "Debug"
- **Expected:** Correct title, description, and image preview
- **Status:** ___________

### Test 2: Twitter Card Validator
- [ ] Go to https://cards-dev.twitter.com/validator
- [ ] Enter: `https://sanimexsa.com/en/`
- **Expected:** Correct Twitter card preview
- **Status:** ___________

### Test 3: Google Search Console
- [ ] Add property for `https://sanimexsa.com`
- [ ] Verify ownership
- [ ] Submit sitemap: `https://sanimexsa.com/sitemap.xml`
- [ ] Monitor coverage for all 15 pages
- **Status:** ___________

### Test 4: Google Rich Results Test
- [ ] Go to https://search.google.com/test/rich-results
- [ ] Enter: `https://sanimexsa.com/en/`
- **Expected:** Valid structured data, no errors
- **Status:** ___________

---

**Tested by:** ___________
**Date:** ___________
**Time:** ___________
**Pass/Fail:** ___________
