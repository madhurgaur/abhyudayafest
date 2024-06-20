// Event.jsx

import React, { useEffect } from 'react';
import './event.css'; // Import existing CSS file
import Navbar from '../HomePage/Navbar/Navbar';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Link } from 'react-router-dom';
// Import images for competition categories
import danceImage from '../../../src/Assets/dance.jpg';
import musicImage from '../../../src/Assets/music.png.jpg';
import dramaImage from '../../../src/Assets/star-water-with-purple-background.jpg';
import fineArtsImage from '../../../src/Assets/finearts.jpg';
import fashionImage from '../../../src/Assets/fashion.jpg';
import literaryImage from '../../../src/Assets/literary.jpg';

// Initialize Swiper modules

const Event = () => {
  return (
    <div className="App2">


      <div className='navbar'>
        <Navbar />
      </div>
      
      <section id="trending">
        <div className="container">
          <h1 className="text-center section-heading">OUR COMPETITIONS</h1>
          <p className="text-center section-paragraph">
            Explore a diverse range of competitions that cater to various interests and talents. From dance and music
            to drama, literary arts, fashion, fine arts, and exciting online competitions – there's something for
            everyone. Join us in celebrating creativity and skill!
          </p>
        </div>
        <div className="container">
          <Swiper
            className="trending-slider"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            Pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            Navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            <SwiperSlide className="trending-slide">
              <Link to='/events/dance'>
                <div className="trending-slide-img">
                  <img src={danceImage} alt="Dance" />
                </div>
                <div className="trending-slide-content">
                  <div className="trending-slide-content-bottom">
                    <h2 className="competition-name">DANCE</h2>
                    <h3 className="competition-rating">
                      <div className="rating"></div>
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="trending-slide">
              <Link to='/events/music'>
                <div className="trending-slide-img">
                  <img src={musicImage} alt="Music" />
                </div>
                <div className="trending-slide-content">
                  <div className="trending-slide-content-bottom">
                    <h2 className="competition-name">MUSIC</h2>
                    <h3 className="competition-rating">
                      <div className="rating"></div>
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="trending-slide">
              <a href="drama.html">
                <div className="trending-slide-img">
                  <img src={dramaImage} alt="Drama" />
                </div>
                <div className="trending-slide-content">
                  <div className="trending-slide-content-bottom">
                    <h2 className="competition-name">DRAMA</h2>
                    <h3 className="competition-rating">
                      <div className="rating"></div>
                    </h3>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="trending-slide">
              <a href="finearts.html">
                <div className="trending-slide-img">
                  <img src={fineArtsImage} alt="Fine Arts" />
                </div>
                <div className="trending-slide-content">
                  <div className="trending-slide-content-bottom">
                    <h2 className="competition-name">FINE ARTS</h2>
                    <h3 className="competition-rating">
                      <div className="rating"></div>
                    </h3>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="trending-slide">
              <a href="fashion.html">
                <div className="trending-slide-img">
                  <img src={fashionImage} alt="Fashion" />
                </div>
                <div className="trending-slide-content">
                  <div className="trending-slide-content-bottom">
                    <h2 className="competition-name">FASHION</h2>
                    <h3 className="competition-rating">
                      <div className="rating"></div>
                    </h3>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="trending-slide">
              <a href="literary.html">
                <div className="trending-slide-img">
                  <img src={literaryImage} alt="Literary" />
                </div>
                <div className="trending-slide-content">
                  <div className="trending-slide-content-bottom">
                    <h2 className="competition-name">LITERARY</h2>
                    <h3 className="competition-rating">
                      <div className="rating"></div>
                    </h3>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
      
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Event;

