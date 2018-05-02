import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
import Nav from "./components/Nav/Nav";
// import Home from "./components/Home/Home";
import './App.css';

class App extends Component {
  render () {
    return <div className="App">
        {/* <Router> */}
        <Nav />
        {/* <Home /> */}
        {/*</Router> */}
       </div>;
  }
}
export default App;
