import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState({});

  // Load from local storage initially
  useEffect(() => {
    const savedFavorites = localStorage.getItem('cff-favorites');
    const savedReviews = localStorage.getItem('cff-reviews');
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedReviews) setReviews(JSON.parse(savedReviews));
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('cff-favorites', JSON.stringify(favorites));
    localStorage.setItem('cff-reviews', JSON.stringify(reviews));
  }, [favorites, reviews]);

  const toggleFavorite = (restId) => {
    setFavorites(prev => {
      if (prev.includes(restId)) {
        return prev.filter(id => id !== restId);
      } else {
        return [...prev, restId];
      }
    });
  };

  const addReview = (restId, review) => {
    setReviews(prev => {
      const restReviews = prev[restId] || [];
      return {
        ...prev,
        [restId]: [...restReviews, { ...review, id: Date.now() }]
      };
    });
  };

  return (
    <AppContext.Provider value={{ favorites, toggleFavorite, reviews, addReview }}>
      {children}
    </AppContext.Provider>
  );
}
