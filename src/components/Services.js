import React from 'react';
import '../Services.css';  // Ensure this path is correct
import turbanImage from '../assets/turban22.png';  // Make sure the image path is correct

function Services() {
  return (
    <div className="services">
      <div className="services-container">
        <div className="services-image">
          <img src={turbanImage} alt="Turban" />
        </div>
        <div className="services-content">
          <h2>Our Services</h2>
          <p>
            At Khalsa Dastar Center, we pride ourselves on offering expert turban tying services that cater to both traditional Sikh and Hindu styles. Whether you're preparing for a special occasion or looking to embrace your heritage in daily life, our range of styles ensures there's something for everyone. Explore our services below:
          </p>

          <div className="service-item">
            <h3 id="patiala-shahi">1. Patiala Shahi Pagg</h3>
            <p id="patiala-shahi">
              This regal style, originating from the royal city of Patiala in Punjab, is known for its elegance and grandeur. Characterized by its high front and pleated layers, the Patiala Shahi Pagg adds a majestic touch to any attire.
            </p>
          </div>

          <div className="service-item">
            <h3 id="amritsari-pagg">2. Amritsari (Morni) Pagg</h3>
            <p id="amritsari-pagg">
              Named after the city of Amritsar, this style, also known as the Morni (Peacock) Pagg, is distinguished by its tapered look and sleek design, reminiscent of a peacock's tail. It's perfect for those who prefer a more streamlined, modern appearance.
            </p>
          </div>

          <div className="service-item">
            <h3 id="wattan-wali">3. Wattan Wali Pagg</h3>
            <p id="wattan-wali">
              The Wattan Wali Pagg is a traditional choice that signifies pride in one's heritage. Its robust design is suitable for various occasions, offering a balanced combination of comfort and style.
            </p>
          </div>

          <div className="service-item">
            <h3 id="multi-larh">4. Multi Larh Pagg</h3>
            <p id="multi-larh">
              Featuring multiple layers, the Multi Larh Pagg is versatile and adaptable to different facial structures. This style allows for personalization in layering, making it a popular choice for weddings and special events.
            </p>
          </div>

          <div className="service-item">
            <h3 id="safa-hindu">5. Safa Hindu Style</h3>
            <p id="safa-hindu">
              The Safa, a traditional Hindu turban style, is often seen at weddings and religious ceremonies. It is rich in color and fabric choice, reflecting the vibrancy of Hindu culture and traditions.
            </p>
          </div>

          <div className="service-item">
            <h3 id="dumalla">6. Dumalla</h3>
            <p id="dumalla">
              The Dumalla is a revered style, often associated with warriors and saints. It's not just a turban but a symbol of resilience and spirituality. Suitable for both ceremonial and daily wear, the Dumalla carries a deep sense of pride and history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
