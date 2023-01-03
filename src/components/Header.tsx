import { Link } from "react-router-dom";
import "../styles/Header.style.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h4>Paper Blog</h4>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
