import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import addProductIcon from '../../assets/Product_Cart.svg'
import productListIcon from '../../assets/Product_list_icon.svg'

export const SideBar = () => {
  return (
    <div className='SideBar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}} >
            <div className="sidebarItem">
                <img src={addProductIcon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebarItem">
                <img src={productListIcon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}
