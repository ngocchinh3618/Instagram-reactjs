import React, { Component } from "react";
import Like from "../assets/icons/like.svg";
import LikeRed from "../assets/icons/like-red.svg";
class ReactionBtn extends Component {
  constructor(props) {
    super(props);
    this.showImg = this.showImg.bind(this);
    this.state = {};
  }

  showImg(type) {
    console.log("type",type);
    switch (type) {
      case "like":
        return this.props.liked ? LikeRed : Like;
      default:
        return this.props.img;
    }
  }

  render() {
    return (
      <div className="reactionBtn">
        <button onClick={this.props.likeChanged}>
          <img src={this.props.type==="like"?(this.props.liked ? LikeRed : Like):this.props.img} alt="like" />
        </button>
      </div>
    );
  }
}

export default ReactionBtn;
