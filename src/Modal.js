import React from 'react';
import './Modal.css'; // Add CSS for modal styling

function Modal({ card, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{card.title}</h2>
        <p><strong>Content:</strong> {card.content}</p>
        <p><strong>Category:</strong> {card.category}</p>
        <p><strong>Status:</strong> {card.status}</p>
        <p><strong>Created At:</strong> {card.createdAt}</p>
        <p><strong>Actions:</strong> {card.actions}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
