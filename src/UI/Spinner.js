import React from "react";
import style from "./Spinner.module.css";

const Spinner = ()=>{
    return (
        <div className={style['spinner-container']}>
            <div className={style['spinner']}></div>
        </div>
    )
}
export default Spinner;