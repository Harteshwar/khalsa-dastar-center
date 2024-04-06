import React from 'react';
import '../Turbans.css';  // Make sure to create and link this CSS file

// Import images
import traditionalTurban from '../assets/Free Style.png';
import modernTurban from '../assets/Morni Style.png';
import designerTurban from '../assets/Patiala Shahi.png';
import casualTurban from '../assets/Wattan Wali.png';

function Turbans() {
  return (
    <div className="turbans">
      <h2>Turban Styles</h2>
      <div className="turban-grid">
        <div className="turban-item">
          <img src={traditionalTurban} alt="Traditional Turban" />
          <h3>Traditional Turban</h3>
          <p>Embrace the classic elegance of our Traditional Turban, perfect for cultural ceremonies and formal events.</p>
        </div>
        <div className="turban-item">
          <img src={modernTurban} alt="Modern Turban" />
          <h3>Modern Turban</h3>
          <p>A sleek and stylish choice, the Modern Turban combines contemporary fashion with traditional values.</p>
        </div>
        <div className="turban-item">
          <img src={designerTurban} alt="Designer Turban" />
          <h3>Designer Turban</h3>
          <p>Crafted for distinction, our Designer Turban line features unique patterns and luxurious materials.</p>
        </div>
        <div className="turban-item">
          <img src={casualTurban} alt="Casual Turban" />
          <h3>Casual Turban</h3>
          <p>Perfect for everyday wear, our Casual Turban offers comfort and style in a variety of colors.</p>
        </div>
      </div>
    </div>
  );
}

export default Turbans;
