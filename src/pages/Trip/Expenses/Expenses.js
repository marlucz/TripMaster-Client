import React from 'react';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import ExpenseItem from 'components/ExpenseItem/ExpenseItem';
import PageHeader from 'components/PageHeader/PageHeader';

const Expenses = () => {
    const tags = ['food', 'souvenirs', 'tickets'];

    return (
        <AuthUserTemplate withTrip>
            <PageHeader header="My trip" subHeader="Expenses" />
            <ExpenseItem
                date="2020.04.28"
                hour="10:28"
                name="Expensive wine"
                tags={tags}
                value={10}
            />
        </AuthUserTemplate>
    );
};

export default Expenses;
