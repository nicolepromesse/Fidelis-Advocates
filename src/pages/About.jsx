import { Link } from "react-router-dom";
import { TopBar } from "../components/Shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { about } from "../data";

export default function About() {
  return (
    <div className="shell">
      <TopBar />
      <Nav active="about" />

      {/* Breadcrumb hero */}
      <section className="page-hero">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="cur">About Us</span>
        </div>
        <div className="eyebrow"><span className="rule" />About the firm</div>
        <h1>About <span className="em">Fidelis Advocates</span></h1>
      </section>

      {/* Intro */}
      <section className="about-page">
        <div className="left">
          <img className="photo" src="/images/office.jpg" alt="Fidelis Advocates office" />
        </div>
        <div className="right">
          <p className="lede">
            <strong>Fidelis Advocates</strong> {about.intro}
          </p>

          <div className="pillars">
            {about.pillars.map((p) => (
              <div className="pillar" key={p.title}>
                <div className="lbl">{p.title}</div>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incorporation & experience */}
      <section className="about-exp">
        <div className="eyebrow"><span className="rule" />Our track record</div>
        <h2>{about.experienceTitle}</h2>
        <p>{about.experienceBody}</p>
      </section>

      <Footer />
    </div>
  );
}
