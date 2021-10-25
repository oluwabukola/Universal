import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { Recommendation } from './Recommendation';
import { Likes } from './Likes';

const Activity = () => {
    return (
        <>
        <div className='activities'>
            <div className="activities__about">
            <Link to='/profile/123' ><span>Activity</span></Link>
            <Link to='/profile/123/about'><span>About</span></Link>
            </div>
        </div>

        </>
    )
}

export default Activity;