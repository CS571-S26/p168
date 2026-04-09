import Container from 'react-bootstrap/Container'

export default function AppFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-top bg-body-tertiary">
      <Container className="py-3 small text-secondary d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© {year} Campus Food Finder</span>
        <span>
          Built for CS571 Web Project
        </span>
      </Container>
    </footer>
  )
}

