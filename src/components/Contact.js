import React from 'react';
import '../Contact.css'; // Ensure this CSS file is created and linked

function Contact() {
  return (
    <div className="contact">
      <div className="contact-inner">
        <h2>Get in Touch</h2>
        <p>Whether you’re looking to book an appointment or have questions about our turban tying services, we’re here to help. Reach out to us and let’s talk about how we can bring a regal touch to your attire.</p>
        <div className="contact-info">
          <div className="contact-method">
            <h3>Call Us</h3>
            <p className="contact-detail">123-456-7890</p>
          </div>
          <div className="contact-method">
            <h3>Email Us</h3>
            <p className="contact-detail">info@khalsadastarcenter.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
