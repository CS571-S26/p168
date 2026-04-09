import { useState } from 'react';
import { Form, Button, Card, Row, Col, Badge, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants.js';
import { useAppContext } from '../context/AppProvider.jsx';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const { favorites, toggleFavorite } = useAppContext();

  // Get unique food types for the filter
  const foodTypes = ['All', ...new Set(restaurants.map(r => r.type))];

  // Filter restaurants
  const filteredRestaurants = restaurants.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || r.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="py-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3" style={{ color: '#ff6b6b' }}>Campus Food Finder</h1>
        <p className="lead text-muted">Discover the best places to eat around campus.</p>
      </div>

      <Row className="mb-4 g-3 justify-content-center">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text className="bg-white"><i className="bi bi-search">🔍</i></InputGroup.Text>
            <Form.Control
              placeholder="Search by restaurant name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-start-0 ps-0"
              style={{ boxShadow: 'none' }}
            />
          </InputGroup>
        </Col>
        <Col md={4} sm={6}>
          <Form.Select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{ boxShadow: 'none' }}
          >
            {foodTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center mt-5 text-muted">
          <h4>No restaurants found</h4>
          <p>Try adjusting your search or filters.</p>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredRestaurants.map(restaurant => {
            const isFav = favorites.includes(restaurant.id);
            return (
              <Col key={restaurant.id}>
                <Card className="h-100 shadow-sm border-0 food-card">
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={restaurant.image} 
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                    <Button 
                      variant={isFav ? "danger" : "light"} 
                      className="rounded-circle shadow"
                      style={{ position: 'absolute', top: '10px', right: '10px', width: '40px', height: '40px', padding: 0 }}
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
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}
