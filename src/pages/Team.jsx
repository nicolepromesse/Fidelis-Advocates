import { Link } from "react-router-dom";
import { TopBar } from "../components/Shared";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { team, admin } from "../data";

const GROUPS = ["Managing Partners", "Associate Partners", "Office Administration"];

function Person({ p }) {
  const paras = p.fullBio && p.fullBio.length ? p.fullBio : [p.bio];
  return (
    <article className="person">
      <div className="person-head">
        <img className="portrait" src={p.image} alt={p.name} />
        <div className="person-meta">
          <h3>{p.name}</h3>
          <div className="role">{p.role}</div>
          <ul className="lines">
            {p.email && (
              <li><span className="k">Email</span> <a href={`mailto:${p.email}`}>{p.email}</a></li>
            )}
            {p.phone && (
              <li><span className="k">Phone</span> <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a></li>
            )}
          </ul>
        </div>
      </div>
      <div className="person-bio">
        {paras.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    </article>
  );
}

export default function Team() {
  const people = [...team, admin];

  return (
    <div className="shell">
      <TopBar />
      <Nav active="team" />

      <section className="page-hero">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="cur">Our Team</span>
        </div>
        <div className="eyebrow"><span className="rule" />Our team</div>
        <h1>Our <span className="em">Team</span></h1>
      </section>

      <section className="team-page">
        {GROUPS.map((g) => {
          const members = people.filter((p) => p.group === g);
          if (!members.length) return null;
          return (
            <div className="team-group" key={g}>
              <h2 className="group-title">{g}</h2>
              {members.map((p) => <Person key={p.name} p={p} />)}
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
