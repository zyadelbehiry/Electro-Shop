import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router'

const ProductsLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProductsLayout
