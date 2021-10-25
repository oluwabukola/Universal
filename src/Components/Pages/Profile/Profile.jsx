import React from 'react';
import { Link } from 'react-router-dom';
import Activity from './Activity/Activity';
import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
import { Recommendation } from './Activity/Recommendation';
import { Likes } from './Activity/Likes';
import { About } from './Activity/About';
import ActivityMain from './Activity/ActivityMain';
import photo from '../../../img/profile-icon.jpg';
// import {Recommendation} from '../Activity/Recommendation';
// import {Likes} from '../Activity/Likes';
// import {About} from '../Activity/About';

 const Profile = () => {
    return (
        <>
        {/* <div className='profile'> */}
        {/* <Router> */}
        <section className='profile' >
            <div className='profile__hero'>
            <div className="profile__hero--image" style={{backgroundImage: `url(${photo})`}}>
            </div>
            <div className='profile__hero--editing'>
                <div className='profile__hero--edit'>
                <p className='edit-name'>Ore Ore</p>
               <Link className='edit--link' to='/profile/edit'>Edit </Link>
                </div>
               
               <div className='profile__hero--organisation'>
                   <span>Bcodes technology,</span>
                   <span>lagos,</span>
                   <span> Nigeria nndnjslllllllllll;l,xlas:;</span>
               </div>
            </div>
            </div>
        </section>
      {/* <Navigation /> */}
      <Router>
        <Activity />
          <Switch>
            
            <Route  path='/profile/123'  exact component={ActivityMain} >
            </Route>
            {/* <Route  path='/profile/123'  exact component={Recommendation} >
            </Route> */}

            <Route  path='/profile/123/likes'  exact component={Likes} >
            </Route>

            <Route  path='/profile/123/about'  exact component={About} >
            </Route>
          </Switch>
            </Router>
          

        {/* </div> */}
        </>
    )
}

export default Profile;