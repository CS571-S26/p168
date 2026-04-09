# Campus Food Finder
Built for CS571 Web Project.

## What changed from the original template
We transformed the placeholder template into a fully working Campus Food Finder prototype:
- **Cleaned up code**: Deleted the old template pages (`AboutPage`, `NotFoundPage`, etc.) and cleaned up the navigation structure.
- **Added Data**: Created dummy data in `src/data/restaurants.js` to simulate restaurants.
- **Home Page (Search & Filter)**: Built a new `HomePage.jsx` that shows all restaurants. Added a search bar to find by name/location and a filter to sort by food type.
- **Restaurant Details Page**: Built a new `RestaurantPage.jsx` showing details, comments, and ratings.
- **Favorites & Reviews System**: Added React Context in `src/context/AppProvider.jsx` that saves your "Favorites" list and "Reviews" locally in the browser so they persist when you refresh.
- **Design & Styling**: Updated `index.css` and added nice hover animations for a stunning, clean look!

## How to view the website locally
1. Ensure you have Node.js installed.
2. In the `p168-local` folder, run `npm install`.
3. Then run `npm run dev`.
4. Open the localhost URL in your browser.

## How to view on GitHub Pages
This project is already pre-configured to build to the `/docs` folder for GitHub Pages. You can view the live site at: https://cs571-s26.github.io/p168/
If you make changes, run `npm run build:docs` to update the GitHub Pages deployment.
