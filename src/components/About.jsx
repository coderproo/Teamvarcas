import React, { useState, useCallback } from "react";
import "../styles/About.css";

export default function About() {
  const items = [
    {
      id: 1,
      title: "SAE E-Baja 2026",
      text: "Our debut participation where Team Varcas is set to showcase its engineering spirit with our very first Electric All Terrain Vehicle.",
      image: "/images/bajalogo.png", 
    },
    {
      id: 2,
      title: "Tiffan 2024",
      text: "Our team proudly participated in TIFAN 2024, showcasing innovation, teamwork, and a passion for engineering solutions.",
      image: "/images/tifan.jpg", 
    },
  ];

  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const current = items[index];

  return (
    <section className="about-section">
      {/* ---- About Content ---- */}
      <div className="about-content">
        <h2 className="about-quote">
          "Engineering ambition, powered by teamwork."
        </h2>

        <p>
          <strong>Team Varcas</strong> is a student-driven motorsports team from
          <b> KJEI's K. J. College of Engineering and Management Research, Pune</b>, united by a passion for engineering innovation and
          collaborative learning. We are currently designing and developing our
          first All-Terrain Vehicle, laying the foundation for our journey into
          SAE eBAJA and beyond.
        </p>  

        <p>
          What sets us apart is not only the vehicle we build, but the spirit
          with which we build it. With subteams spanning chassis, powertrain,
          electronics, design, and management, every member contributes unique
          skills toward one collective goal: to transform ideas into
          performance-driven engineering.
        </p>

        <p>
          Our mission is to cultivate a culture of ambition, resilience, and
          teamwork. At <strong>Team Varcas</strong>, every challenge is an
          opportunity to learn, every setback a chance to adapt, and every
          success a shared victory. Together, we are building more than a
          vehicle — we are building engineers, leaders, and a legacy of
          innovation.
        </p>
      </div>

      {/* ---- Participation Section ---- */}
      <div className="participation-section">
        <h2 className="participation-title">Our Participations</h2>

        <div
          className="participation-card"
          onClick={goNext}
          role="button"
          tabIndex={0}
        >
          <div className="participation-image">
            <img src={current.image} alt={current.title} />
          </div>
          <div className="participation-text">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <span className="participation-hint">
              
            </span>
          </div>
        </div>
      </div>
<div className="ebaja-section" id="ebaja">
  <div className="ebaja-inner">
    <div className="ebaja-left">
   
      <img src="/images/bajalogo.png" alt="Baja SAE logo" className="ebaja-image" />
    </div>

    <div className="ebaja-right">
      <h2 className="ebaja-heading">
        What is SAE Baja?
      </h2>

      <p className="ebaja-text">
        <strong>SAE Baja</strong> is a competition organized by Society of Automotive Engineers. It is a student engineering challenge where teams design and build small
        all-terrain vehicles, then test them in practical events that reward engineering, durability and
        performance. It's a hands-on way to turn classroom theory into real vehicles and real teamwork.
      </p>

      <p className="ebaja-text">
        For <strong>Team Varcas</strong>, Baja is a learning platform an opportunity to grow as engineers,
        sharpen practical skills, and push our ideas into physical form while working closely as a team.
      </p>

    </div>
  </div>
</div>

    </section>
  );
}
