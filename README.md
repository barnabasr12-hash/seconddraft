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

## Premium design refresh

- Added `assets/images/favicon.svg` and linked it in all pages so the tab shows the church emblem.
- Replaced the earlier logo with a more refined primary emblem in `assets/images/church-logo-premium.svg`.
- Simplified the header structure so the church name is prominently shown once in the top branding area and no longer repeated in a cluttered way in the navigation bar.
- Refined spacing, typography, card styling and section rhythm to create a cleaner and more premium look.
- Tightened the mobile layout so the branding, menu and content remain easy to read without feeling crowded.

## V7 custom logo update

- Replaced the generated logo with the user-supplied CSI Shanthi Church logo (`assets/images/church-logo-custom.png`).
- Added a favicon derived from the emblem area of the same logo (`assets/images/favicon-custom.png`) so the browser tab shows the church mark.
- Simplified the top branding area to feature the church logo cleanly, without repeating the full title in a cluttered way.
- Kept the navigation cleaner and lighter for better desktop and mobile readability.

## V8 luxury polish
- Refined typography, spacing and hierarchy across all pages.
- Added a more elegant navy / green / gold visual balance.
- Improved hero overlays, buttons, cards, offerings, leadership archive and footer styling.
- Reduced visual density on mobile for easier reading.
- Preserved the custom logo, favicon, 90-passage bilingual Bible feature, leadership search and all existing content.

## V9 wording refinement
- Humanized website copy so it reads more naturally and less like generated or technical text.
- Removed references to source filenames/materials from visitor-facing pages.
- Replaced the homepage address stat with Holy Communion timings.

## V10 header / hero refinement
- Removed the oversized top logo banner.
- Moved the navigation bar to the very top of the page.
- Kept the church emblem subtly in the navigation and as a faint homepage hero watermark.
- Changed the homepage heading to prominently show “CSI Shanthi Church:” followed by “A place of peace. A family of faith.”
- Further reduced mobile clutter.
