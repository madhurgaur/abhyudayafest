import React from 'react'
import './navbar.css';
import logo from'../../../Assets/abhyudatalogo.png'

const Navbar = () => {
  return (
    <div className='fest__navbar'>
       <div className='fest__navbar-links'>
         <div className='fest__navbar-links_logo'>
           <img src={logo} alt='logo'/>
           <p>ABHYUDAYA</p>
         </div>
         <div className='fest__navbar-links_container'>
           <p class="nav-link">Home</p>
           <p class="nav-link">Events</p>
           <p class="nav-link" >Registration</p>
           <p class="nav-link" >Team</p>
           <p class="nav-link" >Contact Us</p>
         </div>
       </div>
    </div>
  )
}

export default Navbar
