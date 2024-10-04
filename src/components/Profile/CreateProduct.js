import React, { useReducer } from "react";
import style from "./CreateProduct.module.css";
const addProductHandler = (prev, action)=>{
  if(action.type === "PROD_NAME"){
    return {
     ...prev,
      product_name: action.value
    }
  }
  else if(action.type === "PROD_CATEGORY"){
    return {
     ...prev,
      product_category: action.value
    }
  }
  else if(action.type === "PROD_DESC"){
    return {
     ...prev,
      product_desc: action.value
    }
  }
  else if(action.type === "PROD_PRICE"){
    return {
     ...prev,
      product_price: action.value
    }
  }
}
const CreateProduct = () => {
  const [ productData, productDispatch ] = useReducer(addProductHandler,{product_name:"",product_category:"",product_desc:"",product_price:""});
  const submitHandler = (ev) => {
    ev.preventDefault();
    // Make API call to add product
    fetch("http://localhost:8000/products",{
      method:"POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    // Clear form data
    productDispatch({type:"PROD_NAME",value:""});
    productDispatch({type:"PROD_CATEGORY",value:""});
    productDispatch({type:"PROD_DESC",value:""});
    productDispatch({type:"PROD_PRICE",value:""});
  }
  return (
    <div className={style["form-container"]}>
      <h1 className={style["hello-message"]}>Create A New Product</h1>
      <form className={style["add-product-from"]} onSubmit={(e)=>submitHandler(e)}>
        <div className={style["input-group"]}>
          <label >Product Name </label>
          <input
            type="text"
            id="productName"
            name="product_name"
            required
            placeholder="Enter Product Name"
            onChange={(event)=>productDispatch({type:"PROD_NAME",value:event.target.value})}
            value={productData["product_name"]}
          />
        </div>
        <div className={style["input-group"]}>
          <label >Product Category </label>
          <input
            type="text"
            id="productCategory"
            name="product_category"
            required
            placeholder="Enter Product Category"
            onChange={(event)=>productDispatch({type:"PROD_CATEGORY",value:event.target.value})}
            value={productData["product_category"]}
          />
        </div>
        <div className={style["input-group"]}>
          <label >Product Description </label>
          <input
            type="text"
            id="productDescription"
            name="product_desc"
            required
            placeholder="Enter Product Description"
            onChange={(event)=>productDispatch({type:"PROD_DESC",value:event.target.value})}
            value={productData["product_desc"]}
          />
        </div>
        <div className={style["input-group"]}>
          <label>Product Price </label>
          <input
            type="text"
            id="productPrice"
            name="product_Price"
            required
            placeholder="Enter Product Price"
            onChange={(event)=>productDispatch({type:"PROD_PRICE",value:event.target.value})}
            value={productData["product_price"]}

          />
        </div>
        <input type="submit" className={style["submit-btn"]} />
      </form>
    </div>
  );
};

export default CreateProduct;
