import React from 'react'
import Slider from "react-slick";
import { GradientElement } from '../elements';
import penray from "../../../../public/assets/images/penray.png"


const BrandsCarosal = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        rows: 1,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        variableWidth: true,
      };
  return (
    <div>

      <Slider {...settings}>
        <GradientElement image={penray} />
        <GradientElement image={penray} />
        <GradientElement image={penray} />
        <GradientElement image={penray} />
        <GradientElement image={penray} />
        <GradientElement image={penray} />
        <GradientElement image={penray} />
        <GradientElement image={penray} />
      </Slider>
      
    </div>
  )
}

export default BrandsCarosal
