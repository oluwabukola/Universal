import React from 'react';
import VideoImage from '../Pages/VideoImage';
import VideoDescription from './VideoDescription';


const VideoRelated = ({pic}) => {
    console.log(pic)
    return (
        <>
                <div className="VideoPlay__related--content">
                    <div className='content--image'>
                    <VideoImage pic={pic} />
                    </div>
                    <div className="content--description">
                    <VideoDescription />
                    </div>
            </div>  
        </>
    )
}

export default VideoRelated
