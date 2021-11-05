import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
import React from 'react';
import Navigation from './Header/Navigation';
import Home from './Pages/Home';
import Profile from './Pages/Profile/Profile';
import Activities from '../Components/Pages/Profile/Activity/Activity';
import { ProfileEdit } from './Pages/Profile/ProfileEdit';
import Settings from './Pages/Settings';
import Listing from "./Pages/History/index";
import VideoPlay from "./VideoPages/VideoPlay";
import CategoryVideos from "./CategoryVideos/CategoryVideos";
import SideNav from "./Header/SideNav";
import Footer from "./Footer/Footer";

const Mains = () => {
    return (
        <Router>
        <Navigation />
            <Switch>
             
              {/* <Route  path='/'  exact component={Home} >
              </Route> */}
              <Route path='/sidenav' exact component={SideNav}></Route>

             
              <Route  path='/profile/123' exact  component={Profile} >
              </Route>
  
              <Route  path='/profile/edit' exact  component={ProfileEdit} >
              </Route>
  
              <Route  path='/settings/account'  exact component={Settings} >
              </Route>


              <Route  path='/overview'  exact  component={Listing} >
              </Route>

              <Route path='/video' exact component={VideoPlay}></Route>

              <Route path='/categoryVideos' exact component={CategoryVideos}></Route>
              {/* <Listing /> */}
              {/* <Route path=''> */}
              {/* <Activities  exact /> */}
              {/* </Route> */}
              
              {/* <Route   exact component={Footer} ></Route>  */}
            </Switch>
            <Footer />
              </Router>
    )
}

export default Mains;