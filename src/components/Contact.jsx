import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdnbiToIxSWMmG9cl0azMk2exIm7P5reK9OpgsXO2eZckOrnA/viewform";

  return (
    <section className="contact-section" id="join-us">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* Styled card similar to sponsor card */}
            <div className="join-card">
              <h3 className="join-card-title">Be Part of Varcas ⚡</h3>
              <p className="join-card-text">
              More than just a team, Varcas is a journey of growth where engineering passion meets the thrill of racing, building skills that drive tomorrow.
              </p>

              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="join-btn"
              >
                Join Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
