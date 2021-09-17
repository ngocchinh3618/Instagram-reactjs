import React, { Component } from "react";

class GuessAcc extends Component {

  render() {
    return (
      <section className="guessAcc">
        <div className="guessAcc__img">
          <img src={this.props.img} alt="avatar" />
        </div>
        <div>
          <div className="guessAcc__useName">{this.props.username}</div>
          <div className="guessAcc__name">{this.props.flm}</div>
        </div>
        <div className="guessAcc__change">
          <button>{this.props.fl}</button>
        </div>
      </section>
    );
  }
}

export default GuessAcc;
