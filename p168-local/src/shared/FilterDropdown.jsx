import { Form } from 'react-bootstrap';

export default function FilterDropdown({ selectedType, setSelectedType, foodTypes }) {
  return (
    <div>
      <Form.Label htmlFor="type-filter" className="visually-hidden">Filter by cuisine</Form.Label>
      <Form.Select 
        id="type-filter"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        style={{ boxShadow: 'none' }}
        aria-label="Filter restaurants by type"
      >
        {foodTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </Form.Select>
    </div>
  );
}
