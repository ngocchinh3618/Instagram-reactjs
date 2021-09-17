import React, { Component } from "react";
import CardAcc from "../common/CardAcc";
import GuessAcc from "../common/GuessAcc";

class Aside extends Component {
  render() {
    const listGuessAcc = this.props.dataguessAcc.map((item)=>{
      return <GuessAcc img={item.image} username = {item .username} flm={item.flm} fl= {item.fl}/>
    })
    return (
      <div className="aside-right">
        <CardAcc />
        <div className="suggestions">
          <div className="suggestions__left">Suggestions For You</div>
          <div className="suggestions__right">
            <a href="!#">See All</a>
          </div>
        </div>
       {listGuessAcc}
      </div>
    );
  }
}

export default Aside;
