import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/Banner/photo-15.png";
import banner2 from "../../../images/Banner/photo-14.png";
import banner3 from "../../../images/Banner/photo-13.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="banners">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="banner" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h2>Best Gym Club</h2>
            <p>We Leading one of the best gym club in our country.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h2>Best Men workout</h2>
            <p>We guarantee any men for body build.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2>Ladies also fit here</h2>
            <p>Our one of the slim lady in here.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
