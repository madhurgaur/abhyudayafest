import React, { useEffect } from 'react'
import './about.css'
import arrowR from '../../../Assets/arrowRi.png'
import arrowL from '../../../Assets/arrowRupdated.png'
import guitar from '../../../Assets/guitarbg.png'
import music from '../../../Assets/musicEle.png'
import plane from '../../../Assets/paper-plane-clipart-xl.png';
// import { useEffect } from 'react'
import gsap from 'gsap'
const About = () => {
  useEffect(function () {
    const tl = gsap.timeline();
    tl.from('.plane1', {
      y: 50,
      x: -45,
      delay: 1,
      opacity: 1,


    })
  })
  return (

    <>
      <div className='fest__about'>
        <div className='fest__about-container'>
          <div className='a1'>
            <img src={arrowL} alt='arrowr\R' />
          </div>
          <div className='content'>
            <h1>About Us</h1>
            <p>Abhyudaya, our college fest, unfolds a mesmerizing spectacle with its theme "Ethereal Euphoria." Embarking on a journey of transcendent joy and boundless creativity, the event promises an immersive experience that transcends reality. Vibrant colors, captivating performances, and a euphoric atmosphere blend seamlessly, creating an ethereal celebration of art, culture, and innovation. Join us for a euphoric rendezvous that transcends boundaries and ignites the spirit of Abhyudaya's radiant and otherworldly festivities.</p>
          </div>
          <div className='a2'>
            <img src={arrowL} alt='ar2' />
          </div>
          {/* <div className='guitar'>
            <img src={guitar} alt='guitar' />
          </div> */}
          <div className='music'>
            <img src={music} alt='music' />
          </div>
          <div className='plane1'>
            <img src={plane} />
          </div>
          {/* <div className='plane2'>
            <img src={plane} />
          </div> */}
        </div>



      </div>



    </>
  )
}

export default About;

//////<div className='aero1'>
////<img  src={aero}  alt='aero'/>
//</div>
//<div className='aero'>
//<img  src={aero}  alt='aero'/>
//</div>