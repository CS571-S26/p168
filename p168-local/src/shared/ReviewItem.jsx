export default function ReviewItem({ review }) {
  return (
    <div className="p-3 bg-light rounded-3 shadow-sm border">
      <div className="d-flex justify-content-between mb-2">
        <span className="text-warning fs-5">
          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
        </span>
        <span className="text-muted small">{review.date}</span>
      </div>
      <p className="mb-0 text-secondary">{review.comment}</p>
    </div>
  );
}
