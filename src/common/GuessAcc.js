import React, { Component } from "react";
import acc from "../assets/images/acc.ico";

class GuessAcc extends Component {
  render() {
    return (
      <section className="guessAcc">
        <div className="guessAcc__img">
          <img src={acc} alt="avatar" />
        </div>
        <div>
          <div className="guessAcc__useName">ngocchinh3618</div>
          <div className="guessAcc__name">Follows you</div>
        </div>
        <div className="guessAcc__change">
          <button>Follow</button>
        </div>
      </section>
    );
  }
}

export default GuessAcc;
