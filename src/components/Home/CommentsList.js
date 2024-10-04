import React from "react";
import style from "./Comments.module.css";
import Comment from "./Comment";
const CommentsList = () => {
  return (
    <div className={style["users-comments-area"]}>
      <h1>
        Kind words from <span>satisfied clients</span>
      </h1>
      <div className={style["users-comments"]}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default CommentsList;
