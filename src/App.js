import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Directions from "./router/Directions";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/sass/_main.scss"
import Aside from "./components/Aside";
import Login from "./page/Login";
import CardSuggesstions from "./components/CardSuggesstions";

class App extends Component {
  render() {
    return (
    // <CardSuggesstions/>
        <Login/>
      // <Router>
      //   <div className="App">
      //     <Navbar />
      //     <div className="container">
      //       <Directions />
      //     </div>
      //   </div>
      // </Router>
    );
  }
}

export default App;
