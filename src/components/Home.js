import React, { useEffect, useState } from 'react';
import '../Home.css';
import logo from '../assets/turban logo.png';
import BookingFormModal from '../BookingForm.js';

const images = [
  require('../assets/turban1.jpeg'),
  require('../assets/turban2.jpeg'),
  require('../assets/turban3.jpeg'),
  require('../assets/turban4.jpeg'),
  require('../assets/turban5.jpeg'),
  require('../assets/turban6.jpeg'),
  require('../assets/turban7.jpeg'),
  require('../assets/turban8.jpeg'),
  require('../assets/turban9.jpeg'),
  require('../assets/turban10.jpeg'),
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="home">
      <div className="slideshow-container">
        <div className="slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Turban Tying ${index + 1}`}
              className="slide"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
        </div>
        <button className="prev-button" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className="next-button" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
      <div className="home-content">
        <img src={logo} alt="Khalsa Dastar Center Logo" className="home-logo" />
        <h1>Expert Turban Tying Service</h1>
        <h2> Hire a Professional </h2>
        <button className="book-now-btn" onClick={toggleBookingModal}>
          Inquire Now
        </button>
      </div>
      <BookingFormModal isOpen={showBookingModal} onRequestClose={toggleBookingModal} />
    </div>
  );
}

export default Home;