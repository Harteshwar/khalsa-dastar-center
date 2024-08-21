import React, { useState } from 'react';
import firebase, { getFunctions, httpsCallable } from './firebase';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './BookingForm.css';
import moment from 'moment-timezone';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    numTurbans: 1,
    turbanColor: '',
    turbanStyle: '',
    address: '',
    specialRequirements: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.date) errors.date = 'Date is required';
    if (!formData.time) errors.time = 'Time is required';
    if (!formData.address) errors.address = 'Address is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Format the time to 12-hour format with AM/PM
    const formattedTime = moment(formData.time, "HH:mm").format("hh:mm A");

    // Update formData with the formatted time
    const formattedData = { ...formData, time: formattedTime };

    try {
      const functions = getFunctions(firebase);
      const sendFormData = httpsCallable(functions, 'sendFormDataEmail');
      const result = await sendFormData(formattedData);

      if (result.data.success) {
        console.log('Form data sent successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          numTurbans: 1,
          turbanColor: '',
          turbanStyle: '',
          address: '',
          specialRequirements: '',
        });
        setIsSubmitted(true);
      } else {
        console.error('Error sending form data:', result.data.error);
        alert(`Error sending form data: ${result.data.error}`);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      alert(`Error sending form data: ${error.message}`);
    }

    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      numTurbans: 1,
      turbanColor: '',
      turbanStyle: '',
      address: '',
      specialRequirements: '',
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <Container className="booking-form-container">
      {isSubmitted ? (
        <div className="success-message">
          <h2>Thank you for your booking!</h2>
          <p>We have received your request for the Turban Tying Service. Our team will review your booking details and contact you within 48 hours to confirm your appointment and provide further instructions.</p>
          <p>If you have any immediate questions or concerns, please feel free to reach out to us at <a href="mailto:khalsadastarcenter@gmail.com">khalsadastarcenter@gmail.com</a>.</p>
          <Button variant="primary" onClick={handleReset}>Book Another Appointment</Button>
        </div>
      ) : (
        <>
          <div className="form-header">
            <h2>Book Turban Tying Service</h2>
            <p className="form-note">Please fill out the form below, and someone from our team will contact you within 48 hours to confirm your booking and provide further instructions.</p>
          </div>
          <Form onSubmit={handleSubmit} className="booking-form">
            <Row>
              <Col md={6}><FormInput label="Name" type="text" name="name" value={formData.name} handleChange={handleChange} isInvalid={formErrors.name} /></Col>
              <Col md={6}><FormInput label="Email" type="email" name="email" value={formData.email} handleChange={handleChange} isInvalid={formErrors.email} /></Col>
            </Row>
            <Row>
              <Col md={6}><FormInput label="Phone" type="tel" name="phone" value={formData.phone} handleChange={handleChange} isInvalid={formErrors.phone} /></Col>
              <Col md={6}><FormInput label="Date" type="date" name="date" value={formData.date} handleChange={handleChange} isInvalid={formErrors.date} /></Col>
            </Row>
            <Row>
              <Col md={6}><FormInput label="Time" type="time" name="time" value={formData.time} handleChange={handleChange} isInvalid={formErrors.time} /></Col>
              <Col md={6}><FormInput label="Number of Turbans" type="number" name="numTurbans" value={formData.numTurbans} min="1" handleChange={handleChange} /></Col>
            </Row>
            <Row>
              <Col md={6}><FormInput label="Preferred Turban Color" type="text" name="turbanColor" value={formData.turbanColor} handleChange={handleChange} /></Col>
              <Col md={6}><FormInput label="Turban Style" type="text" name="turbanStyle" value={formData.turbanStyle} handleChange={handleChange} /></Col>
            </Row>
            <Row>
              <Col md={12}><FormInput label="Address" type="text" name="address" value={formData.address} handleChange={handleChange} isInvalid={formErrors.address} /></Col>
            </Row>
            <Form.Group controlId="specialRequirements">
              <Form.Label>Special Requirements</Form.Label>
              <Form.Control as="textarea" name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} rows={3} />
            </Form.Group>
            <div className="form-actions">
              <Button variant="primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
              <Button variant="secondary" onClick={handleReset} disabled={isSubmitting}>Cancel</Button>
            </div>
          </Form>
        </>
      )}
    </Container>
  );
};

function FormInput({ label, type, name, value, handleChange, isInvalid }) {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!!isInvalid}
        required
      />
      <Form.Control.Feedback type="invalid">
        {isInvalid}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default BookingForm;
