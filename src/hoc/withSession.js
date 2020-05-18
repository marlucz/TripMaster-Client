import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { checkSession as checkSessionAction } from 'store/user/user.actions';

const withSession = Component => {
    const WithSession = ({ isAuth, checkSession }, ...props) => {
        useEffect(() => {
            checkSession();
        }, [checkSession, isAuth]);

        return <Component {...props} isAuth={isAuth} />;
    };

    const mapDispatchToProps = dispatch => ({
        checkSession: () => dispatch(checkSessionAction()),
    });

    const mapStateToProps = ({ user: { isAuth = false } }) => ({ isAuth });

    return connect(mapStateToProps, mapDispatchToProps)(WithSession);
};

export default withSession;
