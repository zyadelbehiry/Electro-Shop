import React from "react";
import style from './ProductCategory.module.css'
import animations from '../../Animations/Animations.module.css'
const ProductCategory = (props) => {
  return (
    <section className={style["category"]}>
      <h1 className={`${style["category-name"]} ${animations["move-right"]}`}>{props.categoryName}</h1>
        {props.children}
    </section>
  );
};

export default ProductCategory;
