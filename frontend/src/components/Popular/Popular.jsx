import React from 'react'
import "./Popular.css"
import Items from '../Items/Items'
import { useState, useEffect} from 'react'
const Popular = () => {

  
  const [popularInWomen, setPopulanInWomen] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/popularinwomen')
    .then((res)=> res.json()).then((data) => setPopulanInWomen(data))
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
    <div className='popular-item'>
        {popularInWomen.map((item,i)=>{
            return <>
            <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
            </>
            })}
        
    </div>
    </div>
  )
}

export default Popular

