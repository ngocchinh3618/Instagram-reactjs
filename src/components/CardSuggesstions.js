import React, { Component } from "react";
import CardFrends from "../common/CardFrends";
import Data from "../data/card-main.json";

class CardSuggesstions extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    //  const listCardS = Data.map((item) => 
    //     <CardFrends  className="d-block w-100" 
    //   name={item.nickname}
    //   avatar={item.avatar}
    // />
      
        
    // );
    return (
      <div className="card-suggesstions">
        <div className="card-suggesstions__top">
          <div className="card-suggesstions__top__left">Suggesstions</div>
          <div>
            <a className="card-suggesstions__top__right" href="!#">
              See All
            </a>
          </div>
        </div>
        <div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <div className="d-flex">
                  <CardFrends className="d-block w-100" />
                  <CardFrends className="d-block w-100" />
                  <CardFrends className="d-block w-100" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex">
                  <CardFrends className="d-block w-100" />
                  <CardFrends className="d-block w-100" />
                  <CardFrends className="d-block w-100" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex">
                  <CardFrends className="d-block w-100" />
                  <CardFrends className="d-block w-100" />
                  <CardFrends className="d-block w-100" />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev color-btn-control"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next color-btn-control"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSuggesstions;
