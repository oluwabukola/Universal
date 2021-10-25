import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
import React from 'react';
import Navigation from './Header/Navigation';
import Home from './Pages/Home';
import Profile from './Pages/Profile/Profile';
import Activities from '../Components/Pages/Profile/Activity/Activity';
import { ProfileEdit } from './Pages/Profile/ProfileEdit';
import Settings from './Pages/Settings';

const Mains = () => {
    return (
        <Router>
        <Navigation />
            <Switch>
             
              {/* <Route  path='/'  exact component={Home} >
              </Route> */}
             
              <Route  path='/profile/123'   component={Profile} >
              </Route>
  
              <Route  path='/profile/edit'   component={ProfileEdit} >
              </Route>
  
              <Route  path='/settings/account'   component={Settings} >
              </Route>
              {/* <Route path=''> */}
              {/* <Activities  exact /> */}
              {/* </Route> */}
              
              {/* <Route  path='/'  exact component={Footer} >
              </Route> */}
            </Switch>
            {/* <Footer /> */}
              </Router>
    )
}

export default Mains;