import React, { lazy, Suspense } from 'react';

import withSession from 'hoc/withSession';
import GlobalSpinner from 'components/GlobalSpinner/GlobalSpinner';

const AuthApp = lazy(() => import('./AuthApp'));
const UnauthApp = lazy(() => import('./UnauthApp'));

const App = ({ isAuth }) => (
    <Suspense fallback={<GlobalSpinner />}>
        {isAuth === null && <GlobalSpinner />}
        {isAuth === false && <UnauthApp />}
        {isAuth === true && <AuthApp />}
    </Suspense>
);

export default withSession(App);
