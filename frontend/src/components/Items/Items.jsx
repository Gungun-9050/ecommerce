import React from 'react'
import "./Items.css"
import {Link} from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='item'>
        <Link  to={`/product/${props.id}`}><img src={props.image} alt="" /> </Link>
        <p>{props.name}</p>
       <div className='items-prices'>
        <div className='items-prices-new'>
            {props.new_price}
        </div>
        <div className='items-prices-old'>
            {props.old_price}
        </div>
       </div>
    </div>
  )
}

export default Items
