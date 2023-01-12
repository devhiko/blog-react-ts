import { Link } from "react-router-dom";
import "../styles/Login.style.css";

const Login = () => {
  return (
    <div title="log" className="login">
      <form title="log-form" action="">
        <label>Username:</label>
        <input type="text" placeholder="john doe" /> <br />
        <label>Password:</label>
        <input type="password" placeholder="12345" /> <br />
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
