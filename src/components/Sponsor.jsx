import React from "react";
import "../styles/Sponsor.css";

const sponsors = [
  { id: 1, name: "Solidworks", logo: "/images/solidworks.png", url: "https://www.solidworks.com/" },
  { id: 2, name: "Altium", logo: "/images/altium.jpg", url: "https://www.altium.com/" },
  { id: 3, name: "Eraser", logo: "/images/Eraser.png", url: "https://eraser.io/" },
  { id: 4, name: "Altair", logo: "/images/altair.jpg", url: "https://altair.com/" },
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
          <h3>Become a Sponsor</h3>
          <p>
            Join us in building the future of sustainable mobility with our
            Electric Formula Vehicle project. Together, we can drive innovation
            and inspire the next generation of engineers.
          </p>
          <a href="/contact">
            <button className="cta-button">Sponsor Us</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
