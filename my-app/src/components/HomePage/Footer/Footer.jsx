import React from 'react'
import './footer.css';
import abhyudaya from '../../../Assets/abhyhindimain2.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/abhyudaya.mmmut/?hl=en', '_blank');
  };

  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/@abhyudayammmut1045', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/abhyudaya.mmmut/', '_blank');
  };


  return (
   


    <div className='fest__footer'>
      <div className='footer'>
      <div className='fest__footer-groupA'>
        <div className='fest__footer-groupA_content'>
      <h3>Reach US</h3>  
      <div>
        <h5>Madhur Gaur</h5>
        <p>9555749803</p>
        </div>
        <div className='icons'>
         <InstagramIcon onClick={handleInstagramClick} />
         <FacebookIcon onClick={handleFacebookClick} />
         <YouTubeIcon onClick={handleYoutubeClick} />
        </div>
        <div className='mail'>
        <h4>Mail Us</h4>
       <div className='mailid'>
       <p>mmmut.abhyudaya@gmail.com</p>
       </div>
        </div>
        </div>
      </div>
      <div className='fest__footer-groupB'>
         <img src={abhyudaya} alt='abhyudaya'/>
      </div>
      <div className='fest__footer-groupC'>
         <h3>Contact Us</h3>
         <div className='name1'>
         <h5>Madhur Gaur</h5>
         <p>9555749803</p>
         </div>
         <div className='name2'>
         <h5>Madhur Gaur</h5>
         <p>9555749803</p>
         </div>
      </div>   
      </div>
      <div className='copy'>
      <p>2024, All Copyright Reserved</p>
      </div>
     
    </div>
  )
}

export default Footer
