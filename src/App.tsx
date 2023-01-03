import { BrowserRouter as Router, Route, Switch as Routes } from "react-router-dom";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import "./styles/App.style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/blogs/:id" component={BlogDetails} />
          <Route exact path="*" component={NotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
