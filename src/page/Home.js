import React, { Component } from "react";
import Aside from "../components/Aside";
import Card from "../components/Card";
import CardSuggesstions from "../components/CardSuggesstions";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import * as actionTypes from "../store/actiontypes";

class Home extends Component {
  constructor(props) {
    super(props);
    this.changeLiked = this.changeLiked.bind(this);
  }
  componentDidMount(){
    this.props.getDataCardMain()
  }

  changeLiked(id) {
    console.log(id);
    return this.props.card.filter((item) => item.id == id).forEach(
      (item) => (item.liked = !item.liked)
    );
  }

  render() {
    const listCard = this.props.card.map((item, index) => {
      const suggest = (index == 0)?<CardSuggesstions/>:""
      return <div key={item.id}>
        <Card
      
      id={item.id}
      name={item.nickname}
      avatar={item.avatar}
      status={item.status}
      imgContent={item.main_content}
      liked={item.liked}
      likeNumber={item.liked_number}
      description={item.description}
      cmtNumber={item.comment_number}
      latestCmt={item.latest_comment}
    />
      {suggest}
      </div>
    }
        
        
    );

    return (
      <div className="home">
        <div className="home__content">{listCard}</div>
        <div className="home__aside">
          <Aside />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.dataCard.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getDataCardMain: () => dispatch({type: actionTypes.GETDATA}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
