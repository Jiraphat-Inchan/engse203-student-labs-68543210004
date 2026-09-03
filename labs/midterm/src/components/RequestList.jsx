import RequestCard from './RequestCard.jsx';

function RequestList({ requests, onDeleteRequest, onAcknowledge }) {
  if (requests.length === 0) {
    return (
      <p className="empty-message" role="status">
        ไม่พบคำร้องที่ตรงกับการค้นหา
      </p>
    );
  }

  return (
    <div className="request-grid">
      {requests.map((request) => (
        <RequestCard
          key={request.id}
          request={request}
          onDeleteRequest={onDeleteRequest}
          onAcknowledge={onAcknowledge}
        />
      ))}
    </div>
  );
}

export default RequestList;