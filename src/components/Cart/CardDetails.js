import React from "react";
import style from "./CardDetails.module.css";
const CardDetails = () => {
  return (
    <form className={style["card-form"]}>
      <p className={style["card-title"]}>Card Details</p>
      <div className={style["input-group"]}>
      <label>Name On Card</label>
      <input type="text" className={style["ipnut"]} placeholder="eg. Zyad Elbehiry" />
      </div>
      <div className={style["input-group"]}>
      <label>Card Number</label>
      <input type="password" placeholder="...   ...   ..." />
      </div>
      <div className={style["input-group"]}>
      <label>Expiration Date</label>
      <input type="date" />
      </div>
    </form>
  );
};

export default CardDetails;
