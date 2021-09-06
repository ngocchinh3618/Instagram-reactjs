import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../page/Home";
import Explore from "../page/Explore";
import Inbox from "../page/Inbox";
class Directions extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/direct/inbox">
            <Explore />
          </Route>
          <Route path="/explore">
            <Inbox />
          </Route>
          <Route path="/notications">
            <Inbox />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Directions;
