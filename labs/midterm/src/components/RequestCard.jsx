import { Link } from 'react-router-dom';

function RequestCard({ request, onDeleteRequest, onAcknowledge }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onDeleteRequest(request.id);
  };

  const handleAcknowledge = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onAcknowledge) {
      onAcknowledge(request.id);
    }
  };

  return (
    <article className="request-card">
      <div>
        <p className="request-id">{request.id}</p>
        <h3><Link to={`/requests/${request.id}`}>{request.requestType}</Link></h3>
        <p>{request.location}</p>
        <p>{request.details}</p>
        {/* TODO B4: แทน <span> สถานะดิบด้านล่างด้วย <StatusBadge status={request.status} /> ที่คุณสร้าง */}
        <p><span className={`badge ${request.status}`}>{request.status}</span> · {request.priority}</p>
      </div>
      <div className="request-card-actions">
        {/* CP-B3.1: ปุ่ม "รับเรื่อง" แสดงเฉพาะการ์ดที่มีสถานะ pending */}
        {request.status === 'pending' && (
          <button
            className="button primary"
            type="button"
            onClick={handleAcknowledge}
            aria-label={`รับเรื่องคำร้อง ${request.id}`}
          >
            รับเรื่อง
          </button>
        )}

        <button
          className="button danger"
          type="button"
          onClick={handleDelete}
          aria-label={`ลบคำร้อง ${request.id}`}
        >
          ลบ
        </button>
      </div>
    </article>
  );
}

export default RequestCard;