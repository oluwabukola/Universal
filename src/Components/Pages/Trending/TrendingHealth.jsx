import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import {BiTrendingUp, } from 'react-icons/bi';
import {BsArrowRightShort} from 'react-icons/bs';
import VideoList from '../VideoList';
import one from '../../../img/one.jpg'
import two from '../../../img/two.jpg'
import three from '../../../img/three.jpg'
import four from '../../../img/four.jpg';
import five from '../../../img/five.jpg';
import six from '../../../img/six.jpg';
import seven from '../../../img/seven.jpg';
import eight from '../../../img/eight.jpg';
import nine from '../../../img/nine.jpg';
import ten from '../../../img/ten.jpg';
import eleven from '../../../img/eleven.jpg';
import twelve from '../../../img/twelve.jpg';
import thirteen from '../../../img/thirteen.jpg';
import {MdPlayArrow} from 'react-icons/md';

const mages = [one, two, three, four, five, six, seven,
eight, nine, ten, eleven, twelve, thirteen]

const TrendingHealth = (pic) => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 5,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
              speed: 500,
              arrows: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              speed: 500,
              arrows: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              speed: 500,
              arrows: true,
            }
          }
        ]

      }
    return (
        <div className='trend__container' >
          <div className='trend__header '>
          <div className='trend__header--start'>
          <div className='trend__icon-container'>
            <BiTrendingUp   />
          </div>
          <div className='inside'>
          Health Pain
           </div>
          
           </div>
           <div className='trend__header--end'>
            <div className='trend__icon-container'>
              <BsArrowRightShort className='trending__icon' />
          </div>
          <div className='inside'>
             Explore more  
             </div>
          </div>
          </div>
        <Container fluid >
        <Slider {...settings}  >
          {mages.map( pic =>{
          console.log(pic)
         return  <div className='trend__row '  >
            <VideoList pic={pic} />
         
          </div>
          }
          ) } 
         
        </Slider>
      </Container>
      <hr className='bottom-rule'/>
        </div>
           
    )
}

export default TrendingHealth;
