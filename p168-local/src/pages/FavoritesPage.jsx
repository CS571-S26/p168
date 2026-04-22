import { Row, Col } from 'react-bootstrap';
import { restaurants } from '../data/restaurants.js';
import { useAppContext } from '../context/AppProvider.jsx';
import RestaurantCard from '../shared/RestaurantCard.jsx';

export default function FavoritesPage() {
  const { favorites } = useAppContext();

  const favoriteRestaurants = restaurants.filter((r) => favorites.includes(r.id));

  return (
    <div className="py-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3" style={{ color: '#ff6b6b' }}>Your Favorites</h1>
        <p className="lead text-muted">A collection of your top campus food destinations.</p>
      </div>

      {favoriteRestaurants.length === 0 ? (
        <div className="text-center mt-5 text-muted">
          <h4>No favorites yet</h4>
          <p>Go explore and save some restaurants to your favorites!</p>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {favoriteRestaurants.map((restaurant) => (
            <Col key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
