import React from 'react'
import './highlight.css'
// import a from '../../../Assets/shlokaFront.jpg'
import b from '../../../Assets/guitr.jpg'
import c from '../../../Assets/mics.jpg'
import dance from '../../../Assets/choras.jpg'
import f from '../../../Assets/raga.jpg'
import s from '../../../Assets/key.jpg'
import drama from '../../../Assets/fpaint.jpg'

const Highlight = () => {
  return (
    <div>
      
	<div class="main">
    <h1>Last Year Highlights</h1>
    <p>Here Are Our Some Glimpses:-</p>
    <div class="gallery">
        <div class="img">
            <img src={c} alt='c' loading="lazy" />
        </div>
        <div class="img">
            <img src={b} alt='a' loading="lazy"/>
        </div>
        <div class="img">
            <img src={dance} alt='a' loading="lazy" />
        </div>
        <div class="img">
            <img src={f} alt='a' loading="lazy"/>
        </div>
        <div class="img">
            <img src={s} alt='f' loading="lazy"/>
        </div>
        <div class="img">
            <img src={drama} alt='g' />
        </div>
       
        
    </div>
</div>
    </div>
  )
}

export default Highlight;
