import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Contact Us</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Google Form Embed - smaller & centered */}
          <div className="col-lg-8 col-md-10 mb-4">
            <div className="contact-form-container">
              <div className="form-iframe-container small-form">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdnbiToIxSWMmG9cl0azMk2exIm7P5reK9OpgsXO2eZckOrnA/viewform"
                  width="100%"
                  height="480"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Contact Form"
                  className="contact-iframe"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="col-lg-8 col-md-10">
            <div className="contact-info-container">
              <h3 className="contact-info-title">Our Location</h3>

              {/* Google Map */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40257.6633992539!2d73.90936998177817!3d18.42268947622399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb19e55ae313%3A0xd657252cc986eea2!2sK%20J%20College%20Of%20Engineering%20%26%20Management%20Research%2C%20Pune!5e0!3m2!1sen!2sin!4v1756366035286!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KJCOEMR Pune Location"
                  className="map-iframe"
                ></iframe>
              </div>

              {/* Address + Contact */}
              <div className="contact-details">
                <h4 className="contact-details-title">Contact Information</h4>
                <div className="contact-info-list">
                  <p>
                    <strong>Address:</strong><br />
                    K J College Of Engineering & Management Research, Pune
                  </p>
                  <p>
                    <strong>Email:</strong><br />
                    teamvarcas@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Contact;
