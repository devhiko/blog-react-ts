import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles/Header.style.css'

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><h4>Paper Blog</h4></Link>
      <Navbar />
    </div>
  )
}

export default Header