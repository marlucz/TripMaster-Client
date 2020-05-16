import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Trips from 'pages/Trips/Trips';
import NotFound from 'pages/NotFound/NotFound';
import Expenses from 'pages/Trip/Expenses/Expenses';
import Itinerary from 'pages/Trip/Itinerary/Itinerary';
import TodoList from 'pages/Trip/TodoList/TodoList';

import GlobalTemplate from 'templates/GlobalTemplate';

const AuthApp = () => (
    <BrowserRouter>
        <GlobalTemplate>
            <Switch>
                <Route exact path="/" component={Trips} />
                <Route exact path="/trips" component={Trips} />
                <Route path="/trip/:id/expenses" component={Expenses} />
                <Route path="/trip/:id/itinerary" component={Itinerary} />
                <Route path="/trip/:id/todo" component={TodoList} />
                <Route path="/register" render={() => <Redirect to="/" />} />
                <Route path="/login" render={() => <Redirect to="/" />} />
                <Route component={NotFound} />
            </Switch>
        </GlobalTemplate>
    </BrowserRouter>
);

export default AuthApp;
