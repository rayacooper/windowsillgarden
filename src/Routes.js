import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import WindowSill from './Components/WindowSill/WindowSill';

const Routes = () => {
    return (
        <Switch>
            <Route component={WindowSill} path='/home'/>
            <Route component={Register} path='/register'/>
            <Route component={Login} path='/'/>
        </Switch>
    )
}

export default Routes;