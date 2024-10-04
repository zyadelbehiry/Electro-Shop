import React, { useState } from "react";
import style from "./AdminDashboard.module.css";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className={style["dashboard-container"]}>
      <aside className={style["dash-side-bar"]}>
        <h1 className={style["dash-title"]}>Admin Panel</h1>
        <ul className={style["dash-menu"]}>
          <li className={style["active"]}>
            <NavLink className={style["aside-link"]} to="/admin-dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink className={style["aside-link"]} to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink className={style["aside-link"]} to="/help">Help</NavLink>
          </li>
          <li>
            <NavLink className={style["aside-link"]} to="#">Settings</NavLink>
          </li>
        </ul>
      </aside>
      <main>
        <h1 className={style["dashboard-header"]}>Admin Dashboard</h1>
        <div className={style["dashboard-cards"]}>
            <NavLink to="create-product" className={style["dashboard-card"]}>
              <h3>Add New Product</h3>
              <h1 className={style["card-icon"]}><i className='bx bxs-cart-add'></i></h1>
            </NavLink>
            <NavLink className={style["dashboard-card"]}>
            <h3>Edit a Product</h3>
            <h1 className={style["card-icon"]}><i className='bx bxs-edit'></i></h1>
            </NavLink>
            <NavLink  className={style["dashboard-card"]}>
            <h3>Delete a Product</h3>
            <h1 className={style["card-icon"]}><i className='bx bx-trash'></i></h1>
            </NavLink>
        </div>
      </main>
    </div>
  )
};

export default AdminDashboard;
