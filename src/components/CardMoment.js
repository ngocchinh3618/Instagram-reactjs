import React from "react";

export default function CardMoment(props) {
  // console.log(img,"img");
  return <div className="moment__box">
      <div className="moment__box__border">
        <img className="moment__box__border__img" src={props.img} alt="moment"/>
      </div>
      <div className="moment__box__name">
        <p className="moment__box__name__txt">
          {props.name}
        </p>
      </div>
  </div>;
}
