import { Link } from "react-router-dom";
import "../styles/Login.style.css";

const Login = () => {
  return (
    <div className="login">
      <form action="">
        <label>Username:</label>
        <input type="text" /> <br />
        <label>Password:</label>
        <input type="password" /> <br />
        <input type="submit" value="Log In" />
        <Link to="/forgot">
          <small>Forgot Password</small>
        </Link>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
