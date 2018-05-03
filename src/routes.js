import React, {Fragment} from 'react';
import {Route} from 'react-router';
import App from './app'
import Cards from "./pages/cards";

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <App/>

const Card = () => <Cards/>

const Tacos = () => <h2>Tacos</h2>

////////////////////////////////////////////////////////////


export default <Fragment>
    <Route path='/' component={Main}>
        <Route path='card' component={Card}/>
    </Route>
</Fragment>