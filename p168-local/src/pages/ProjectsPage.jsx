import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PageHeader from '../shared/PageHeader.jsx'

const projects = [
  {
    name: 'Project Idea 1',
    tags: ['React', 'UI'],
    description:
      'A small UI-focused feature or page. Replace this with your actual project details.',
  },
  {
    name: 'Project Idea 2',
    tags: ['Routing', 'Components'],
    description:
      'A route-driven mini-app. Replace this with your actual project details.',
  },
  {
    name: 'Project Idea 3',
    tags: ['Deployment'],
    description:
      'Something designed to be hosted on GitHub Pages. Replace this with your actual project details.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="text-start">
      <PageHeader
        title="Projects"
        subtitle="A placeholder list demonstrating layout, cards, and reusable UI."
      />

      <Row xs={1} md={2} className="g-3">
        {projects.map((p) => (
          <Col key={p.name}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="d-flex align-items-center justify-content-between gap-2">
                  <span>{p.name}</span>
                  <span className="d-flex gap-1 flex-wrap justify-content-end">
                    {p.tags.map((t) => (
                      <Badge key={t} bg="secondary">
                        {t}
                      </Badge>
                    ))}
                  </span>
                </Card.Title>
                <Card.Text className="text-secondary">{p.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

