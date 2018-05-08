import React, {Fragment} from 'react';
import {IndexRoute, Route} from 'react-router';
// COMPONENTS
import App from './app'
import ShoppingListGroup from "./containers/shopping-list/shopping-list-group/ShoppingListGroup";
import Login from "./containers/login/Login";
import ShoppingList from "./containers/shopping-list/shopping-list/ShoppingList";
// ERROS
import NotFound from "./containers/error/NotFound";

export default <Fragment>
    <Route path='/' component={App}>
        <IndexRoute component={ShoppingListGroup}/>
        <Route path={'items/:id'} component={ShoppingList}/>
    </Route>
    <Route path='login' component={Login}/>
    <Route path='*' component={NotFound}/>
</Fragment>