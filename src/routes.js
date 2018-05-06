import React, {Fragment} from 'react';
import {IndexRoute, Route} from 'react-router';
// COMPONENTS
import App from './app'
import Home from "./containers/home/Home";
import LoginForm from "./containers/login/LoginForm";
// ERROS
import NotFound from "./containers/error/NotFound";

export default <Fragment>
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
    </Route>
    <Route path='login' component={LoginForm}/>
    <Route path='*' component={NotFound}/>
</Fragment>