import { Link } from "react-router-dom";
import { TopBar } from "../components/Shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { services, featured, firm } from "../data";

export default function Services() {
  return (
    <div className="shell">
      <TopBar />
      <Nav active="services" />

      {/* Hero */}
      <section className="svc-hero">
        <div className="copy">
          <div className="crumbs">
            <Link to="/">Home</Link><span>/</span><span className="cur">Our Services</span>
          </div>
          <h1>Fidelis Advocate's <span className="em">Services</span></h1>
          <p className="lede">
            <strong>Fidelis Advocates</strong> offers a wide range of legal services covering
            different law domains dominated by administrative and public law, company law,
            commercial law, intellectual property law, mergers and acquisitions, tax law,
            banking law, labor law, criminal law. In all domains the following may attract your attention.
          </p>
        </div>
        <div className="art">
          <img src="/images/about-firm.jpg" alt="Advocates in consultation" />
        </div>
      </section>

      {/* Detailed list */}
      <section id="services" className="svc-list-wrap">
        <div className="svc-list-head">
          <h2>Our Services</h2>
          <div className="count">Sixteen practice areas</div>
        </div>
        <div className="svc-list">
          {services.map((s, i) => (
            <div className="svc-row" key={s.name}>
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{s.name}</h3>
                <div className="lead">{s.lead}</div>
              </div>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured practices */}
      <section className="featured-wrap">
        <div className="feat dark">
          <div className="media"><img src={featured[0].image} alt={featured[0].name} /></div>
          <div className="txt">
            <div className="lbl">Featured practice</div>
            <h3>{featured[0].name}</h3>
            <p>{featured[0].body}</p>
          </div>
        </div>
        <div className="feat accent">
          <div className="txt">
            <div className="lbl">Featured practice</div>
            <h3>{featured[1].name}</h3>
            <p>{featured[1].body}</p>
          </div>
          <div className="media"><img src={featured[1].image} alt={featured[1].name} /></div>
        </div>
      </section>

      {/* CTA */}
      <section id="appointment" className="cta-band dark">
        <div>
          <h2>Not sure which service you need?</h2>
          <p>Call us and an advocate will point you to the right practice.</p>
        </div>
        <div className="btns">
          <a className="b2" href={`tel:${firm.phoneHref}`}>{firm.phone}</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
