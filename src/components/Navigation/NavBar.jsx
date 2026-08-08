import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__brand">Sorim Tim</h1>

      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>

        <li className="navbar__item">
          <Link to="/about" className="navbar__link">About Me</Link>
        </li>

        <li className="navbar__item">
          <Link to="/portfolio" className="navbar__link">Portfolio</Link>
        </li>

        <li className="navbar__item">
          <Link to="/blog" className="navbar__link">Blog</Link>
        </li>

        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
