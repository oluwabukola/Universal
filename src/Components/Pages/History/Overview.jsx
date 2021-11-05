import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import profileIcon from '../../../img/profile-icon.jpg';
import History from './History';
import LikedVideos from './LikedVideos';

const Overview = () => {
    return (
        <div>
            <div className='overviewContainer' style={{backgroundImage:`url(${profileIcon})`}}>
                <h2>Ore Ore</h2>
            </div>
             <Tabs defaultActiveKey="recommendation" id="uncontrolled-tab-example"  className='nav nav-tabs'>
             <Tab eventKey="playList" title="Play List">
                dfvggg
                    </Tab>
                <Tab eventKey="LikedVideos" title="Liked Videos">
               <LikedVideos />
                     </Tab> 
                 <Tab eventKey="history" title="History">
                    <History />
                    </Tab>
                 
                        </Tabs>
        </div>
    )
}

export default Overview;

