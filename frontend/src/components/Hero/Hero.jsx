import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import "./hero.css"

const Hero = () => {
  return (
    <div className='heroPage'>
        <div className="hero-left">
            <p>NEW ARRIVALS ONLY</p>
            <div className='h2_hand_icon'>
                 <h2>new</h2>
            <img className='hand_icon' src={hand_icon} alt="" />
            </div>
            <h2>collections</h2>
            <h2>for everyone</h2>
            <button>Latest collection 
                <img src={arrow} alt="" />
            </button>
        </div>
        <div className="hero-right">

            <img src={hero_image} alt="Hero Image" />
        </div>

    </div>
  )
}

export default Hero
