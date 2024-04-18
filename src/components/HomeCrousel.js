import React from "react";
import { Carousel } from "react-bootstrap";
const HomeCrousel = () => {
  return (
    <>
      <Carousel data-bs-theme="dark" interval={1000} className="">
        <Carousel.Item className="">
          <img
            className="d-block w-100  object-cover lg:h-[110vh]"
            src="/images/sliderPics/Banner1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  object-cover lg:h-[110vh] "
            src="/images/sliderPics/Banner1.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 object-cover lg:h-[110vh]"
            src="/images/sliderPics/Banner1.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeCrousel;
