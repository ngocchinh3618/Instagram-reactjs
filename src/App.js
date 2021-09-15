import React, { Component } from "react";
import "./assets/sass/_main.scss"
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import Directions from "./router/Directions";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "./components/Aside";
import CardSuggesstions from "./components/CardSuggesstions";

class App extends Component {
  render() {
    const directions = !(localStorage.getItem("user"))? <Login/> : (
      <Router>
         <div className="App">
           <Navbar />
           <div className="container">
             <Directions />
           </div>
         </div>
       </Router>
    )
    return (
      <div>
        {directions}
      </div>
    );
  }
}

export default App;
