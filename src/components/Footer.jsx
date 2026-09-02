import { Link } from "react-router-dom";
import { firm, team } from "../data";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="cols">
        <div className="brand col">
          <Link className="brand" to="/" style={{ padding: 0 }}>
            <img className="badge" src="/images/logo-badge.png" alt="Fidelis Advocates logo" style={{ width: 46, height: 46 }} />
            <div>
              <div className="name" style={{ fontSize: 19 }}>{firm.name}</div>
              <div className="tag" style={{ fontSize: 14, color: "var(--pink)" }}>{firm.tagline}</div>
            </div>
          </Link>
          <p className="blurb">
            Based in Kigali, FIDELIS ADVOCATES is an experienced law firm with a long
            and successful track record of offering high quality legal services to a
            wide range of clients, including individuals, with an overwhelming focus on
            business entities.
          </p>
          <Link className="learn" to="/services">Learn more about our practices</Link>
        </div>

        <div className="col">
          <h4>Contact details</h4>
          <div className="contact">
            Phone: {firm.phone}<br />
            Email: <a href={`mailto:${firm.email}`}>{firm.email}</a><br />
            {firm.address}
          </div>
        </div>

        <div className="col">
          <h4>Advocates</h4>
          <div className="advocates">
            {team.map((m) => (
              <Link key={m.name} to="/team">{m.name}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="links">
          <a href="#">Sitemap</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Disclaimer</a>
        </div>
        <div>© {new Date().getFullYear()} Fidelis Advocates</div>
      </div>
    </footer>
  );
}
