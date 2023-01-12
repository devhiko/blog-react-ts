import { Link } from "react-router-dom";
import "../styles/Navbar.style.css";

const Navbar = () => {
  return (
    <div title="nav" className="navbar">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
