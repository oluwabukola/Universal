import React from 'react';
import VideoImage from './VideoImage';

const VideoList = ({pic}) => {
    console.log(pic)
    return (
        <>
            <div  className='videolist'>
            <VideoImage pic={pic}  />
              <div className="videolist__body">
              <div className="videolist__body--title">What you discover when you is really to listen</div>
              <div className="videolist__body--speaker">Tzeporah Berman</div>
              </div>
            </div>
        </>
    )
}

export default VideoList;
