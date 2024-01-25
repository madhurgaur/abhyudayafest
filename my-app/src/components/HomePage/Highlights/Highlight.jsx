import React from 'react'
import './highlight.css'
// import a from '../../../Assets/shlokaFront.jpg'
import b from '../../../Assets/djControl.JPG'
import c from '../../../Assets/shlokafix.JPG'
import dance from '../../../Assets/dancepic.JPG'
import f from '../../../Assets/facepainting.JPG'
import s from '../../../Assets/singer.JPG'
import drama from '../../../Assets/drama.JPG'

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
            <img src={drama} alt='g' loading='lazy' />
        </div>
       
        
    </div>
</div>
    </div>
  )
}

export default Highlight;
