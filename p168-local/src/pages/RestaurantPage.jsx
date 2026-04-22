import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Form, Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { restaurants } from '../data/restaurants.js';
import { useAppContext } from '../context/AppProvider.jsx';
import ReviewItem from '../shared/ReviewItem.jsx';

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const { favorites, toggleFavorite, reviews, addReview } = useAppContext();
  
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  if (!restaurant) {
    return (
      <div className="text-center mt-5">
        <h2>Restaurant not found</h2>
        <Button as={Link} to="/" variant="primary" className="mt-3">Back to Home</Button>
      </div>
    );
  }

  const isFav = favorites.includes(restaurant.id);
  const restaurantReviews = reviews[restaurant.id] || [];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    addReview(restaurant.id, {
      rating,
      comment,
      date: new Date().toLocaleDateString()
    });
    setComment('');
    setRating(5);
  };

  return (
    <Container className="py-4 max-w-4xl mx-auto">
      <Button as={Link} to="/" variant="link" className="text-decoration-none text-secondary mb-3 p-0">
        ← Back to all restaurants
      </Button>

      <Card className="border-0 shadow-sm overflow-hidden mb-5" style={{ borderRadius: '15px' }}>
        <div style={{ height: '300px', width: '100%', position: 'relative' }}>
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <Badge bg="dark" className="position-absolute bottom-0 start-0 m-3 fs-5 py-2 px-3 opacity-75">
            {restaurant.type}
          </Badge>
        </div>
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h1 className="fw-bold mb-1">{restaurant.name}</h1>
              <p className="text-muted fs-5 mb-0">📍 {restaurant.location}</p>
            </div>
            <div className="text-end">
              <h3 className="text-success mb-2">{restaurant.priceRange}</h3>
              <Button 
                variant={isFav ? "danger" : "outline-danger"} 
                onClick={() => toggleFavorite(restaurant.id)}
                className="rounded-pill px-4 fw-bold shadow-sm"
              >
                {isFav ? '♥ Saved' : '♡ Save to Favorites'}
              </Button>
            </div>
          </div>
          
          <hr className="my-4 text-muted opacity-25" />
          
          <h4 className="fw-bold mb-3">About this place</h4>
          <p className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>
            {restaurant.description}
          </p>
        </Card.Body>
      </Card>

      <Row className="g-4">
        <Col md={7}>
          <Card className="border-0 shadow-sm h-100" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-4">Reviews & Comments</h4>
              
              {restaurantReviews.length === 0 ? (
                <div className="text-center text-muted p-4 bg-light rounded-3">
                  <p className="mb-0">No reviews yet. Be the first to share your experience!</p>
                </div>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {restaurantReviews.map((rev) => (
                    <ReviewItem key={rev.id} review={rev} />
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={5}>
          <Card className="border-0 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-4">Leave a Review</h4>
              <Form onSubmit={handleReviewSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold text-secondary">Rating</Form.Label>
                  <div className="d-flex gap-2">
                    {[1, 2, 3, 4, 5].map(num => (
                      <Button 
                        key={num}
                        type="button" 
                        variant="link" 
                        className="p-0 text-warning text-decoration-none fs-3"
                        onClick={() => setRating(num)}
                      >
                        {num <= rating ? '★' : '☆'}
                      </Button>
                    ))}
                  </div>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-secondary">Your Comment</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell others what you thought about the food..."
                    style={{ borderRadius: '10px', resize: 'none' }}
                  />
                </Form.Group>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-100 fw-bold py-2" 
                  style={{ borderRadius: '10px' }}
                  disabled={!comment.trim()}
                >
                  Post Review
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
