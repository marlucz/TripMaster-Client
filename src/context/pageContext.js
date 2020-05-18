import React, { Component } from 'react';
import { withRouter } from 'react-router';

export const PageContext = React.createContext();

class PageProvider extends Component {
    state = {
        pageType: 'trips',
        isAddItemFormVisible: false,
    };

    componentDidMount() {
        this.setCurrentPage();
    }

    componentDidUpdate(prevProps, prevState) {
        this.setCurrentPage(prevState);
    }

    setCurrentPage = (prevState = '') => {
        const pageTypes = ['itinerary', 'expenses', 'todo'];
        const {
            location: { pathname },
        } = this.props;

        let [currentPage] = pageTypes.filter(page => pathname.includes(page));

        if (!currentPage) {
            currentPage = 'trips';
        }

        if (prevState.pageType !== currentPage) {
            this.setState({ pageType: currentPage });
        }
    };

    render() {
        const { children } = this.props;
        const { pageType, isAddItemFormVisible } = this.state;

        const setCurrentToTrips = () => {
            this.setState(prevState =>
                prevState.pageType === 'trips' ? '' : { pageType: 'trips' },
            );
        };

        const toggleAddItemForm = () => {
            this.setState(prevState => ({
                isAddItemFormVisible: !prevState.isAddItemFormVisible,
            }));
        };

        return (
            <PageContext.Provider
                value={{
                    pageType,
                    isAddItemFormVisible,
                    toggleAddItemForm,
                    setCurrentToTrips,
                }}
            >
                {children}
            </PageContext.Provider>
        );
    }
}

export default withRouter(PageProvider);
