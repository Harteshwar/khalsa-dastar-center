import React, { useState } from 'react';
import firebase, { getFunctions, httpsCallable } from './firebase';
import Modal from 'react-modal';

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    padding: '20px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#root'); // Adjust the selector if needed

const BookingFormModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    numPeople: 1,
    date: '',
    time: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const functions = getFunctions(firebase);
      const sendFormData = httpsCallable(functions, 'sendFormDataEmail');
      const result = await sendFormData(formData);
      if (result.data.success) {
        console.log('Form data sent successfully');
        // Reset form data or show a success message
        setFormData({
          name: '',
          numPeople: 1,
          date: '',
          time: '',
          location: '',
        });
        alert('Form data sent successfully!');
        onRequestClose(); // Close the modal after successful submission
      } else {
        console.error('Error sending form data:', result.data.error);
        // Show an error message
        alert(`Error sending form data: ${result.data.error}`);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      // Show an error message
      alert(`Error sending form data: ${error.message}`);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Turban Tying Service"
      style={customModalStyles}
    >
      <h2>Book Turban Tying Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="numPeople">Number of People:</label>
          <input
            type="number"
            id="numPeople"
            name="numPeople"
            value={formData.numPeople}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BookingFormModal;