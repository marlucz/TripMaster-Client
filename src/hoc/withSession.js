import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { checkSession } from 'store/user/user.actions';

const withSession = Component => {
    const WithSession = (isAuth, ...props) => {
        useEffect(() => {
            checkSession();
        }, [checkSession]);

        return <Component {...props} isAuth={isAuth} />;
    };

    const mapStateToProps = ({ user: isAuth = false }) => ({ isAuth });

    return connect(mapStateToProps, { checkSession })(WithSession);
};

export default withSession;
