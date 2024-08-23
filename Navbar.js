import React, { useRef } from 'react'
import  './navbar.css'
import logo from'../../src/Component/assets/logo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu from'../Component/assets/menu.png'
import download from './assets/download.png'
export default function Navbar() {
  const menuRef = useRef();
  const open = ()=>{
    menuRef.current.style.right="0"
  }
  const close = ()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className='Navbar'>
      <img className='img' src={logo} alt=''/>
      <img className='open' src={menu} alt='' onClick={open}/>
      
    <ul ref={menuRef} className='nav-menu'>
    <img className='close' src={download} alt='' onClick={close}/>
    
      <li><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#About'>About</AnchorLink></li>      
      
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
    </ul>
    <div className='Nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me</AnchorLink>
     
    </div>


    </div>
  )
}
