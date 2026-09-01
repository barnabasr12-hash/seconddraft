# CSI Shanthi Church — Multi-page GitHub Pages Website

## Main pages
- `index.html` — Home
- `about.html` — Our Story
- `ministries.html` — Ministries
- `leadership.html` — searchable Bishops & Pastors historical archive
- `connect.html` — YouTube, Offerings, Contact / Visit

## Assets
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/js/leadership.js`
- `assets/images/church-exterior.png`
- `assets/images/altar-enhanced.png`
- `assets/images/offerings-qr.png`

## GitHub Pages
Upload the full contents of this folder to your repository root. Keep the folder structure intact.

## Historical data note
The bishops/pastors archive is based on the church history document supplied for the 2019 souvenir. Where the source has incomplete dates, the site explicitly says that dates are not specified rather than guessing.

## YouTube
The Connect page currently highlights the service thumbnail previously selected for the site and links to the official channel.

## Branding and daily passage update
- Added `assets/images/church-logo.svg`: cross + dove + olive branches, representing Christ and peace ("Shanthi").
- Added a large church-name masthead across every page.
- Added an automatically changing Daily Bible Passage to the Home page.
- Daily passages use a curated set of KJV/public-domain Scripture and require no API or backend.

## Daily Bible Passage update
- The home-page feature is now explicitly a **Bible Passage for the Day**, not a single verse.
- The daily rotation now uses longer multi-verse readings, usually 3–8 verses.
- The passages remain KJV/public-domain and work without an external API.

## Bilingual daily Bible passage
- Added English / ಕನ್ನಡ language toggle.
- English uses the existing KJV-based passage text.
- Kannada is a direct rendered translation of the same English passage text for website display.
- The site remembers the visitor's language choice in the browser.

## Official Kannada Scripture + 90-passage rotation

- The daily rotation now contains exactly 90 curated Bible passage references.
- English text is requested from the KJV module.
- Kannada text is requested from the published Kannada IRV module (`kn_irv`) through Bible SuperSearch.
- The Bible SuperSearch API documents cross-domain usage and a free 1,000-hit/day limit.
- The website requests English and Kannada together in one call and caches that day's result in each visitor's browser.
- Kannada Scripture copyright/source attribution is displayed below the passage as required by CC BY-SA 4.0.
- If the external Bible service is unavailable, the website shows a friendly message instead of inventing Scripture text.
