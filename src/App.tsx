import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Switch as Routes, Route } from 'react-router-dom';
import './styles/App.style.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/blogs/:id' component={BlogDetails} />
          <Route exact path='*' component={NotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
