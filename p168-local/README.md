# Campus Food Finder - Milestone 2 Update

This project is a React-based web application for discovering campus food options.

## What We Changed
- **New Favorites Page:** Added a dedicated `FavoritesPage.jsx` where users can view all the restaurants they have saved.
- **Added ReviewItem Component:** Extracted the review layout into a reusable `ReviewItem.jsx` component.
- **Updated Navigation:** Modified the global `SiteNav.jsx` to include a functional link to the new Favorites page.
- **Routing Update:** Added the new `/favorites` route within `App.jsx` using `react-router-dom`.
- **Reached Milestone Component Goal:** The application now has 8 distinct, custom components meaningfully used to manage UI layout, routing, and interactive displays (`HomePage.jsx`, `RestaurantPage.jsx`, `FavoritesPage.jsx`, `AppLayout.jsx`, `AppFooter.jsx`, `RestaurantCard.jsx`, `SiteNav.jsx`, `ReviewItem.jsx`).

---

## How We Met the Milestone 2 Requirements
- **Committed and Pushed to GitHub:** Handled locally and synced securely with the GitHub repository.
- **Live on GitHub.io:** Project is built via Vite and deployed live through GitHub Pages.
- **React Bootstrap Integration:** We use React-Bootstrap thoroughly for `Navbar`, interactive forms, inputs, Buttons, and Layout grids (`Container`, `Row`, `Col`).
- **Primary Navigation Bar:** Maintained and enhanced a sticky top-bar with active navigation linking using React Router.
- **At Least 3 Pages:** The site now has 3 fully developed pages: Home Page, Restaurant Details Page, and the Favorites Page.
- **At Least 8 Components:** Developed and integrated exactly 8 structural and UI React components.
- **Meaningfully Interactable Portion Begun:** Users can interact to filter lists, save places to their favorites via LocalStorage, and submit custom reviews that dynamically populate the page without refreshing.

---

## How to View and Run

**View Live Online:**
[https://cs571-s26.github.io/p168/](https://cs571-s26.github.io/p168/)

**Run Locally for Development:**
1. Open up a terminal in this directory (`p168-local`).
2. Run `npm install` (if you haven't yet).
3. Run `npm run dev`.
4. Open the `localhost` URL that appears in your browser.
