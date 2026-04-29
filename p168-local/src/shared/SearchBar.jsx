import { Form, InputGroup } from 'react-bootstrap';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <InputGroup>
      <InputGroup.Text className="bg-white" id="search-icon">🔍</InputGroup.Text>
      <Form.Control
        placeholder="Search by restaurant name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-start-0 ps-0"
        style={{ boxShadow: 'none' }}
        aria-label="Search restaurants"
        aria-describedby="search-icon"
      />
    </InputGroup>
  );
}
