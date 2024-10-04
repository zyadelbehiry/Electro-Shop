import React from "react";
import style from "./Products.module.css";
import useFetch from "../../Custom Hooks/useFetch";
import Product from "./Product";
import Spinner from "../../UI/Spinner";
import ProductCategory from "./ProductCategory";
const Products = () => {
  const { data } = useFetch("https://test-83a9a-default-rtdb.firebaseio.com/products.json");
  return (
    <div className={style["products-container"]}>
      {!data && <Spinner />}
      {data && (
        <>
          <ProductCategory categoryName="Labtops">
            <div className={style.products}>
              {data?.map((product, index) => {
                if (product["product_category"] === "labtop") {
                  return <Product key={index} product={product} />;
                }
              })}
            </div>
          </ProductCategory>
          <ProductCategory categoryName="Smart Phones">
            <div className={style.products}>
              {data?.map((product, index) => {
                if (product["product_category"] === "smart phones") {
                  return <Product key={index} product={product} />;
                }
              })}
            </div>
          </ProductCategory>
        </>
      )}
    </div>
  );
};
export default Products;
