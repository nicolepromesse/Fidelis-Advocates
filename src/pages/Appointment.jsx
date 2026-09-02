import { useState } from "react";
import { Link } from "react-router-dom";
import { TopBar } from "../components/Shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { firm } from "../data";

const APPT_TYPES = [
  "Phone appointment",
  "Skype / video appointment",
  "Face to face appointment",
  "Web chat appointment",
];

const EMPTY = { name: "", email: "", phone: "", date: "", type: "", message: "" };

export default function Appointment() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Appointment request — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Preferred date: ${form.date || "(flexible)"}`,
      `Appointment type: ${form.type || "(not specified)"}`,
      "",
      "Message:",
      form.message || "(none)",
    ].join("\r\n");
    window.location.href =
      `mailto:${firm.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="shell">
      <TopBar />
      <Nav active="appointment" />

      <section className="appt-hero">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="cur">Request Appointment</span>
        </div>
        <div className="eyebrow"><span className="rule" />Book a consultation</div>
        <h1>Request an <span className="em">appointment</span></h1>
        <p className="lede">
          Tell us about your matter and choose how you would like to meet. One of our
          advocates will review your request and contact you to confirm the time.
        </p>
      </section>

      <section className="appt">
        <aside className="appt-info">
          <h3>What to expect</h3>
          <ul>
            <li>An advocate reviews your request within one working day.</li>
            <li>We confirm a time by phone or email.</li>
            <li>Your matter is handled personally and in confidence.</li>
          </ul>
          <div className="appt-contact">
            <h4>Prefer to talk now?</h4>
            <a className="line" href={`tel:${firm.phoneHref}`}>{firm.phone}</a>
            <a className="line" href={`mailto:${firm.email}`}>{firm.email}</a>
            <p>{firm.address}</p>
          </div>
        </aside>

        {sent ? (
          <div className="appt-form appt-sent">
            <h3>Thank you</h3>
            <p>
              Your email app should have opened with the request ready to send. If it
              did not, email us directly at{" "}
              <a href={`mailto:${firm.email}`}>{firm.email}</a>.
            </p>
            <button
              type="button"
              className="submit"
              onClick={() => { setForm(EMPTY); setSent(false); }}
            >
              Send another request
            </button>
          </div>
        ) : (
          <form className="appt-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="appt-field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" value={form.name} onChange={update} required />
              </div>
              <div className="appt-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={update} required />
              </div>
            </div>

            <div className="row">
              <div className="appt-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} required />
              </div>
              <div className="appt-field">
                <label htmlFor="date">Preferred date</label>
                <input id="date" name="date" type="date" value={form.date} onChange={update} />
              </div>
            </div>

            <div className="appt-field">
              <label htmlFor="type">Appointment type</label>
              <select id="type" name="type" value={form.type} onChange={update} required>
                <option value="">Select an option</option>
                {APPT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="appt-field">
              <label htmlFor="message">Message <span className="opt">(optional)</span></label>
              <textarea id="message" name="message" value={form.message} onChange={update} rows={5} />
            </div>

            <button className="submit" type="submit">Send request</button>
            <p className="appt-fineprint">
              Submitting opens your email app with these details filled in.
            </p>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
