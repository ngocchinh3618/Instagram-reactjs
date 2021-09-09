import React, { Component } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import Cmt from "../assets/icons/cmt.svg";
import Share from "../assets/icons/share.svg";
import Save from "../assets/icons/save.svg";
import Emoticon from "../assets/icons/emoticon.svg";
import ReactionBtn from "../common/ReactionBtn";
import CardImgSlider from "./CardImgSlider";
import getRandomIntInclusive from "../helpers/common"

class Card extends Component {
  render() {
    const listCmt = this.props.latestCmt.map((i, index) => (
      <div key={index} className="card__end__cmt__name">
        <a href="!#">{i.name} 🥰🥰🥰 </a>
        <span>{i.cmt}</span>
      </div>
    ));
    return (
      <article className="card">
        <header className="card__top">
          <div className="card__top__left">
            <a href="!#">
              <img
                className="card__top__left__avatar"
                src={this.props.avatar.replace("3", `${getRandomIntInclusive(1,70)}`)}
                alt="account"
              />
            </a>
          </div>
          <div className="card__top__center">
            <div className="card__top__center__name">
              <a className="card__top__center__name__a" href="!#">
                {this.props.name}
              </a>
            </div>
            <div>
              <a className="card__top__center__name__country" href="!#">
                {this.props.status}
              </a>
            </div>
          </div>
          <div className="card__top__right">
            <HiDotsHorizontal
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <button className="modal-content__txt">Báo cáo</button>
                  <button className="modal-content__txt">bỏ theo dõi</button>
                  <button className="modal-content__txt">
                    Đi tới bài viết
                  </button>
                  <button className="modal-content__txt">Chia sẻ lên...</button>
                  <button className="modal-content__txt">
                    Sao chép liên kết
                  </button>
                  <button className="modal-content__txt">Nhúng</button>
                  <button className="modal-content__txt">Hủy</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="card__center">
          <div className="card__center__box">
            <CardImgSlider imgData = {this.props.imgContent} carouselId = {this.props.id}/>
          </div>
          <div className="carousel d-none">
            <img src="#" alt="img" />
          </div>
        </div>
        <div className="card__end">
          <section className="card__end__icon">
            <ReactionBtn
              liked={this.props.liked}
              likeChanged={this.props.likeChanged}
              type="like"
            />
            <ReactionBtn img={Cmt} />
            <ReactionBtn img={Share} />
            <ReactionBtn img={Save} />
          </section>
          <section className="card__end__like">
            <div>
              <a className="card__end__like__a" href="!#">
                <span>{this.props.likeNumber}</span> likes
              </a>
            </div>
          </section>
          <div className="card__end__cmt">
            <div className="card__end__cmt__name">
              <a href="!#">songjoongki.kg</a>{" "}
              <span>{this.props.description}</span>
            </div>
            <div className="card__end__cmt__allcmt">
              <a href="!#">
                View all <span>{this.props.cmtNumber}</span> comments
              </a>
            </div>
            {listCmt}
          </div>
          <div className="card__end__cmt__day">
            <a href="!#">
              <span>3</span> Days ago
            </a>
          </div>
          <section className="card__end__post">
            <div className="card__end__post__left">
              <img src={Emoticon} alt="Emoticon" />
            </div>
            <div className="card__end__post__center">
              <input
                className="hihi"
                type="text"
                placeholder="Add a comment..."
              />
            </div>
            <div className="card__end__post__right">
              <button>Post</button>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default Card;
