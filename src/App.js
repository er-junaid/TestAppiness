import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import store from './redux/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/">
              <div className="login-parent">
                <Login/>
              </div>
            </Route>
            <Route path="/dashboard"> 
            <div className="dashboard-parent">
                <Dashboard/>
              </div>
            </Route>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
