import React from 'react'
import'./NewCollection.css'
import Items from '../Items/Items'
import { useState, useEffect } from 'react'


const NewCollection = () => {

  const [new_collection, setNew_collection] = useState([])

    useEffect(() => {
      fetch('http://localhost:8080/newcollection')
      .then((res) => res.json()).then((data) => setNew_collection(data))
    },[])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
        {new_collection.map((item,i)=>{
            return <>
            <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>
            </>
            })}
        </div>
      
    </div>
  )
}

export default NewCollection


// 