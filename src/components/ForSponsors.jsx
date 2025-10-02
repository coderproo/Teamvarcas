import React from "react";
import "../styles/ForSponsors.css";

export default function ForSponsors() {
  // Replace phone/email/address lines below if you want different values.
  return (
    <main className="forsponsors-page" id="forsponsors-page" role="main">
      <div className="forsponsors-hero">
        <h1 className="forsponsors-heading">Contact</h1>
      </div>

      <section className="forsponsors-card-wrap">
        <div className="forsponsors-card">
          <ul className="forsponsors-list">
            <li className="forsponsors-item">
              <span className="icon">📍</span>
              <div className="text">
                <strong>K J College Of Engineering &amp; Management Research</strong>
                <div className="muted">
                  CWC3+HRX, Saswad road, Near Bopdev Ghat, In KJEI Trinity Campus, Yewalewadi Road Serve No. 25 &amp;27 Kondhwa annex, Saswad - Bopdev - Pune Rd, Kondhwa, Pune, Maharashtra 411048
                </div>
              </div>
            </li>

            <li className="forsponsors-item">
              <span className="icon">📞</span>
              <div className="text">
                <strong>Contact</strong>
                <div className="muted">+91 9579481431</div>
              </div>
            </li>

            <li className="forsponsors-item">
              <span className="icon">✉️</span>
              <div className="text">
                <strong>Email</strong>
                <div className="muted">teamvarcas@gmail.com</div>
              </div>
            </li>

            
          </ul>
        </div>
        {/* Our Location Section */}
<div className="contact-location">
  <h3 className="contact-subtitle">Our Location</h3>

  <div className="map-container">
    <iframe
      title="KJCOEMR Pune Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40257.6633992539!2d73.90936998177817!3d18.42268947622399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb19e55ae313%3A0xd657252cc986eea2!2sK%20J%20College%20Of%20Engineering%20%26%20Management%20Research%2CPune!5e0!3m2!1sen!2sin!4v1756366035286!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <div className="location-details">
  </div>
</div>

      </section>
    </main>
  );
}
