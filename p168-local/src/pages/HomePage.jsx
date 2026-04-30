import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '../data/restaurants.js';
import RestaurantCard from '../shared/RestaurantCard.jsx';
import SearchBar from '../shared/SearchBar.jsx';
import FilterDropdown from '../shared/FilterDropdown.jsx';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('Default');

  // Get unique food types for the filter
  const foodTypes = ['All', ...new Set(restaurants.map(r => r.type))];

  // Filter restaurants
  let filteredRestaurants = restaurants.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || r.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Sort restaurants
  if (sortBy === 'Name (A-Z)') {
    filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'Name (Z-A)') {
    filteredRestaurants.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'Price (Low to High)') {
    filteredRestaurants.sort((a, b) => a.priceRange.length - b.priceRange.length);
  }

  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRest = restaurants[randomIndex];
    navigate(`/restaurant/${randomRest.id}`);
  };

  return (
    <div className="py-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3" style={{ color: '#ff6b6b' }}>Campus Food Finder</h1>
        <p className="lead text-muted">Discover the best places to eat around campus.</p>
      </div>

      <Row className="mb-4 g-3 justify-content-center">
        <Col md={12} className="text-center mb-2">
          <Button variant="outline-primary" className="fw-bold rounded-pill px-4 py-2 shadow-sm" onClick={pickRandom}>
            🎲 Surprise Me!
          </Button>
        </Col>
        <Col md={5}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Col>
        <Col md={3} sm={6}>
          <FilterDropdown selectedType={selectedType} setSelectedType={setSelectedType} foodTypes={foodTypes} />
        </Col>
        <Col md={3} sm={6}>
          <Form.Select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ boxShadow: 'none' }}
            aria-label="Sort restaurants"
          >
            <option value="Default">Sort By: Default</option>
            <option value="Name (A-Z)">Name (A-Z)</option>
            <option value="Name (Z-A)">Name (Z-A)</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
          </Form.Select>
        </Col>
      </Row>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center mt-5 text-muted">
          <h2>No restaurants found</h2>
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
