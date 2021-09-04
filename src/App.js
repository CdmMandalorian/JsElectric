import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import ServiceArea from "./components/ServiceAreas/ServiceAreas";
import Services from './components/Services/Services';
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
          <Route path="/JsElectric.com" exact component={Home} />
          <Route path="/JsElectric/about"  component={About} />
          <Route path="/JsElectric/contact"  component={Contact} />
          <Route path="/JsElectric/portfolio"  component={Portfolio} />
          <Route path="/JsElectric/serviceArea"  component={ServiceArea} />
          <Route path="/JsElectric/services"  component={Services} />
        </Switch>
        <ScrollToTop />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
