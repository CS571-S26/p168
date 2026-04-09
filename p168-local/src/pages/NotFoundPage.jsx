import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import PageHeader from '../shared/PageHeader.jsx'

export default function NotFoundPage() {
  return (
    <div className="text-start">
      <PageHeader title="Not Found" subtitle="That page doesn’t exist." />
      <Alert variant="warning">
        The route you tried to visit isn’t defined in this app.
      </Alert>
      <Button as={Link} to="/" variant="primary">
        Go Home
      </Button>
    </div>
  )
}

