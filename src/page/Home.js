import React, { useEffect } from "react";
import Aside from "../components/Aside";
import Card from "../components/Card";
import CardSuggesstions from "../components/CardSuggesstions";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const counter = useSelector((state) => state.dataCard.data);
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
  useEffect(() => {
    dispatch({
      type: "GETDATA",
    });
  }, []);
  return (
    <div className="home">
      <div className="home__content">{counterList}</div>
      <div className="home__aside">
        <Aside />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
