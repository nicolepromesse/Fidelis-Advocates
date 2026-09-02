import { Link } from "react-router-dom";
import { TopBar, Marquee } from "../components/Shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { serviceNames, team, admin, firm } from "../data";

export default function Home() {
  const services = serviceNames.map((name, i) => ({ name, n: String(i + 1).padStart(2, "0") }));
  const people = [...team, admin];

  return (
    <div className="shell">
      <TopBar />
      <Nav active="home" />

      {/* Hero */}
      <section id="home" className="hero">
        <div className="copy">
          <div className="eyebrow"><span className="rule" />Law firm · Kigali</div>
          <h1>Right before.<br /><span className="em">Justice after.</span></h1>
          <p className="lede">
            Legal Assistance, Legal Representation, Insolvency Administration, Legal
            Consultancy, Arbitration, Mediation &amp; Conciliation.
          </p>
          <div className="actions">
            <Link className="btn btn-dark" to="/services">Explore our practices</Link>
            <Link className="btn btn-outline" to={{ pathname: "/", hash: "#contact" }}>Contact us</Link>
          </div>
          <div className="stats">
            <div>
              <div className="num serif">19</div>
              <div className="lbl">Practice areas</div>
            </div>
            <div>
              <div className="num serif">04</div>
              <div className="lbl">Advocates</div>
            </div>
            <div>
              <div className="num serif">Kigali</div>
              <div className="lbl">National · regional · int'l</div>
            </div>
          </div>
        </div>
        <div className="art">
          <Slider
            fit="contain"
            slides={[
              { src: "/images/hero-firm.jpg", alt: "The advocates of Fidelis Advocates" },
              { src: "/images/about-firm.jpg", alt: "The Fidelis Advocates team" },
            ]}
          />
          <div className="quote">“Exceeding your expectations”</div>
        </div>
      </section>

      <Marquee />

      {/* About */}
      <section id="about" className="about">
        <div className="left">
          <div className="eyebrow"><span className="rule" />About the firm</div>
          <h2>Most trusted firm with successful cases</h2>
          <img className="photo" src="/images/about-firm.jpg" alt="Fidelis Advocates team" />
        </div>
        <div className="right">
          <p className="lede">
            Based in Kigali, FIDELIS ADVOCATES is an experienced law firm with a long and
            successful track record of offering high quality legal services to a wide range
            of clients including individuals, with an overwhelming focus on business entities.
            FIDELIS ADVOCATES delivers services with the intervention of its experienced advocates.
          </p>
          <div className="mission">
            <div className="lbl">Our mission</div>
            <p>
              The mission of Fidelis Advocates is to provide the best lawful customer service
              possible with dedication and professionalism at national, regional and
              international level.
            </p>
          </div>
          <div className="values">
            <div className="cell">
              <div className="t">Dedication</div>
              <div className="d">Every file handled personally by an advocate.</div>
            </div>
            <div className="cell">
              <div className="t">Professionalism</div>
              <div className="d">Standards held at national and international level.</div>
            </div>
            <div className="cell">
              <div className="t">Results</div>
              <div className="d">A long, successful track record across sectors.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-dark">
        <div className="head">
          <div>
            <div className="eyebrow"><span className="rule" />Our services</div>
            <h2 style={{ marginTop: 18 }}>Fidelis Advocates' practice areas</h2>
          </div>
          <Link className="discuss" to={{ pathname: "/", hash: "#contact" }}>Discuss your matter →</Link>
        </div>
        <div className="grid4">
          {services.map((s) => (
            <Link className="item" to="/services" key={s.n}>
              <span className="n">{s.n}</span>
              <span className="t">{s.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="team">
        <div className="head">
          <div className="eyebrow"><span className="rule" />Our team</div>
          <h2>The advocates</h2>
        </div>
        <div className="team-grid">
          {people.map((p) => (
            <div className="member" key={p.name}>
              <img className="portrait" src={p.image} alt={p.name} />
              <div>
                <div className="name">{p.name}</div>
                <div className="role">{p.role}</div>
              </div>
              <p className="bio">{p.bio}</p>
              {p.email && <a className="mail" href={`mailto:${p.email}`}>{p.email}</a>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="appointment" className="cta-band accent">
        <div>
          <h2>Tell us about your case</h2>
          <p>Call us and one of our advocates will review your matter and respond with next steps.</p>
        </div>
        <div className="btns">
          <a className="b2" href={`tel:${firm.phoneHref}`}>{firm.phone}</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
