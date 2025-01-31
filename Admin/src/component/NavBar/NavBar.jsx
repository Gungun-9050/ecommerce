import React from 'react'
import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import './NavBar.css'


export const NavBar = () => {
  return (
    <div className='NavBar'>
        <img src={navLogo} alt="" />
        <img src={navProfile} alt="" />
    </div>
  )
}
