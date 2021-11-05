import React from 'react';
import { Link } from 'react-router-dom';
import {BsCameraVideoOff} from 'react-icons/bs';

const LikedVideos = () => {
    return (
        <>
        <div className='history'>
            <div className='history__status'>
                <div className='history__status--unavailable'>
                    <div className='unavailable-video'><BsCameraVideoOff /></div>
                    <div className='unavailable-text'>No watched history,<Link to='/'> watch to get started!</Link> </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LikedVideos;
