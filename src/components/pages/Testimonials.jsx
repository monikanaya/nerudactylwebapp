import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/dummydata"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='testimonials hero'>
        <div className='container'>
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className='box'>
                <p data-aos='zoom-out-down'>{val.text}</p>
              
                <h3 data-aos='zoom-out-left'>{val.name}</h3>
                <label data-aos='zoom-out'>{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

