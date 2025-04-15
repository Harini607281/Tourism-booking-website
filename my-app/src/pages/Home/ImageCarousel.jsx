import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles
import './imagecarousel.scss'

const ImageCarousel = ({img1,img2}) => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        interval={2000} // Change slide every 3 seconds
        transitionTime={800} // Smooth transition time
      >
        <div>
          <img src={img1} alt="Nature" />
        </div>
        <div>
        <img src={img2} alt="Technology" />

        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
