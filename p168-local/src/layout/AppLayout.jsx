import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'
import AppFooter from '../shared/AppFooter.jsx'
import SiteNav from '../shared/SiteNav.jsx'

export default function AppLayout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <SiteNav />
      <Container as="main" className="flex-grow-1 py-4">
        <Outlet />
      </Container>
      <AppFooter />
    </div>
  )
}

