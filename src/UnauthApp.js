import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from 'pages/NotFound/NotFound';
import Register from 'pages/Auth/Register';
import Login from 'pages/Auth/Login';
import Forgot from 'pages/Auth/Forgot';

import GlobalTemplate from 'templates/GlobalTemplate';

const UnathApp = () => (
    <BrowserRouter>
        <GlobalTemplate>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/forgot" component={Forgot} />
                <Route component={NotFound} />
            </Switch>
        </GlobalTemplate>
    </BrowserRouter>
);

export default UnathApp;
