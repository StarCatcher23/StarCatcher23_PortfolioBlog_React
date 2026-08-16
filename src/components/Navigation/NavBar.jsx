import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function NavBar({ onLoginClick, onRegisterClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar__name">Sorim Tim</h1>

      <ul className="navbar__links">
        {/*Login + Register*/}
        <li>
          <button className="navbar__btn" onClick={onLoginClick}>
            Login
          </button>
        </li>
        <li>
          <button className="navbar__btn" onClick={onRegisterClick}>
            Register
          </button>
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
                <Link to="/home" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpen(false)}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={() => setOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
