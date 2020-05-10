import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import PageContext from 'context/pageContext';

import GlobalStyle from 'theme/GlobalStyle';
import GradientContainer from 'components/GradientContainer/GradientContainer';

class MainTemplate extends Component {
    state = {
        pageType: 'trips',
    };

    componentDidMount() {
        this.setCurrentPage();
    }

    componentDidUpdate(prevProps, prevState) {
        this.setCurrentPage(prevState);
    }

    setCurrentPage = (prevState = '') => {
        const pageTypes = ['trips', 'itinerary', 'expenses', 'todo'];
        const {
            location: { pathname },
        } = this.props;

        const [currentPage] = pageTypes.filter(page => pathname.includes(page));

        if (prevState.pageType !== currentPage) {
            this.setState({ pageType: currentPage });
        }
    };

    render() {
        const { children } = this.props;
        const { pageType } = this.state;

        return (
            <PageContext.Provider value={pageType}>
                <GradientContainer />
                <GlobalStyle />
                <div>{children}</div>
            </PageContext.Provider>
        );
    }
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
