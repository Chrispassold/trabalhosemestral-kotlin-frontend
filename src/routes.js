import React from 'react';
import {IndexRoute, Route} from 'react-router';
// COMPONENTS
import App from './app'
import Cards from "./pages/cards";

////////////////////////////////////////////////////////////
// first our route components
const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => <h1>404.. This page is not found!</h1>

////////////////////////////////////////////////////////////


export default <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='address' component={Address}/>
    <Route path='cards' component={Cards}/>
    <Route path='*' component={NotFound}/>
</Route>