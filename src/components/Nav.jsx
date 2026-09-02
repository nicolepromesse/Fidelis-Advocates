import { useState } from "react";
import { Link } from "react-router-dom";
import { firm } from "../data";

export default function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <Link className="brand" to="/" onClick={close}>
        <img className="badge" src="/images/logo-badge.png" alt="Fidelis Advocates logo" />
        <div>
          <div className="name">{firm.name}</div>
          <div className="tag">{firm.tagline}</div>
        </div>
      </Link>

      <button
        className="menu-btn"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/" className={active === "home" ? "active" : ""} onClick={close}>Home</Link>
        <Link to="/about" className={active === "about" ? "active" : ""} onClick={close}>About Us</Link>
        <Link to="/services" className={active === "services" ? "active" : ""} onClick={close}>Our Services</Link>
        <Link to="/team" className={active === "team" ? "active" : ""} onClick={close}>Our Team</Link>
        <Link to="/contact" className={active === "contact" ? "active" : ""} onClick={close}>Contact Us</Link>
        <Link to="/appointment" className={`cta ${active === "appointment" ? "active" : ""}`} onClick={close}>Request Appointment</Link>
      </nav>
    </header>
  );
}
