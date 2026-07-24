function TaskCard({ task }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <span className={`status-badge status-${task.status}`}>
          {task.status}
        </span>
      </div>
      <p>{task.description}</p>
      <div className="task-card-footer">
        <small>หมวดหมู่: {task.category}</small>
        <small>ความสำคัญ: {task.priority}</small>
      </div>
    </article>
  );
}

export default TaskCard;