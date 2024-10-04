import React from "react";
import style from "./Home.module.css";
import animations from "../../Animations/Animations.module.css"
import HomeCards from "./HomeCards";
import CommentsList from "./CommentsList";
const Home = () => {
  return (
    <>
      <main className={style["home"]}>
        <div className={style["brand-info-container"]}>
          <small className={`${style["small-qoute"]} ${animations["move-down"]}`}>
            Dynamic Web Magic with React.js
          </small>
          <h1 className={`${style["brand-title"]} ${animations["move-right"]}`}>
            Transforming Concepts into Seamless <span>User Experiences</span>
          </h1>
          <p className={animations["move-up"]}>Hi! I’m Zyad, a React.js Developer based in Egypt.</p>
        </div>
        <HomeCards />
        <CommentsList />
      </main>
    </>
  );
};
export default Home;
