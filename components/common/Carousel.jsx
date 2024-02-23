'use client';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Icons } from "@/constants";



function Carousel({children}) {
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            centerPadding: "60px",
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            centerPadding: "60px",
            
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: "60px",
          },
        },
      ],
      
    }

  return (
    <div className="relative overflow-hidden">
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
  )
}

export default Carousel