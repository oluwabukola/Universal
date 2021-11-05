import React, { useState } from 'react';
import {MdPlayArrow} from 'react-icons/md';
import hero from '../../img/hero1.jpg';
import { Link } from 'react-router-dom';

const VideoImage = ({pic}) => {
  const [playIcon, setPlayIcon] = useState(false);
  const showPlay = () => {
    setPlayIcon(prev => !prev);
  }
    return (
        <>
            <div className="videolist__image" onMouseEnter={showPlay} onMouseLeave={showPlay}>
                <a href='#'>
                  <div className="videolist__background-image" style={{backgroundImage: `url(${pic})`, backgroundSize:'cover'}}>
                    <div className='video__play' >
                    {
                    playIcon && 
                        <Link to = '/video'><MdPlayArrow /></Link>
                        }
                      </div>
                    <div className='video__duration'>0.04</div>
                  </div>
                </a>
              </div> 
        </>
    )
}

export default VideoImage;
