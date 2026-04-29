import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider.jsx';

export default function RestaurantCard({ restaurant }) {
  const { favorites, toggleFavorite } = useAppContext();
  const isFav = favorites.includes(restaurant.id);

  return (
    <Card className="h-100 shadow-sm border-0 food-card">
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={restaurant.image} 
          alt={restaurant.name}
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
        <Button 
          variant={isFav ? "danger" : "light"} 
          className="rounded-circle shadow"
          style={{ position: 'absolute', top: '10px', right: '10px', width: '40px', height: '40px', padding: 0 }}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(restaurant.id);
          }}
        >
          {isFav ? '♥' : '♡'}
        </Button>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="fw-bold mb-0">{restaurant.name}</Card.Title>
          <Badge bg="success" className="fs-6">{restaurant.priceRange}</Badge>
        </div>
        <Card.Subtitle className="mb-2 text-muted">
          📍 {restaurant.location}
        </Card.Subtitle>
        <div className="mb-3">
          <Badge bg="secondary">{restaurant.type}</Badge>
        </div>
        <Card.Text className="text-secondary flex-grow-1" style={{ fontSize: '0.9rem' }}>
          {restaurant.description.substring(0, 80)}...
        </Card.Text>
        <Button 
          as={Link} 
          to={`/restaurant/${restaurant.id}`} 
          variant="outline-primary" 
          className="w-100 fw-bold mt-auto"
          style={{ borderRadius: '8px' }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
