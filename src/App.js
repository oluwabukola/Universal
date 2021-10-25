import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
import Navigation from "./Components/Header/Navigation";
import { AboutSubNavigation } from "./Components/Header/SubNavigation";
import Signup from "./Components/Pages/Signup";
import Footer from "./Components/Footer/Footer";
// import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Profile from "./Components/Pages/Profile/Profile";
import Activities from "./Components/Pages/Profile/Activity/index";
import { ProfileEdit } from "./Components/Pages/Profile/ProfileEdit";
import Settings from "./Components/Pages/Settings";
import Mains from "./Components";
import TrendingVideos from "./Components/Pages/TrendingVideos";
// import "../node_modules/slick-carousel/slick/slick.css"; 
// import "../node_modules/slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Pages/Home";


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
             <Mains />
           </Route>
          </Switch>
          
            </Router>
  );
}

export default App;
