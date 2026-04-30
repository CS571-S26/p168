import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState({});
  const [toastConfig, setToastConfig] = useState({ show: false, message: '', variant: 'success' });

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

  const showToastMessage = (message, variant = 'success') => {
    setToastConfig({ show: true, message, variant });
  };

  const hideToast = () => setToastConfig(prev => ({ ...prev, show: false }));

  const toggleFavorite = (restId, restName = 'Restaurant') => {
    setFavorites(prev => {
      if (prev.includes(restId)) {
        showToastMessage(`Removed ${restName} from favorites!`, 'warning');
        return prev.filter(id => id !== restId);
      } else {
        showToastMessage(`Added ${restName} to favorites!`, 'success');
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
    showToastMessage('Review submitted successfully!', 'primary');
  };

  return (
    <AppContext.Provider value={{ 
      favorites, toggleFavorite, 
      reviews, addReview, 
      toastConfig, hideToast 
    }}>
      {children}
    </AppContext.Provider>
  );
}
