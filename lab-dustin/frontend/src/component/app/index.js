import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create.js';
import LandingContainer from '../landing-container';
import DashboardContainer from '../dashboard-container';

let store = appStoreCreate();

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <h1>Damn Son, thats an h1!!</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'> Sign Up </Link></li>
                    <li><Link to='/welcome/login'> Log In </Link></li>
                  </ul>
                </nav>
              </header>

              <Route path='/welcome/:auth' component={LandingContainer} />
              <Route path='/dashboard' component={DashboardContainer} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
