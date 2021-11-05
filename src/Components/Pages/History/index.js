import React from 'react';
import { Link } from 'react-router-dom';
import History from './History';
import Overview from './Overview';
import LikedVideos from './LikedVideos';
import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";



 const Listing = () => {
    return (
        <>
        
      <Router>
        <Overview />
          <Switch>
            
            <Route  path='/overview/history'  exact component={History} >
            </Route>

            <Route  path='/overview/likedVideos'  exact component={LikedVideos} >
            </Route>
           
          </Switch>
            </Router>
          

        {/* </div> */}
        </>
    )
}

export default Listing;