import React, { useEffect,useState } from 'react'
import './ListProduct.css'
import crossIcon  from '../../assets/cross_icon.png'

export const ListProduct =() =>{
  const[allProducts,setAllProducts]=useState([]);



  const fetchInfo=async(id)=>{
  await fetch('http://localhost:8080/allproducts')
  .then((res)=> res.json())
  .then ((data)=> {setAllProducts(data)})
}  


useEffect(()=>{
  fetchInfo();
},[])
   





const removeProduct =async (id) =>{
  await fetch('http//localhost:8080/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
    'content-Type':'application/json'

    },
    body:JSON.stringify({id:id})
  
  })
    await fetchInfo();
}    






  return (
    <div className='ListProduct'>
      <div className="heading">
        <h1>All Product List</h1>
        <div className="Title">
          <p>Products</p>
          <p>Title</p>
          <p>Old price</p>
          <p>New price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
      </div>
      <div>



        {allProducts.map((product,index) => {
        return <div className="Product">
          <div className="ProductDetail">
          <img className="ProductImage" src={product.image} alt="" />
         <p>{product.name}</p>
         <p>${product.old_price}</p>
         <p>${product.new_price}</p>
         <p>${product.category}</p>
         <img  onClick={() => removeProduct[product.id]} className='CrossIcon'src={crossIcon} alt="" />
          </div>
          <hr />
        </div>
        })}
      </div>
    </div>
  )


}
