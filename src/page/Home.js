import React, { useEffect } from "react";
import Aside from "../components/Aside";
import Card from "../components/Card";
import CardSuggesstions from "../components/CardSuggesstions";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import CardMoment from "../components/CardMoment";

function Home() {
  const counter = useSelector((state) => state.dataCard.data);
  const dataMoment = useSelector((state) => state.dataMoment.data);
  const guessAcc = useSelector((state) => state.dataSuggestions.data);
  console.log("object12", dataMoment);
  const dispatch = useDispatch();

  const counterList = counter.map((item, index) => {
    const suggest = index == 0 ? <CardSuggesstions /> : "";
    return (
      <div key={item.id}>
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
          likeChanged={() => dispatch({ type: "LIKECHANGE", id: item.id })}
        />
        {suggest}
      </div>
    );
  });

  const dataMomentCard = dataMoment.map((item, i) =>(
    <CardMoment img = {item.image} name = {item.username}/>
  ));


  useEffect(() => {
    dispatch({
      type: "GETDATA",
    });
    dispatch({
      type: "GETMOMENT",
    });
    dispatch({
      type: "GETDATASUGGESTIONS",
    });
  }, []);
  return (
    <div className="home">
      <div className="home__content">
        <div className="card moment">
          {dataMomentCard}
        </div>
        {counterList}
      </div>
      <div className="home__aside">
        <Aside dataguessAcc = {guessAcc}/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
