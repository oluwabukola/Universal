import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom"; 
import {SettingsNav} from '../../Pages/Settings/SettingsNav';
import SettingsAccount from './SettingsAccount'
function Settings() {
  return (
    <div className='settings'>
    <Router>
        <div className='settings__navigation'>
      <SettingsNav />
      </div>
          <Switch>
            <div className='settings__account'>
            <Route  path='/settings/account'  exact component={SettingsAccount} >
            </Route>
            {/* <Route  path='/signup'  exact component={Signup} >
            </Route>  */}

            
            {/* <Route  path='/'  exact component={Footer} >
            </Route> */}
            </div>
          </Switch>
          {/* <Footer /> */}
            </Router>
            </div>
  );
}

export default Settings;
