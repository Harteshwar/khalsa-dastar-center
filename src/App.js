import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/turban logo.png';
import PageCover from './PageCover';

const images = [
  'turban1.jpeg',
  'turban2.jpeg',
  'turban3.jpeg',
  'turban4.jpeg',
  'turban5.jpeg',
  'turban6.jpeg',
  'turban7.jpeg',
  'turban8.jpeg',
  'turban9.jpeg',
  'turban10.jpeg',
];

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar fixed-top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Khalsa Dastar Center Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/turbans">Turbans</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/turbans" element={<Turbans />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="home">
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={image}
            src={require(`./assets/${image}`)}
            alt={`Turban Tying ${index + 1}`}
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="home-content">
        <img src={logo} alt="Khalsa Dastar Center Logo" className="home-logo" />
        <h1>Welcome to Khalsa Dastar Center</h1>
        <p>We provide professional turban tying services for all occasions.</p>
        <Link to="/services" className="button">View Our Services</Link>
      </div>
    </div>
  );
}

function Services() {
  return (
    <PageCover title="Our Services">
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Wedding Turban Tying</li>
        <li>Party Turban Tying</li>
        <li>Religious Ceremony Turban Tying</li>
        <li>Custom Turban Tying</li>
      </ul>
    </div>
    </PageCover>
  );
}

function Turbans() {
  return (
    <div className="turbans">
      <h2>Turban Styles</h2>
      <ul>
        <li>Traditional Turban</li>
        <li>Modern Turban</li>
        <li>Designer Turban</li>
        <li>Casual Turban</li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Khalsa Dastar Center is a leading provider of professional turban tying services. With years of experience, our skilled artisans ensure that you look your best on every occasion.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>For inquiries and appointments, please contact us:</p>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@khalsadastarcenter.com</p>
    </div>
  );
}

export default App;