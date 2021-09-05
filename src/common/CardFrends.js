import React, { Component } from "react";
import Btn from "./Btn";
import AccImg from "../assets/images/songjongki_1.jpg";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";

class CardFrends extends Component {
  render() {
    return (
      <div className="cardFrend">
        <div className="cardFrend__btn">
          <button>
            <IconContext.Provider
              className="App-logo"
              value={{  size: "16px" }}
            >
            <CgClose />
            </IconContext.Provider>
          </button>
        </div>
        <div className="cardFrend__img">
          <img src={AccImg} alt="" />
        </div>
        <div className="cardFrend__name">
          <a href="!#">Tan y</a>
        </div>
        <div className="cardFrend__description">
          <p>Follow you</p>
        </div>
        <div>
          <Btn txt="Follow" />
        </div>
      </div>
    );
  }
}

export default CardFrends;
