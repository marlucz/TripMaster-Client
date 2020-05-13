import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Trips from 'pages/Trips/Trips';
import NotFound from 'pages/NotFound/NotFound';
import Expenses from 'pages/Trip/Expenses/Expenses';
import Itinerary from 'pages/Trip/Itinerary/Itinerary';
import TodoList from 'pages/Trip/TodoList/TodoList';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';

import GlobalTemplate from 'templates/GlobalTemplate';

const App = () => (
    <BrowserRouter>
        <GlobalTemplate>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Trips} />
                <Route exact path="/trips" component={Trips} />
                <Route path="/trip/:id/expenses" component={Expenses} />
                <Route path="/trip/:id/itinerary" component={Itinerary} />
                <Route path="/trip/:id/todo" component={TodoList} />
                <Route component={NotFound} />
            </Switch>
        </GlobalTemplate>
    </BrowserRouter>
);

export default App;
