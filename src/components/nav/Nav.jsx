import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <Link className="nav__link border-left" to="/about">
            About
          </Link>

          <Link className="nav__link" to="/projects">
            Projects
          </Link>

          <Link className="nav__link border-right" to="/contact">
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
}
