import React, { Component } from 'react';
import CardAcc from '../common/CardAcc';
import GuessAcc from '../common/GuessAcc';


class Aside extends Component {
  render() {
    return (
      <div>
        <CardAcc/>
        <div className="suggestions">
          <div className="suggestions__left">
          Suggestions For You
          </div>
          <div className="suggestions__right">
            <a href="!#">See All</a>
          </div>
        </div>
        <GuessAcc/>
        <GuessAcc/>
        <GuessAcc/>
      </div>
    );
  }
}

export default Aside;