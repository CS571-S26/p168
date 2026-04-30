import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3" style={{ color: '#ff6b6b' }}>About Us</h1>
        <p className="lead text-muted">Learn more about Campus Food Finder.</p>
      </div>
      
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="border-0 shadow-sm" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold mb-4 h3">Our Mission</h2>
              <p className="fs-5 text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                Campus Food Finder was created to help students and staff find the best dining options around the university. We know how hard it can be to decide where to eat between classes, so we built this platform to make it easy to discover new places, read reviews, and save your favorites.
              </p>
              
              <h2 className="fw-bold mb-4 h3 mt-5">Key Features</h2>
              <ul className="fs-5 text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                <li><strong>Search & Filter:</strong> Instantly find restaurants by name, location, cuisine, or price.</li>
                <li><strong>Dynamic Sorting:</strong> Organize lists exactly how you want.</li>
                <li><strong>Favorites System:</strong> Save places you love and access them instantly.</li>
                <li><strong>Live Reviews:</strong> Share your experiences and read feedback from peers in real-time.</li>
                <li><strong>Surprise Me!:</strong> Can't decide? Let our random picker choose your next meal.</li>
              </ul>
              
              <h2 className="fw-bold mb-4 h3 mt-5">Contact Us</h2>
              <p className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>
                Have questions or suggestions? We'd love to hear from you! Reach out to our team at <a href="mailto:support@campusfoodfinder.edu" className="text-decoration-none">support@campusfoodfinder.edu</a>.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
