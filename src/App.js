import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/turban logo.png';
import Home from './components/Home';
import Services from './components/Services';
import Turbans from './components/Turbans';
import About from './components/About';
import Contact from './components/Contact';
import BookingForm from './BookingForm';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="Khalsa Dastar Center Logo" style={{ height: '30px', width: 'auto' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/turbans">Turbans</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-light" as={Link} to="/book" className="d-block d-lg-none">
                  Inquire Now
                </Button>
              </Nav>
            </Navbar.Collapse>
            <Nav className="d-none d-lg-flex">
              <Button variant="outline-light" as={Link} to="/book">
                Inquire Now
              </Button>
            </Nav>
          </Container>
        </Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/turbans" element={<Turbans />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookingForm />} />
          </Routes>
        </div>
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
                &copy; {new Date().getFullYear()} Khalsa Dastar Center. All Rights Reserved.
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                <div className="social-icons">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
