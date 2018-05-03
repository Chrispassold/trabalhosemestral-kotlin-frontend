import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <h1>Main</h1>

const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = () => <h2>Tacos</h2>

////////////////////////////////////////////////////////////


export default <Fragment>
    <Route path='/' component={Main}/>
    <Route path='/tacos' component={Tacos}/>
    <Route path='/sanduba' component={Sandwiches}/>
</Fragment>