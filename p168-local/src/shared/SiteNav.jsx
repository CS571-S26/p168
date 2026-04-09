import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const navLinkClassName = ({ isActive }) =>
  `nav-link${isActive ? ' active fw-semibold' : ''}`

export default function SiteNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          p168
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-navbar" />
        <Navbar.Collapse id="primary-navbar">
          <Nav className="me-auto">
            <NavLink to="/" end className={navLinkClassName}>
              Home
            </NavLink>
            <NavLink to="/projects" className={navLinkClassName}>
              Projects
            </NavLink>
            <NavLink to="/about" className={navLinkClassName}>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

