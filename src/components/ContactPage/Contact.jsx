import React from 'react'
import './Contact.css'
import { useState } from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import contact from '../../Assets/contact.png'

const Contact = () => {

    const [message,setmesssage] =useState(false);
const handleSubmit = (e) =>{
  e.preventDefault()
  setmesssage(true);
}
  return (
    <div className='contact'>
      
      <div className='navbar'>
      <Navbar/>
    </div>
    <div className="contact-container">
    <div className="contact-left">
    <img src= {contact} alt="" />
    </div>
    <div className="contact-right">
    <h1>Contact us</h1>
              <form >
              <input type="text" placeholder="Name" required/>
                  <input type="email" placeholder="Email" required/>
                  <textarea placeholder="Type your Message here..." required></textarea>
                  <button onClick={handleSubmit}>Submit</button>
                  {message && <span>Thanks for contacting FoodFire, We will reply ASAP.</span>}
              </form>
    </div>
  </div>
    </div>
  )
}

export default Contact
