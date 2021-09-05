import React, { Component } from 'react';
import Aside from '../components/Aside';
import Card from '../components/Card';
import CardSuggesstions from '../components/CardSuggesstions';
import Footer from '../components/Footer';
import Data from  "../data/card-main.json"


class Home extends Component {
  constructor(props) {
    super(props);
    this.changeLiked = this.changeLiked.bind(this);
  }
  changeLiked(id) {
    console.log(id);
    return Data.filter(item => item.id == id).forEach(item=> item.liked = !item.liked);
  }
  
  render() {
    const listCard = Data.map((item)=>
    <Card key={item.id} name = {item.nickname} avatar = {item.avatar} status = {item.status} imgContent = {item.main_content}  liked = {item.liked} likeNumber = {item.liked_number} description ={item.description} cmtNumber={item.comment_number} latestCmt = {item.latest_comment}
    />)
    return (
      <div className="home">
        <div className="home__content">
          
        {listCard}
        <CardSuggesstions/>
        </div>
        <div className="home__aside">
              <Aside/>
              <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;