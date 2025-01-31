import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums.jsx'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx'
import { ShopContext } from '../Context/ShopContext.jsx'
import Description from  '../components/Description/Description.jsx'

const Product = () => {

const {all_product} = useContext(ShopContext);
const {productId} = useParams()
const product = all_product.find((e)=> e.id=== Number(productId));



  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description />
    </div>
  )
}

export default Product