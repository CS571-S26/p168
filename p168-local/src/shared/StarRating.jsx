import { Button } from 'react-bootstrap';

export default function StarRating({ rating, setRating }) {
  return (
    <div className="d-flex gap-2" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map(num => (
        <Button 
          key={num}
          type="button" 
          variant="link" 
          className="p-0 text-warning text-decoration-none fs-3"
          onClick={() => setRating(num)}
          aria-label={`Rate ${num} stars`}
          aria-checked={num === rating}
          role="radio"
        >
          {num <= rating ? '★' : '☆'}
        </Button>
      ))}
    </div>
  );
}
