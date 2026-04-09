import Card from 'react-bootstrap/Card'

export default function FeatureCard({ title, body, footer }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="text-start">{title}</Card.Title>
        <Card.Text className="text-start text-secondary">{body}</Card.Text>
      </Card.Body>
      {footer ? (
        <Card.Footer className="bg-transparent border-top-0 text-start">
          <small className="text-secondary">{footer}</small>
        </Card.Footer>
      ) : null}
    </Card>
  )
}

