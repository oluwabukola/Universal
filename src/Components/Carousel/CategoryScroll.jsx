import React, { Component } from "react";
import Slider from "react-slick";

const  CategoryScroll = () => {
  
    const   settings = {
  
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
          autoplaySpeed: 2000,
           pauseOnHover: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          autoplaySpeed: 2000,
            pauseOnHover: true,
          }
        }
      ]
    }
    return (
      <div className ='categoryScroll'>
        <Slider {...settings}>
        
        <button type='button' className='categoryScroll__button'>Wealth and Money Pain</button>
          
          <button type='button' className='categoryScroll__button'>Mental Strength Pain</button>
     
          <button type='button' className='categoryScroll__button'>Health Pain</button>
         
          <button type='button' className='categoryScroll__button'>Family and Relationships Pain</button>
         
          <button type='button' className='categoryScroll__button'>Spiritual Pain</button>
         
          <button type='button' className='categoryScroll__button'>Education, Work & Career Pain</button>
          
          <button type='button' className='categoryScroll__button'>Race & Inequality pain</button>
          
          <button type='button' className='categoryScroll__button'>Gender pain</button>
          
          <button type='button' className='categoryScroll__button'> Crime and Violence  pain</button>
         
          <button type='button' className='categoryScroll__button'> Faith pain</button>
    
        </Slider>
      </div>
    );
  }
export default CategoryScroll;