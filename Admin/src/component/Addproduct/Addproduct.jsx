import React from 'react';
import'./Addproduct.css';
import uploadArea from'../../assets/upload_area.svg';
import { useState } from 'react';


 export const Addproduct = () => {

  
  const [image,setImage]= useState(false);

const [productDetails,setProductDetails] = useState({
  name:'',
  image:'',
  category:'',
  old_price:'',
  new_price:''
})  
// css krde

const imageHandler =(e)=>{
setImage(e.target.files[0]);
}

const changeHandler =(e)=>{
setProductDetails({...productDetails,[e.target.name]:e.target.value});
}

const addProduct= async()=>{
  let responseData;
  let product= productDetails;


let formData = new FormData();
formData.append('product',image);


await fetch('http:localhost:8080/upload',{
  method:'POST',
  headers:{
    Accept:'application/json',
  },
  body: formData,

}).then((resp)=>resp.json()).then((data)=>responseData=data)


if(responseData.success){
product.image= responseData.image_url
console.log(product);
await fetch('http://localhost:8080/addproducts',{

  method:'POST',
  headers:{
    Accept:'application/json',
    'content-Type':'application/json'
  },
  body:JSON.stringify(product),
}).then((resp)=>resp.json()).then((data)=>{data.success?alert("product added"):alert("FAILED")})
}}
 
  return (
    <div className='Addproduct'>
     <div className="add_product">
      <p>PRODUCT TITLE</p>
      <input type="text" name='' placeholder='type'value={productDetails.name} onChange={changeHandler}/>
     </div>
     <div className="prices">
     <div className="price">
      <p>PRICE</p>
      <input type="Number" name='old_price'placeholder='type'value={productDetails.old_price} onChange={changeHandler}/>
     </div>
     <div className="offer_price">
      <p>OFFER PRICE</p>
      <input type="Number" name='new_price' placeholder='type'value={productDetails.new_price} onChange={changeHandler}/>
     </div>
     </div>
     <div className="category">
      <p>Product CATEGORY</p>
      <select type="Number" name='category' placeholder=''value={productDetails.name} onChange={changeHandler}>
        <option value="WOMEN">WOMEN</option>
        <option value="MEN">MEN</option>
        <option value="KIDS">KID</option>
      </select>
     </div>
      <div className="itemField">
        <label htmlFor="imageInput">
          <img src={image?URL.createObjectURL(image):uploadArea} alt="" />
        </label>
        <input type="file" id='imageInput'name='image' onChange={imageHandler} hidden />
      </div>
      <button onClick={()=>{Addproduct()}}>ADD</button>
      
    </div>
  )
}

export default Addproduct
