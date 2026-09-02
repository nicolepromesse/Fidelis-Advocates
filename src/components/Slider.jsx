import { useEffect, useRef, useState } from "react";

// Crossfading image slider used in the hero. Auto-advances, pauses on hover,
// supports prev/next arrows and dots, and respects reduced-motion preferences.
export default function Slider({ slides, interval = 4500, fit = "cover" }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  const n = slides.length;

  const go = (to) => setI(((to % n) + n) % n);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused || n <= 1) return;
    timer.current = setTimeout(() => setI((v) => (v + 1) % n), interval);
    return () => clearTimeout(timer.current);
  }, [i, paused, n, interval]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Fidelis Advocates photos"
    >
      {slides.map((s, idx) => (
        <img
          key={s.src}
          className={`slide ${idx === i ? "on" : ""}`}
          src={s.src}
          alt={s.alt}
          style={{ objectFit: fit, objectPosition: s.pos || "center" }}
          aria-hidden={idx !== i}
          draggable="false"
        />
      ))}

      {n > 1 && (
        <>
          <button className="s-arrow prev" onClick={prev} aria-label="Previous photo">‹</button>
          <button className="s-arrow next" onClick={next} aria-label="Next photo">›</button>
          <div className="s-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`s-dot ${idx === i ? "on" : ""}`}
                onClick={() => go(idx)}
                aria-label={`Go to photo ${idx + 1}`}
                aria-current={idx === i}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
