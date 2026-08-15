import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar__name">Sorim Tim</h1>

      <ul className="navbar__links">
        {/*Login + Register*/}
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>

        {/*Dropdown Menu*/}
        <li
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="dropdown-btn">Menu ▼ </button>

          {open && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
