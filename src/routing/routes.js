import React, {Fragment} from 'react';
import {IndexRoute, Route} from 'react-router';
// COMPONENTS
import App from '../App'
import TodoListGroup from "../containers/shopping-list/shopping-list-group/TodoListGroup";
import Signin from "../containers/login/Signin";
import Signout from "../containers/login/Signout";
import TodoList from "../containers/shopping-list/shopping-list/TodoList";
// ERROS
import NotFound from "../containers/error/NotFound";

export default <Fragment>
    <Route path='/' component={App}>
        <IndexRoute component={TodoListGroup}/>
        <Route path={':id/items'} component={TodoList}/>
    </Route>
    <Route path='signin' component={Signin}/>
    <Route path='signout' component={Signout}/>
    <Route path='*' component={NotFound}/>
    <Route path='/notfound' component={NotFound}/>
</Fragment>