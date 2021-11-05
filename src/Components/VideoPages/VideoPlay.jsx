import React from 'react';
import { ReactYouTubeLite } from 'react-youtube-lite';
import info from '../../img/personalInfo.png';
import profile from '../../img/profile-pic.png';
import VideoImage from '../Pages/VideoImage';
import VideoRelated from './VideoRelated';

import four from '../../img/four.jpg'
import five from '../../img/five.jpg';
import six from '../../img/six.jpg';
import nine from '../../img/nine.jpg';
import ten from '../../img/ten.jpg';
const  mages = [four, five, six, nine, ten];

const VideoPlay = () => {
    
    return (
             <div className='videoplay'>
            <div className='VideoPlay__tube'>
                <div className='videoPlay__tube--watch'>
                <ReactYouTubeLite url="https://www.youtube.com/watch?v=DVQTGidS1yk" 
                title="Youtube Embed"
                />
                </div>
                <div className='videoPlay__tube--overview'>
                    <h2 className='overview-title'>Amazon Webview</h2>
                    <p className='overview-views'>50,933 views.<span className='overview-year'>26 Feb 2021</span></p>
                </div>
                <div className='videoPlay__tube--about'>
                 <div className="about-image" style={{backgroundImage: `url(${info})`}}></div>
                 <div className="about-text">
                 <p className='about-name'>Boris Johnson</p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptates vel. Ipsa, iste porro sint earum nesciunt, quis corrupti deleniti modi molestias beatae a dolorem. Suscipit, maxime. Accusantium, explicabo quis?</div>
                </div>
            </div>
           
             <div className='VideoPlay__related'>
                 {mages && mages.map((pic) => 
                <VideoRelated pic={pic} />

             ) }
             {/* <VideoRelated />
             <VideoRelated />
             <VideoRelated />
             <VideoRelated /> */}
            </div> 
        </div>
    )
}

export default VideoPlay;
