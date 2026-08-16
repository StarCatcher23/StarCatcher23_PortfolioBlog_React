import "./menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

<li
  className="dropdown"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
  <button className="dropdown-btn">Menu ▼</button>

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
}
