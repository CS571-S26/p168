import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'
import PageHeader from '../shared/PageHeader.jsx'

export default function AboutPage() {
  return (
    <div className="text-start">
      <PageHeader
        title="About"
        subtitle="What changed from the initial starter app and how it works on GitHub Pages."
      />

      <Accordion defaultActiveKey="0" className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What this project demonstrates</Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Primary navigation bar (React-Bootstrap <code>Navbar</code>)
              </ListGroup.Item>
              <ListGroup.Item>
                Multiple pages with React Router
              </ListGroup.Item>
              <ListGroup.Item>
                Reusable components shared across pages
              </ListGroup.Item>
              <ListGroup.Item>
                Deployed to GitHub Pages using <code>gh-pages</code>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>GitHub Pages routing note</Accordion.Header>
          <Accordion.Body>
            This site uses <code>HashRouter</code> so refreshing a route works on GitHub Pages
            without needing a custom <code>404.html</code> rewrite.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

