import React from "react";
import "../styles/About.css"; // adjust if your CSS path differs

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-quote">
          "Engineering ambition, powered by teamwork."
        </h2>

        <p>
          <strong>Team Varcas</strong> is a student-driven motorsports team from
          KJEI, Pune, united by a passion for engineering innovation and
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
    </section>
  );
}
