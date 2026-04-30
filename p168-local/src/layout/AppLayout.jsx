import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import AppFooter from '../shared/AppFooter.jsx'
import SiteNav from '../shared/SiteNav.jsx'
import ToastNotification from '../shared/ToastNotification.jsx'

export default function AppLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <SiteNav />
      <main className="flex-grow-1 bg-light">
        <Container className="py-4">
          <Outlet />
        </Container>
      </main>
      <AppFooter />
      <ToastNotification />
    </div>
  )
}
