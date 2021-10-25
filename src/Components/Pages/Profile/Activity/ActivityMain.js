import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import { Recommendation } from './Recommendation';
import { Likes } from './Likes';
const ActivityMain = () => {
    return (
        <div>
             <Tabs defaultActiveKey="recommendation" id="uncontrolled-tab-example"  className='nav nav-tabs'>
                <Tab eventKey="recommendation" title="Recommendations">
                    <Recommendation />
                     </Tab> 
                 <Tab eventKey="likes" title="Likes">
                     <Likes />
                    </Tab>
                        </Tabs>
        </div>
    )
}

export default ActivityMain
