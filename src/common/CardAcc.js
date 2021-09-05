import React, { Component } from 'react';
import acc from "../assets/images/acc.ico"


class CardAcc extends Component {
  render() {
    return (
      <section className="cardAcc">
        <div className="cardAcc__img">
          <img src={acc} alt="avatar" />
        </div>
        <div>
          <div className="cardAcc__useName">
            ngocchinh3618
          </div>
          <div className="cardAcc__name">
            Ngoc chinh
          </div>
        </div>
        <div className="cardAcc__change">
          <button>Switch</button>
        </div>
      </section>
    );
  }
}

export default CardAcc;