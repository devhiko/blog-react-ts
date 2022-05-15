import '../styles/404.style.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>Oops, there is no page like this.</h1>
      <Link to="/">To home</Link>
    </div>
  );
}

export default NotFound;