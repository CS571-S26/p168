import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-1 fw-bold text-danger mb-4">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead text-muted mb-5">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Button as={Link} to="/" variant="primary" size="lg" className="px-4 py-2" style={{ borderRadius: '10px' }}>
        Return to Home
      </Button>
    </Container>
  );
}
