import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { firm, serviceNames } from "../data";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="left">
        <span className="place">{firm.city}</span>
        <span className="hours">{firm.hours}</span>
      </div>
      <div className="right">
        <a className="call" href={`tel:${firm.phoneHref}`}>Call us: ({firm.phoneHref.slice(0, 4)}) {firm.phoneHref.slice(4)}</a>
        <div className="social">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="X">X</a>
          <a href="#" aria-label="YouTube">YT</a>
          <a href="#" aria-label="LinkedIn">IN</a>
        </div>
      </div>
    </div>
  );
}

export function Marquee() {
  const items = [
    "Legal opinions & advice",
    "Litigation & disputes management",
    "Arbitration and mediation",
    "Intellectual property law",
    "Banking law",
    "Company incorporation",
  ];
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="track">
        {loop.map((t, i) => (
          <span key={i}>
            {t} <span className="dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Scrolls to the hash target on navigation, or to top when the path changes.
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

export { serviceNames };
