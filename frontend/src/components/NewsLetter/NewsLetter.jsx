import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive on your e-mail</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email"placeholder='YOUR EMAL ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
