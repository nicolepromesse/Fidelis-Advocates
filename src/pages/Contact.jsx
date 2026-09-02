import { useState } from "react";
import { Link } from "react-router-dom";
import { TopBar } from "../components/Shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { firm } from "../data";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Website enquiry — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Subject: ${form.subject}`,
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
      <Nav active="contact" />

      <section className="page-hero">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="cur">Contact us</span>
        </div>
        <div className="eyebrow"><span className="rule" />Get in touch</div>
        <h1>Contact <span className="em">Fidelis Advocates</span></h1>
      </section>

      <section className="appt">
        <aside className="appt-info">
          <h3>Contact details</h3>
          <p className="directions">
            <strong>Directions to reach:</strong> {firm.directions}
          </p>
          <div className="appt-contact">
            <ul className="lines">
              <li><span className="k">Phone</span> <a href={`tel:${firm.phoneHref}`}>{firm.phone}</a></li>
              <li><span className="k">Fax</span> <span>{firm.fax}</span></li>
              <li><span className="k">Email</span> <a href={`mailto:${firm.email}`}>{firm.email}</a></li>
              <li><span className="k">Web</span> <span>{firm.web}</span></li>
            </ul>
          </div>
          <div className="hours">
            <h4>Working hours</h4>
            {DAYS.map((d) => (
              <p key={d}><span>{d}</span><span>0800 – 1700hrs</span></p>
            ))}
          </div>
        </aside>

        {sent ? (
          <div className="appt-form appt-sent">
            <h3>Thank you</h3>
            <p>
              Your email app should have opened with your message ready to send. If it
              did not, email us directly at{" "}
              <a href={`mailto:${firm.email}`}>{firm.email}</a>.
            </p>
            <button
              type="button"
              className="submit"
              onClick={() => { setForm(EMPTY); setSent(false); }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="appt-form" onSubmit={handleSubmit}>
            <h3 className="form-title">We'd Like to Hear From You!</h3>
            <div className="row">
              <div className="appt-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={update} required />
              </div>
              <div className="appt-field">
                <label htmlFor="email">Email ID</label>
                <input id="email" name="email" type="email" value={form.email} onChange={update} required />
              </div>
            </div>

            <div className="appt-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={update} required />
            </div>

            <div className="appt-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={update} rows={5} required />
            </div>

            <button className="submit" type="submit">Send Email</button>
            <p className="appt-fineprint">
              Sending opens your email app with these details filled in.
            </p>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
