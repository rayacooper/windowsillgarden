import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import WindowSill from './Components/WindowSill/WindowSill';
import About from './Components/About/About';

export default (
        <Switch>
            <Route component={WindowSill} path='/home'/>
            <Route component={Register} path='/register'/>
            <Route component={About} path='/about'/>
            <Route component={Login} path='/'/>
        </Switch>
    )