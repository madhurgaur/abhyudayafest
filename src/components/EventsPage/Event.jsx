
var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abhyudaya competitions</title>
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" />
        <link rel="stylesheet" href="styles(1).css" />
        <section id="tranding">
          <div className="container">
            <h1 className="text-center section-heading">OUR COMPETITIONS</h1>
            <p className="text-center section-paragraph">
              Explore a diverse range of competitions that cater to various interests and talents. From dance
              and music to drama, literary arts, fashion, fine arts, and exciting online competitions – there's
              something for everyone. Join us in celebrating creativity and skill!
            </p>
          </div>
          <div className="container">
            <div className="swiper tranding-slider">
              <div className="swiper-wrapper">
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide">
                  <a href="dancedet.html">
                    <div className="tranding-slide-img">
                      <img src="dance.jpg" alt="Dance" />
                    </div>
                    <div className="tranding-slide-content">
                      <div className="tranding-slide-content-bottom">
                        <h2 className="food-name">
                          DANCE
                        </h2>
                        <h3 className="food-rating">
                          <div className="rating" />
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Slide-end */}
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="music.png.jpg" alt="Tranding" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name">
                        MUSIC
                      </h2>
                      <h3 className="food-rating">
                        <div className="rating">
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Slide-end */}
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="view-3d-film-reel.jpg" alt="Tranding" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name">
                        DRAMA
                      </h2>
                      <h3 className="food-rating">
                        <div className="rating">
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Slide-end */}
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="literary.jpg" alt="Tranding" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name">
                        LITERARY
                      </h2>
                      <h3 className="food-rating">
                        <div className="rating">
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Slide-end */}
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="fashion.jpg" alt="Tranding" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name">
                        FASHION
                      </h2>
                      <h3 className="food-rating">
                        <div className="rating">
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Slide-end */}
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="finearts.jpg" alt="Tranding" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name">
                        FINE ARTS
                      </h2>
                      <h3 className="food-rating">
                        <div className="rating">
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Slide-end */}
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide online-competitions">
                  <div className="tranding-slide-img">
                    <img src="star-water-with-purple-background.jpg" alt="Tranding" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name">
                        ONLINE COMPETITIONS
                      </h2>
                      <h3 className="food-rating">
                        <div className="rating">
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Slide-end */}
                {/* Slide-start 
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="star-water-with-purple-background.jpg" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$8</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    ONLINE COMPETITIONS
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <!-- Slide-end */}
              </div>
              <div className="tranding-slider-control">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline" />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline" />
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
});
