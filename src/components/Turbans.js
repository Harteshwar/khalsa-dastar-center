import React from 'react';
import '../Turbans.css';
import traditionalTurban from '../assets/Free Style.png';
import modernTurban from '../assets/Morni Style.png';
import designerTurban from '../assets/Patiala Shahi.png';
import casualTurban from '../assets/Wattan Wali.png';
import safaTurban from '../assets/Safa Style.png';  // Importing the new turban style image

function Turbans() {
  return (
    <div className="turbans">
      <h2>Turban Styles</h2>
      <div className="turban-grid">
        <div className="turban-item">
          <img src={traditionalTurban} alt="Traditional Turban" />
          <h3>Free Style</h3>
          <p>The Free Style Pagg, echoing the essence of village heritage, carries the spirit of rituals and history. This relaxed, traditional turban style pays homage to the roots of Punjabi culture.</p>
        </div>
        <div className="turban-item">
          <img src={modernTurban} alt="Modern Turban" />
          <h3>Morni Amritsar</h3>
          <p>The Morni (Amritsari Pagg) is known for its sharp peaks and distinctive silhouette, perfect for a formal and polished look.</p>
        </div>
        <div className="turban-item">
          <img src={designerTurban} alt="Designer Turban" />
          <h3>Patiala Shahi</h3>
          <p>The Patiala Shahi turban, with its round shape and distinct layers, exudes elegance and tradition, making it a perfect match for formal suits.</p>
        </div>
        <div className="turban-item">
          <img src={casualTurban} alt="Casual Turban" />
          <h3>Wattal Wali</h3>
          <p>The Wattan Wali Pagg stands out for its seamless appearance, with no visible layers, making it the ideal complement to traditional attire like sherwanis and kurta pajamas.</p>
        </div>
        <div className="turban-item">
          <img src={safaTurban} alt="Safa Style Turban" />
          <h3>Safa Style</h3>
          <p>The Safa Style turban, often seen in royal portraits and wedding ceremonies, features opulent fabric choices and elaborate embellishments, symbolizing regality and cultural pride.</p>
        </div>
      </div>
    </div>
  );
}

export default Turbans;
