import React from 'react'
import style from './Comment.module.css'
import userImg from '../../Assets/man-852770_640.jpg'
const Comment = () => {
  return (
    <div className={style["comment"]}>
        <div className={style["user-details"]}>
          <img src={userImg} className={style["user-image"]} alt="userImg" />
          <div className={style["user-desc"]} alt="userImg">
            <h3 className={style["user-name"]}>Michael Johnson</h3>
            <small className={style["user-position"]}>Michael Johnson</small>
          </div>
        </div>
        <article>
          Collaborating with Zyad was an absolute pleasure. His
          professionalism, promptness, and dedication to delivering exceptional
          results were evident throughout our project. Adrian's enthusiasm for
          every facet of development truly stands out. If you're seeking to
          elevate your website and elevate your brand, Adrian is the ideal
          partner.
        </article>
      </div>
  )
}

export default Comment
