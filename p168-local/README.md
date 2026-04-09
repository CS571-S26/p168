# Campus Food Finder

This project is a React-based web application built for the **CS571 Web Project Proposal**. It transforms a basic placeholder template into a fully functioning, interactive restaurant discovery tool for students.

## What We Changed
- **Removed Old Template Junk:** We deleted all the generic placeholder pages (`AboutPage`, `NotFoundPage`, etc.) to clean up the code.
- **Added Restaurant Data:** Created a file (`src/data/restaurants.js`) containing a list of customized, dummy dining locations around campus with their types, prices, and descriptions.
- **Created the "Campus Food Finder" Interface:** Completely redesigned the `HomePage.jsx` to feature a beautiful, clean grid layout using card components and micro-animations instead of basic text.
- **Added a Details System:** Created an entirely new page (`RestaurantPage.jsx`) where users can click into a restaurant and read more about it.
- **Built an Interactive Favorites & Reviews System:** Hooked up a system (using React Context) so that you can favorite a restaurant and leave a 1-to-5 star text review. Your changes automatically save to your browser!

---

## How We Met the Proposal Requirements 
- **Search feature:** You can type text directly into the main search bar to find restaurants by their name or street location.
- **Filter feature:** The dropdown menu allows you to click and filter restaurants exclusively by their food category (Pizza, Asian, Fast Food, etc).
- **Basic Info Display:** All restaurant cards prominently display the Name, Location, Price Range, and Food Type. 
- **Detail Pages:** Every restaurant has its own detailed view that provides a high-quality picture and a paragraph description.
- **Interactive Feature 1 (Favorites):** You can click the "heart" button on any restaurant to save it to your local favorites.
- **Interactive Feature 2 (Comments/Ratings):** You can click the "stars" and type a comment inside the "Leave a Review" box to record your thoughts underneath a restaurant.

---

## How We Met the Code Requirements
- **Committed and Pushed to GitHub:** All logic was synced securely with the GitHub repository.
- **Live on GitHub Pages:** The project was built and deployed, and is live right now at your project URL (using GitHub Pages via the `/docs` folder).
- **Use of React Bootstrap:** We built the layout extensively using React-Bootstrap components like `Navbar`, `Container`, `Card`, `Badge`, and `Button`.
- **Primary Navigation Bar:** The site has a functional top-pinned dark navigation bar acting as the main anchor on all pages.
- **React Router (2+ Pages):** We used `react-router-dom` to let users navigate seamlessly between the `Home Page` and the intricate `Restaurant Details Page`.
- **At Least 5 Components Meaningfully Used:** We created and linked **7 unique components**:
  1. `HomePage.jsx` (List & Search logic)
  2. `RestaurantPage.jsx` (Detail & Comment logic)
  3. `RestaurantCard.jsx` (Extractable, reusable card structure used in loops)
  4. `SiteNav.jsx` (Global Navigation Bar)
  5. `AppFooter.jsx` (Global Footer text)
  6. `AppLayout.jsx` (The UI structure holding the router outlets together)
  7. `AppProvider.jsx` (The logical system providing Favorite & Review data locally)

---

## How to View and Run
**View Live Online:**
[https://cs571-s26.github.io/p168/](https://cs571-s26.github.io/p168/)

**Run Locally for Development:**
1. Open up a terminal in this directory (`p168-local`).
2. Run `npm install` (if you haven't yet).
3. Run `npm run dev`.
4. Open the `localhost` URL that appears in your browser.
