import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="restaurant/:id" element={<RestaurantPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App