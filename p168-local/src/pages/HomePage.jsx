import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import FeatureCard from '../shared/FeatureCard.jsx'
import PageHeader from '../shared/PageHeader.jsx'

export default function HomePage() {
  return (
    <div>
      <PageHeader
        title="Welcome"
        subtitle="A small multi-page React app deployed on GitHub Pages."
      />

      <div className="text-start mb-4 d-flex flex-wrap gap-2">
        <Button as={Link} to="/projects" variant="primary">
          View Projects
        </Button>
        <Button as={Link} to="/about" variant="outline-secondary">
          About This Site
        </Button>
      </div>

      <Row xs={1} md={3} className="g-3">
        <Col>
          <FeatureCard
            title="Routing"
            body="Uses React Router with a primary navigation bar and multiple pages."
            footer="GitHub Pages friendly via HashRouter."
          />
        </Col>
        <Col>
          <FeatureCard
            title="Design Library"
            body="Built with React-Bootstrap components like Navbar, Cards, Grid, and Accordion."
            footer="Bootstrap 5 styling."
          />
        </Col>
        <Col>
          <FeatureCard
            title="Component-Based"
            body="Pages are composed from reusable components like PageHeader and FeatureCard."
            footer="Keeps code organized and readable."
          />
        </Col>
      </Row>
    </div>
  )
}

