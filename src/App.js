import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
import Navigation from "./Components/Header/Navigation";
import { AboutSubNavigation } from "./Components/Header/SubNavigation";
import Signup from "./Components/Pages/Signup";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile/Profile";
import Activities from "./Components/Pages/Profile/Activity/index";
import { ProfileEdit } from "./Components/Pages/Profile/ProfileEdit";
import Settings from "./Components/Pages/Settings";
import Mains from "./Components";
import TrendingVideos from "./Components/Pages/Trending/TrendingVideos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Pages/Home";
import VideoPlay from "./Components/VideoPages/VideoPlay";


function App() {
  return (
    <Router>
    <ToastContainer/>

          <Switch>
            <Route  path='/'  exact component={Home} >
              </Route>
              <Route  path='/login'  exact component={Login} >
            </Route>
            <Route  path='/signup'  exact component={Signup} >
            </Route>
           <Route>
              {/* <Route path='/video' exact component={VideoPlay}>
              </Route> */}
              
              <Mains exact />
          
         
           </Route>
          </Switch>
          
            </Router>
  );
}

export default App;
