import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {GridColumn} from 'semantic-ui-react';

// COMPONENTS
import App from './app'
import Home from "./containers/home/home";

const NotFound = () => <GridColumn><h1>404.. This page is not found!</h1></GridColumn>


export default <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='*' component={NotFound}/>
</Route>