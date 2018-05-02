import React from 'react';
import {Route} from 'react-router';

import App from './App';
import Cards from "./components/cards";

const routes = [
    <Route path='/' component={App}/>,
    <Route path='/cards' component={Cards}/>
];

export default routes;