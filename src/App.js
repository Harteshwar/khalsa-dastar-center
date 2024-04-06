import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/turban logo.png'; // Ensure the logo's path is correct
import Home from './components/Home';
import Services from './components/Services';
import Turbans from './components/Turbans';
import About from './components/About';
import Contact from './components/Contact';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/turbans">Turbans</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
        
        <footer className="footer">
          &copy; {new Date().getFullYear()} Khalsa Dastar Center. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
