import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest})=>{
    let isLoggedIn = JSON.parse(localStorage.getItem('user'));
    return(
        <Route {...rest} render={
            (props) => isLoggedIn
            ? (
                <Component key={props.match.params.id || 'empty'} {...props} />
              ) : (
                  alert("Please Log In to continue"),
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
              )
            } />
          )
        }