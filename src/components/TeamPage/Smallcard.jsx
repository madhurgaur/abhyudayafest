import React from 'react'
import './smallCard.css'
import rohit from '../../Assets/Rohit.jpeg';

const Smallcard  = (props) => {
    return (
      <div className='scard'>
      <div className='simage'> 
        <img src={rohit} alt='rohit' />
      </div>
     
     
       <div className='sfacHeading'> <h2>{props.heading}</h2></div>
       <div className='sfacHeading'> <h4>{props.post}</h4></div>
     </div>
    )
  }

export default Smallcard
