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
                <Route exact path="/trips" render={() => <Redirect to="/" />} />
                <Route path="/trips/:id/expenses" component={Expenses} />
                <Route path="/trips/:id/itinerary" component={Itinerary} />
                <Route path="/trips/:id/todo" component={TodoList} />
                <Route path="/auth" render={() => <Redirect to="/" />} />
                <Route component={NotFound} />
            </Switch>
        </GlobalTemplate>
    </BrowserRouter>
);

export default AuthApp;
