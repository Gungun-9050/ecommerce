import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_icon_dull from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} =useContext(ShopContext)
  
  
  return (
    <div className='productDisplay'>
      <div className="productDisplay_left">
        <div className='shortImg'>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className='mainImg'>
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay_right">
        <h1>{product.name}</h1>
        <div className="rating">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productPrice">
          <div className="productPrice_old">${product.old_price}</div>
          <div className="productPrice_new">${product.new_price}</div>
        </div>
        <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment</p>
        <div className="size">
          <p>Select Size</p>
          <button>S</button>
          <button>M</button>
          <button>X</button>
          <button>XL</button>
          <button>XXl</button>
        </div>
        <button className='addCart' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <div className="otherDetail">
          <p><b>category</b>: Women, T-Shirt, Crop Top</p>
          <p><b>Tags</b>: Modern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
//thek h?