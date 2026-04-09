import { useState } from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';
import { restaurants } from '../data/restaurants.js';
import RestaurantCard from '../shared/RestaurantCard.jsx';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

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
          {filteredRestaurants.map(restaurant => (
            <Col key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
