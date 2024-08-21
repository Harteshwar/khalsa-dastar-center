import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import logo from '../assets/turban logo.png';
import videoSource from '../assets/website homepage slideshow.mp4';

function Home() {
  return (
    <div className="home">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <section className="home-content-container">
        <div className="home-content">
          <img src={logo} alt="Khalsa Dastar Center Logo" className="home-logo" />
          <h1>Expert Turban Tying Service</h1>
          <h2>Hire a Professional</h2>
          <Link to="/book">
            <button className="book-now-btn" aria-label="Inquire about turban tying services">Inquire Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
