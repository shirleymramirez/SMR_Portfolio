import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import './App.css';

class App extends Component {
  render () {
    return <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Portfolio" component={Portfolio} />
          </div>
        </Router>
      </div>;
  }
}
export default App;
