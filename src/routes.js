import React, {Fragment} from 'react';
import {IndexRoute, Route} from 'react-router';
// COMPONENTS
import App from './App'
import TodoListGroup from "./containers/shopping-list/shopping-list-group/TodoListGroup";
import Login from "./containers/login/Login";
import TodoList from "./containers/shopping-list/shopping-list/TodoList";
// ERROS
import NotFound from "./containers/error/NotFound";

export default <Fragment>
    <Route path='/' component={App}>
        <IndexRoute component={TodoListGroup}/>
        <Route path={'items/:id'} component={TodoList}/>
    </Route>
    <Route path='login' component={Login}/>
    <Route path='*' component={NotFound}/>
</Fragment>