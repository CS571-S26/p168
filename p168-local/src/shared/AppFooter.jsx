import Container from 'react-bootstrap/Container'

export default function AppFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-top bg-body-tertiary">
      <Container className="py-3 small text-secondary d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© {year} p168</span>
        <span>
          Built with React, React Router, and React-Bootstrap.
        </span>
      </Container>
    </footer>
  )
}

