import React from 'react'
import Logo from '../assets/logo.png'
import Whatsapp from '../assets/whatsapp_icon.png'
import Instagram from '../assets/instagram_icon.png'
import Pinterest from '../assets/pintester_icon.png'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='Logo'>
            <img src={Logo} alt="Logo" />
            <h1>SHOPPER</h1>
        </div>
        <div className='Links'>
            <p>Company</p>
            <p>Products</p>
            <p>Offices</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div className='Icon'>
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={Instagram} alt="Imstagram" />
            <img src={Pinterest} alt="Pinterest" />
        </div>
        <hr />

        <div className="Copyright">
            Copyright @ 2024 - All Right Reserved.
        </div>

    </div>
  )
}

export default Footer
