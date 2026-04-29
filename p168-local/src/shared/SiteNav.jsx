import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const navLinkClassName = ({ isActive }) =>
  `nav-link${isActive ? ' active fw-semibold' : ''}`

export default function SiteNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4 text-danger">
          🍔 Campus Food Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-navbar" />
        <Navbar.Collapse id="primary-navbar">
          <Nav className="ms-auto">
            <NavLink to="/" end className={navLinkClassName}>
              Home
            </NavLink>
            <NavLink to="/favorites" end className={navLinkClassName}>
              Favorites
            </NavLink>
            <NavLink to="/about" end className={navLinkClassName}>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

