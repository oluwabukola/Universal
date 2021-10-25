import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import {BiTrendingUp, } from 'react-icons/bi';
import {BsArrowRightShort} from 'react-icons/bs';
import hero from '../../img/hero1.jpg';
 import {MdPlayArrow} from 'react-icons/md'


const TrendingVideos = () => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 5,
        arrows: true,
      }
    return (
        <div className='trend__container' >
          <Row className='trend__header '>
          <Col className='col__start'>
          <Row className='inside'>
          <div className='trend__icon-container'>
            <BiTrendingUp   />
          </div>
           Trending
           </Row>
           </Col>
           <Col className='col__end'>
           <Row className='inside'>
             Explore more  
            <div className='trend__icon-container-right'>
              <BsArrowRightShort className='trending__icon' />
          </div>
          </Row>
          </Col>
          </Row>
        <Container fluid >
        <Slider {...settings}  >
          <div className='trend__row '  style={{backgroundColor: 'yellow'}}>
            <div  className='videolist'>
              <div className="videolist__image">
                <a href='#'>
                  <div className="videolist__background-image" style={{backgroundImage: `url(${hero})`, backgroundSize:'cover'}}>
                    <div className='video__play'><MdPlayArrow /></div>
                    <div className='video__duration'>0.04</div>
                  </div>
                </a>
              </div>
              <div className="videolist__body">
              <div className="videolist__body--title">What you discover when you is really to listen</div>
                <div className="videolist__body--speaker">Tzeporah Berman</div>
               
              </div>
            </div>
          </div>
          <div className='trend__row' style={{backgroundColor: 'blue'}} >
          <div  className='videolist'>
              <div className="videolist__image">
                <a href='#'>
                  <div className="videolist__background-image" style={{backgroundImage: `url(${hero})`, backgroundSize:'cover'}}>
                    <div className='video__play'><MdPlayArrow /></div>
                    <div className='video__duration'>0.04</div>
                  </div>
                </a>
              </div>
              <div className="videolist__body">
              <div className="videolist__body--title">What you discover when you is really to listen</div>
                <div className="videolist__body--speaker">Tzeporah Berman</div>
               
              </div>
            </div>
          </div>
          <div className='trend__row' style={{backgroundColor: 'red'}}>
          <div  className='videolist'>
              <div className="videolist__image">
                <a href='#'>
                  <div className="videolist__background-image" style={{backgroundImage: `url(${hero})`, backgroundSize:'cover'}}>
                    <div className='video__play'><MdPlayArrow /></div>
                    <div className='video__duration'>0.04</div>
                  </div>
                </a>
              </div>
              <div className="videolist__body">
              <div className="videolist__body--title">What you discover when you is really to listen</div>
                <div className="videolist__body--speaker">Tzeporah Berman</div>
               
              </div>
            </div>
          </div>

          <div className='trend__row' >
            <div  className='videolist'>
              <div className="videolist__image">
                <a href='#'>
                  <div className="videolist__background-image" style={{backgroundImage: `url(${hero})`, backgroundSize:'cover'}}>
                    <div className='video__play'><MdPlayArrow /></div>
                    <div className='video__duration'>0.04</div>
                  </div>
                </a>
              </div>
              <div className="videolist__body">
                <span className="videolist__body--speaker">Tzeporah Berman</span><br/>
                <span className="videolist__body--title">What you discover when you really listen</span>
              </div>
            </div>
          </div>
          {/* <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
          <div>
          </div>
        </Slider>
     
      </Container>
      <hr className='bottom-rule'/>
        </div>
           
    )
}

export default TrendingVideos;
