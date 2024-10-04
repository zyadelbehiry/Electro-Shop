import React from 'react'
import style from './CartItem.module.css'
const CartItem = ({indx,item,removeFromCartHandler,quantityChangeHandler}) => {
  return (
    <div key={item.id} className={style["cart-item"]}>
                  <div className={style["item-desc"]}>
                    <h2>{item.product_name}</h2>
                    <p>{item.product_price.toFixed(2)}$</p>
                  </div>
                  <div className={style["item-control-btns"]}>
                    <button
                      className={style["remove-btn"]}
                      onClick={(e)=>removeFromCartHandler(e,indx)}
                    >
                      Remove
                    </button>
                    <input
                      type="number"
                      min={0}
                      value={item.quantity}
                      onChange={(e) => {
                        quantityChangeHandler(e, item);
                      }}
                    />
                  </div>
                </div>
  )
}

export default CartItem
