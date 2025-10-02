import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Team Varcas</h3>
            <p>Driving the future of mobility with innovation, sustainability, and engineering excellence.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61581589406727 " className="social-link"><FaFacebook /></a>
              <a href="https://www.instagram.com/teamvarchas/" className="social-link"><FaInstagram /></a>
              <a href="https://x.com/Varcas_kjcoemr" target='blank' className="social-link"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/teamvarcas" className="social-link"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/sponsor">Sponsor</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>K.J. College of Engineering and Management Research,<br />CWC3+HRX, Saswad road, Near Bopdev Ghat, In KJEI Trinity Campus, Yewalewadi Road Serve No. 25 &27 Kondhwa annex, Saswad - Bopdev - Pune Rd, Kondhwa, Pune, Maharashtra 411048</span>
              </div>  
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>teamvarcas@gmail.com</span>
              </div>
              {/* <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 98765 43210</span>
              </div> */}
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;