import React, { useEffect } from 'react'
import gsap from "gsap";
 import './Header.css'
 import abhyudayaHindi from '../../../Assets/hindiabhy2.png'


const Header = () => {

  useEffect (function () {
    const tl=gsap.timeline();
    // gsap.from ('.fest__header-image', {
    //   opacity:0.5,
    //   scale:0.5,
    //   delay:1
    // })
    tl.from('.fest__header-image',{
      y:-100,
      duration:1.2,
      opacity:0.1

    })
    tl.from ('.fest__header-content_heading ', {
      y:50,
      delay:0,
      opacity:0
    })

    tl.from ('.fest__header-content_para',{
      y:50,
      opacity:0
    })

  })
  return (
    <div className='fest__header'> 
      <div className='fest__header-image'>
         <img src={abhyudayaHindi} alt='abhyuHindi'/>
      </div>
      <div className='fest__header-content'>
        <h1 className='fest__header-content_heading'>An Etheral Euphoria</h1>
        <p className='fest__header-content_para'>The Largest Cultural Fest of North UP</p>
      </div>
    </div>
  )
}

export default Header ;
