import React from 'react'
import { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import './navbar.css';
import logo from'../../../Assets/abhyudatalogo.png';

const Menu=()=>{
  return (
    <div>
    <p class="nav-link">Home</p>
    <p class="nav-link">Events</p>
    <p class="nav-link" >Registration</p>
    <p class="nav-link" >Team</p>
    <p class="nav-link" >Contact Us</p>
    </div>

  );
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false); 


  return (
    <>
    <div className='fest__navbar'>
       <div className='fest__navbar-links'>
         <div className='fest__navbar-links_logo'>
           <img src={logo} alt='logo'/>
           <p>ABHYUDAYA</p>
         </div>
         <div className='fest__navbar-links_container'>
          <Menu/>
         </div>
       </div>
       <div className='fest__navbar-menu'>
       <>
       {toggleMenu ? (
        <IoCloseOutline color="#fff" size={27} onClick={() => setToggleMenu(false)} />
      ) : (
        <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      ) }
        { toggleMenu && (<div className='fest__navbar-menu_container scale up centre'>
           <div className='fest__navbar-menu_container-links'>
             <Menu/>
           </div>
         </div>)}
         </>
       </div>
    </div>
    </>
  );
};

export default Navbar
