import React from "react";
import "../styles/Sponsor.css";
import { Link } from "react-router-dom";

const sponsors = [
  { id: 1, name: "Solidworks", logo: "/images/solidworks.png", url: "https://www.solidworks.com/" },
  { id: 2, name: "Altium", logo: "/images/altium (1).jpg", url: "https://www.altium.com/" },
  { id: 3, name: "Eraser", logo: "/images/Eraser.png", url: "https://eraser.io/" },
  { id: 4, name: "Altair", logo: "/images/altair (1).jpg", url: "https://altair.com/" },
];

const Sponsor = () => {
  return (
    <section className="sponsor-section">
      <div className="sponsor-container">
        <h2 className="sponsor-title">
          Powering Innovation with Our Proud Sponsors ⚡
        </h2>

        <div className="sponsor-logos-wrapper">
          <div className="sponsor-logos">
            {sponsors.map((sponsor) => (
              <div className="sponsor-logo-card" key={sponsor.id}>
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                </a>
              </div>
            ))}

            {/* duplicate logos for infinite scroll */}
            {sponsors.map((sponsor) => (
              <div className="sponsor-logo-card" key={`dup-${sponsor.id}`}>
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-cta">
          <h3 color= "#ffb703">Be The Force Behind The Finish!</h3>
          <p>
            Join us in shaping the future of mobility with our innovative projects. With your sponsorship, we can drive progress and showcase your brand as a leader in innovation.
          </p>
          <Link to="/forsponsors">
  <button className="cta-button">Contact Us</button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
