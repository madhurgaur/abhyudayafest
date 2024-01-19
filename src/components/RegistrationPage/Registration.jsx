import React from 'react'
import './registration.css';
import Navbar from '../HomePage/Navbar/Navbar';
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap" rel="stylesheet"></link>

const Registration = () => {
  return (
    <div className='registration'>
    <div className='navbar'>
        <Navbar/>
      </div>
      <div className='registrationContainer'>
      <div className='regHeading'>
       <h2>Register Now</h2>
      </div>
      <div className="form-container">
    <div className="form-group">
      <label for="name" className="form-label">Name:</label>
      <input type="text" id="name" className="form-input" placeholder="Your Name"/>
    </div>

    <div className="form-group">
      <label for="phone" className="form-label">Phone Number:</label>
      <input type="tel" id="phone" className="form-input" placeholder="Your Phone Number"/>
    </div>

    <div className="form-group">
      <label for="gender" className="form-label">Gender:</label>
      <select id="gender" className="form-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="form-group">
      <label for="event" className="form-label">Event:</label>
      <select id="event" className="form-select">
        <option value="event1">Event 1</option>
        <option value="event2">Event 2</option>
        <option value="event3">Event 3</option>
      </select>
    </div>

    <div className="form-group">
      <label for="year" className="form-label">Year of Study:</label>
      <input type="text" id="year" className="form-input" placeholder="Your Year of Study"/>
    </div>

    <div className="form-group">
      <label for="college" className="form-label">College Name:</label>
      <input type="text" id="college" className="form-input" placeholder="Your College Name"/>
    </div>
   
    <div className='btn-div'>
    <button className="form-button">Submit</button>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Registration;
