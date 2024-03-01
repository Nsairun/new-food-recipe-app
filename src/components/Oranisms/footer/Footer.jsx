import React from 'react';
import './footer.css';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="footer">
      <div className="logofoot">
        <h1 style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>LOGO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aut soluta nulla, earum ipsam itaque error officia reprehenderit?
        </p>
        <div className="socialMedia">
          <a href="https://twitter.com/your-twitter-handle">
            <FontAwesomeIcon icon={faTwitter} className="smicon" />
          </a>
          <a href="https://www.facebook.com/your-facebook-handle">
            <FontAwesomeIcon icon={faFacebook} className="smicon" />
          </a>
          <a href="https://www.instagram.com/your-instagram-handle">
            <FontAwesomeIcon icon={faInstagram} className="smicon" />
          </a>
          <a href="https://wa.me/your-whatsapp-number">
            <FontAwesomeIcon icon={faWhatsapp} className="smicon" />
          </a>
        </div>
      </div>
      <div className="support">
        <h1>SUPPORT</h1>
        <p>Account</p>
        <p>Support Center</p>
        <p>Feedback</p>
      </div>
      <div className="menu">
        <h1>OUR MENU</h1>
        <p>Special</p>
        <p>Popular</p>
        <p>Categories</p>
      </div>
      <div className="contact">
        <h1>Get In Touch</h1>
        <p>...@gmail.com</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
