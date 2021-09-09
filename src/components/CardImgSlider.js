import React, { Component } from "react";

class CardImgSlider extends Component {
  render() {
    console.log(" this.props.imgContent", this.props.imgData);
    const listImg = this.props.imgData.map((i, index) => {
      if (index == 0) {
        return (
          <div key={index} className="carousel-item active" style={{transitionDuration:" 1s"}}>
          <img className="WHImg" src={i} className="d-block w-100" alt="..." />
        </div>
        );
      } else
        return (
          <div key={index} className="carousel-item" style={{transitionDuration:" 1s"}}>
            <img className="WHImg" className="d-block w-100" src={i} alt="First slide" />
          </div>
        );
    });
  //  const carouselBtn = this.props.imgData.map((i, index)=>{
  //   if(index >= ){}
  //  })
    const carouselBtn = (this.props.imgData.length > 1) ? (
      <div id={`carouselExampleIndicators${this.props.carouselId}`} data-bs-interval="false" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button  type="button" data-bs-target={`#carouselExampleIndicators${this.props.carouselId}`} data-bs-slide-to={0} className="active btn-carousel" aria-current="true" aria-label="Slide 1" />
            <button className="btn-carousel" type="button" data-bs-target={`#carouselExampleIndicators${this.props.carouselId}`} data-bs-slide-to={1} aria-label="Slide 2" />
            <button className="btn-carousel" type="button" data-bs-target={`#carouselExampleIndicators${this.props.carouselId}`} data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            {listImg}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${this.props.carouselId}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${this.props.carouselId}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    ):
   (
    <img className="WHImg" src={this.props.imgData[0]} className="d-block w-100" alt="..." />
   ) 
  

    return (
      <div>
        {carouselBtn}

      </div>
    );
  }
}

export default CardImgSlider;