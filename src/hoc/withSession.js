import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { checkSession as checkSessionAction } from 'store/user/user.actions';
import { selectIsAuth } from 'store/user/user.selectors';

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

    const mapStateToProps = createStructuredSelector({
        isAuth: selectIsAuth,
    });
    return connect(mapStateToProps, mapDispatchToProps)(WithSession);
};

export default withSession;
