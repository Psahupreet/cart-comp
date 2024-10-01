import React, { useState } from 'react';
import Card from './Card'; // Import the Card component
import Modal from './Modal'; // Import the Modal component
import './App.css'; // Import CSS for styling

function App() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    content: '',
    category: '',
    status: '',
    createdAt: '',
    actions: ''
  });

  const [cards, setCards] = useState([]); // State to hold created cards
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card
  const [isEditing, setIsEditing] = useState(false); // State to check if in editing mode

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update the existing card
      const updatedCards = cards.map((card) =>
        card.id === formData.id ? formData : card
      );
      setCards(updatedCards);
      setIsEditing(false); // Reset editing state
    } else {
      setCards([...cards, formData]); // Add new card to the list
    }
    resetForm(); // Reset form fields
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      content: '',
      category: '',
      status: '',
      createdAt: '',
      actions: ''
    });
  };

  // Open modal with selected card's data
  const openModal = (card) => {
    setSelectedCard(card);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedCard(null);
  };

  // Edit the selected card
  const editCard = (card) => {
    setFormData(card);
    setIsEditing(true);
    closeModal(); // Close the modal when editing
  };

  // Delete a card
  const deleteCard = (id) => {
    const filteredCards = cards.filter(card => card.id !== id);
    setCards(filteredCards);
  };

  return (
    <div className="App">
      <h1>Create Card</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="createdAt"
          value={formData.createdAt}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="actions"
          placeholder="Actions"
          value={formData.actions}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? 'Update Card' : 'Create Card'}</button>
      </form>

      <h2>Cards</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            data={card}
            onClick={() => openModal(card)} // Open modal on card click
            onEdit={() => editCard(card)} // Edit card on button click
            onDelete={() => deleteCard(card.id)} // Delete card on button click
          />
        ))}
      </div>

      {/* Modal to display card details */}
      {selectedCard && (
        <Modal card={selectedCard} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
