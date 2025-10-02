import React from "react";
import "../styles/Hero.css";
const Hero = ({ title = "TEAM वर्चस्", motto = "ENGINEERED TO PERFORM, DRIVEN TO EXCEL." }) => {
  return (
    <section className="hero" aria-label="Homepage hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-motto">{motto}</p>
        <div className="hero-cta-wrap">
        </div>
      </div>
    </section>
  );
};
<section className="hero" aria-label="Homepage hero">
  <div className="hero-grid" aria-hidden="true" />
  <div className="hero-content">
    <h1 className="hero-title">TEAM वर्चस्</h1>
    <p className="hero-motto">ENGINEERED TO PERFORM, DRIVEN TO EXCEL.</p>
  </div>
</section>

export default Hero;
