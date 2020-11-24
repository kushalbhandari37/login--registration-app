import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import history from './history';
import {Router} from 'react-router';
import {PrivateRoute} from './protectedRoute';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Router history={history}>
        <Switch>          
          <Route exact path={"/"} component={Registration} />
          <Route exact path={"/login"} component={Login} />
          <PrivateRoute exact path={"/home"} component={Home} />
        </Switch>
        </Router>
      </div>
    )
  }
}

