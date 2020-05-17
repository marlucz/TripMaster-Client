import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Register from 'pages/Auth/Register';
import Login from 'pages/Auth/Login';
import Forgot from 'pages/Auth/Forgot';

import GlobalTemplate from 'templates/GlobalTemplate';

const UnathApp = () => (
    <BrowserRouter>
        <GlobalTemplate>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/auth/register" component={Register} />
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/forgot" component={Forgot} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </GlobalTemplate>
    </BrowserRouter>
);

export default UnathApp;
