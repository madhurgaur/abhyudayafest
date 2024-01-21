import React from 'react';
import rohit from '../../Assets/Rohit.jpeg';
import './card.css';

const Card = (props) => {
  return (
    <div className='card'>
    <div className='image'> 
      <img src={rohit} alt='rohit' />
    </div>
   
   
     <div className='facHeading'> <h2>{props.heading}</h2></div>
     <div className='facHeading'> <h4>{props.post}</h4></div>
   </div>
  )
}

export default Card;
