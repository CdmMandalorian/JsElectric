import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Area from "./components/Area/Area";
import Ser from './components/Ser/Services';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div>
        <Header></Header><Navbar />
        <Switch>
          <Route path="/J's-Electric/" exact component={Home} />
          <Route path="/J's-Electric/about"  component={About} />
          <Route path="/J's-Electric/contact"  component={Contact} />
          <Route path="/J's-Electric/portfolio"  component={Portfolio} />
          <Route path="/J's-Electric/area"  component={Area} />
          <Route path="/J's-Electric/services"  component={Ser} />
        </Switch>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
