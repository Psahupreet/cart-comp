import React from 'react';
import './Card.css'; // Add CSS for styling

function Card({ data, onClick, onEdit, onDelete }) {
  return (
    <div className="card" onClick={onClick}> {/* Trigger onClick when card is clicked */}
      <h2>{data.title}</h2>
      <p><strong>Content:</strong> {data.content}</p>
      <p><strong>Category:</strong> {data.category}</p>
      <p><strong>Status:</strong> {data.status}</p>
      <p><strong>Created At:</strong> {data.createdAt}</p>
      <p><strong>Actions:</strong> {data.actions}</p>
      <button onClick={(e) => { e.stopPropagation(); onEdit(); }}>Edit</button>
      <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>Delete</button>
    </div>
  );
}

export default Card;
