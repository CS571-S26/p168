# Campus Food Finder - Final Submission

This project is a React-based web application for discovering campus food options.

## What We Changed for the Final Checkpoint
- **New Pages:** Added an `AboutPage.jsx` and a `NotFoundPage.jsx` (404), bringing the total to 5 fully developed pages.
- **Component Refactoring:** Extracted the `SearchBar.jsx`, `FilterDropdown.jsx`, and `StarRating.jsx` into standalone reusable components to improve maintainability and reach the 12+ component requirement. Added `ToastNotification.jsx` for global alerts (15 total components).
- **Presentation Enhancements:** Added a "Surprise Me!" random restaurant picker, a dynamic Sorting dropdown (A-Z, Price), and a Global Toast Notification system to make the app highly engaging for the presentation video.
- **Design Enhancements:** Improved the visual hierarchy and separation of content by tweaking the global background color and increasing the box-shadows on cards to make them pop more.
- **Accessibility Fixes:** 
  - Restructured heading hierarchies across all pages to ensure no skipped heading levels (e.g. `h1` followed by `h2`).
  - Added descriptive `alt` text to all `RestaurantCard` images.
  - Provided `aria-label`s to interactable buttons (like the favorite heart toggle and star rating buttons).
  - Ensured all forms and input elements are properly associated with `<label>` tags or `aria-label`s.
  - Verified color contrast meets WCAG AA standards.
  - Maintained keyboard navigability and interactability across all inputs and interactive components.

---

## How We Met the Final Requirements
- **Committed and Pushed to GitHub:** All changes are tracked locally and pushed to the main repository.
- **Live on GitHub.io:** Project is built via Vite and deployed live through GitHub Pages using the `docs` folder.
- **React Bootstrap Integration:** We use React-Bootstrap thoroughly for `Navbar`, interactive forms, inputs, Buttons, and Layout grids (`Container`, `Row`, `Col`).
- **Primary Navigation Bar:** Maintained and enhanced a sticky top-bar with active navigation linking using React Router. Includes links to Home, Favorites, and About.
- **At Least 3 Pages:** The site now has 5 fully developed pages: Home Page, Restaurant Details Page, Favorites Page, About Page, and a 404 Not Found Page.
- **At Least 12 Components:** Developed and integrated exactly 15 structural and UI React components (`App`, `AppLayout`, `SiteNav`, `AppFooter`, `HomePage`, `RestaurantPage`, `FavoritesPage`, `AboutPage`, `NotFoundPage`, `RestaurantCard`, `ReviewItem`, `SearchBar`, `FilterDropdown`, `StarRating`, `ToastNotification`).
- **Meaningfully Interactable Portion:** Users can interact to search, filter, and sort lists, trigger a randomizer, save places to their favorites via LocalStorage, submit custom reviews, and receive responsive global toast notifications.
- **Thoughtful Design Principles:** Utilizes CSS variables, consistent color theming, hover micro-animations, and adequate spacing for a clean, modern look.
- **Accessible:** No skipped heading levels, appropriate alt text on images, sufficient color contrast, properly labeled inputs, and forms are fully completable via keyboard.

---

## How to View and Run

**View Live Online:**
[https://cs571-s26.github.io/p168/](https://cs571-s26.github.io/p168/)

**Run Locally for Development:**
1. Open up a terminal in this directory (`p168-local`).
2. Run `npm install` (if you haven't yet).
3. Run `npm run dev`.
4. Open the `localhost` URL that appears in your browser.
