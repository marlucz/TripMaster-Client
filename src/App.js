import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from 'pages/Auth/SignIn';
import SignUp from 'pages/Auth/SignUp';
import Trips from 'pages/Trips/Trips';
import NotFound from 'pages/NotFound/NotFound';
import Trip from 'pages/Trip/Trip';
import Expenses from 'pages/Trip/Expenses/Expenses';
import Itinerary from 'pages/Trip/Itinerary/Itinerary';
import TodoList from 'pages/Trip/TodoList/TodoList';

import GlobalTemplate from 'templates/GlobalTemplate';

const Root = () => (
    <BrowserRouter>
        <GlobalTemplate>
            <Switch>
                <Route exact path="/" component={Trips} />
                <Route exact path="/account" component={SignIn} />
                <Route path="/account/register" component={SignUp} />
                <Route exact path="/trip" component={Trip} />
                <Route exact path="/trips" component={Trips} />
                <Route path="/trip/expenses" component={Expenses} />
                <Route path="/trip/itinerary" component={Itinerary} />
                <Route path="/trip/todo" component={TodoList} />
                <Route component={NotFound} />
            </Switch>
        </GlobalTemplate>
    </BrowserRouter>
);

export default Root;
