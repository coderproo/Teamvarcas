import React, { useRef, useEffect, useState } from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection observer to trigger animations when section scrolls into view
  useEffect(() => {
    const photoEl = photoRef.current;
    const textEl = textRef.current;
    if (!photoEl || !textEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(photoEl); // watch photo (the section)
    return () => observer.disconnect();
  }, []);

  return (
    <main className="gallery-section">
      <div className="gallery-inner">
        <header className="gallery-hero">
          <h1 className="gallery-title">Meet the Team</h1>
          <p className="gallery-sub">The spirit behind Team Varcas</p>
        </header>

        <section className="team-showcase" aria-labelledby="team-heading">
          <div
            ref={photoRef}
            className={`team-photo-wrap ${visible ? "in-view" : ""}`}
            aria-hidden={!visible}
          >
            <img
              src="/images/team-photos.jpg"
              alt="Team Varcas group photo"
              className="team-photo"
            />
          </div>

          <div
            ref={textRef}
            className={`team-text-wrap ${visible ? "in-view" : ""}`}
          >
            <h2 id="team-heading" className="team-motto">
              ENGINEERED TO PERFORM, DRIVEN TO EXCEL.
            </h2>
            <p className="team-paragraph">
              Team Varcas is built on hands-on learning and collaborative grit.
              We tackle design problems together, iterate quickly, and prioritize
              safe, practical engineering — growing as makers and as a team
              every week in the workshop.
            </p>
          </div>
        </section>

        {/* Optional: keep additional gallery content (cards) below if you want.
            For now it's omitted to keep focus on team + story. */}
      </div>
    </main>
  );
};

export default Gallery;
