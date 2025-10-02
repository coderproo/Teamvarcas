import React, { useEffect, useState } from "react";
import "../styles/Gallery.css";

/**
 * Gallery (single-preview, click-to-open)
 * Props:
 *  - photos: Array<{ src, alt }>
 *  - initialIndex: index for the preview image (default 0)
 *
 * New: shows a visible click hint overlay + sr-only instructions.
 */
export default function Gallery({ photos: propPhotos = [], initialIndex = 0 }) {
  const sample = [
    { src: "images/teamp.jpg" },
    { src: "images/ak.jpg"},
    { src: "images/chat.jpg" },
    { src: "images/chassis.jpg" },
    { src: "images/chat1.jpg" },
    { src: "images/chat3.jpg" },
    // { src: "images/c1.jpg" },
    // { src: "images/c2.jpg" },
    { src: "images/g1.jpg" },
    { src: "images/g3.jpg" },
    { src: "images/g2.jpg" },
  ];
  const photos = Array.isArray(propPhotos) && propPhotos.length ? propPhotos : sample;
  const previewIndex = Math.min(Math.max(0, Number(initialIndex) || 0), Math.max(0, photos.length - 1));
  const [openIndex, setOpenIndex] = useState(null);

  // Hint visibility: show immediately, auto-hide after 6s; re-show on focus
  const [hintVisible, setHintVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setHintVisible(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // Prevent page scroll while lightbox open
  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openIndex]);

  // Keyboard nav for lightbox
  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + photos.length) % photos.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, photos.length]);

  const prevIndex = (i) => (i - 1 + photos.length) % photos.length;
  const nextIndex = (i) => (i + 1) % photos.length;

  const fallbackSVG = (w = 900, h = 600) =>
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'%3E%3Crect fill='%23eef3f6' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23c9d4db' font-size='18'%3EImage not found%3C/text%3E%3C/svg%3E`;

  // force theme inline to avoid white overrides (keeps your themed background)
  const themeStyle = {
    background: "linear-gradient(180deg, #0f172a 0%, #0b1220 100%)",
    color: "#bfcfd9"
  };

  function openLightbox(index) { setOpenIndex(index); }
  function closeLightbox() { setOpenIndex(null); }
  function next() { setOpenIndex((i) => (i === null ? 0 : (i + 1) % photos.length)); }
  function prev() { setOpenIndex((i) => (i === null ? photos.length - 1 : (i - 1 + photos.length) % photos.length)); }

  return (
    <section className="gallery-section" aria-label="Gallery section" style={themeStyle}>
      <div className="gallery-inner">

        {/* Single preview: accessible button with aria-describedby for instruction */}
        <button
          type="button"
          className="gallery-preview-btn"
          onClick={() => { openLightbox(previewIndex); setHintVisible(false); }}
          onFocus={() => setHintVisible(true)}
          onBlur={() => setHintVisible(false)}
          aria-label="Open gallery — opens lightbox to view all photos"
          aria-describedby="gallery-instructions"
        >
          <img
            src={photos[previewIndex].src}
            alt={photos[previewIndex].alt || `photo-${previewIndex + 1}`}
            className="gallery-preview-img"
            onError={(e) => { e.currentTarget.src = fallbackSVG(); }}
            loading="lazy"
          />

          {/* visible hint overlay */}
          <div className={`click-hint ${hintVisible ? "visible" : "hidden"}`} aria-hidden="true">
            <svg className="hint-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0-3a10 10 0 1010 10A10 10 0 0012 2z"/>
              <path fill="currentColor" d="M12 8a4 4 0 104 4 4 4 0 00-4-4z" opacity="0.95"/>
            </svg>
            <span className="hint-text">Click to open gallery</span>
          </div>
        </button>

        {/* screen-reader only instruction (will be read by assistive tech) */}
        <div id="gallery-instructions" className="sr-only">
          Press Enter or Space to open the gallery. Use Left and Right arrow keys to navigate. Press Escape to close.
        </div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="glb-close" aria-label="Close" onClick={closeLightbox}>✕</button>

            <div className="glb-stack" aria-live="polite">
              <img
                className="glb-layer glb-back"
                src={photos[prevIndex(openIndex)].src}
                alt={photos[prevIndex(openIndex)].alt || "previous"}
                onError={(e) => { e.currentTarget.src = fallbackSVG(1000,700); }}
                draggable="false"
              />
              <img
                className="glb-layer glb-mid"
                src={photos[nextIndex(openIndex)].src}
                alt={photos[nextIndex(openIndex)].alt || "next"}
                onError={(e) => { e.currentTarget.src = fallbackSVG(1000,700); }}
                draggable="false"
              />
              <div className="glb-main-wrap">
                <button className="glb-nav glb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev(); }}>◀</button>

                <img
                  className="glb-main"
                  src={photos[openIndex].src}
                  alt={photos[openIndex].alt || `photo-${openIndex + 1}`}
                  onError={(e) => { e.currentTarget.src = fallbackSVG(1200,900); }}
                  draggable="false"
                />

                <button className="glb-nav glb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); next(); }}>▶</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
