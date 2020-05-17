import ExpensesActionsTypes from 'store/expenses/expenses.types';

const INITIAL_STATE = {
    items: [
        // {
        //     id: 1,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Item 1',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'USD',
        // },
        // {
        //     id: 2,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Item 2',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'CAD',
        // },
        // {
        //     id: 3,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Item 3',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'PLN',
        // },
        // {
        //     id: 4,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Item 4',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'AED',
        // },
        // {
        //     id: 5,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Item 5',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'AMD',
        // },
        // {
        //     id: 6,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name:
        //         'To jest jakiś bardzo długi tekst opisujący na co poszło tyle hajsu',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'AZN',
        // },
        // {
        //     id: 7,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Item 7',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'CLP',
        // },
        // {
        //     id: 8,
        //     date: '2020.04.28',
        //     hour: '10:28',
        //     name: 'Item 8',
        //     tags: ['food', 'tickets', 'living'],
        //     value: 10,
        //     currency: 'EGP',
        // },
    ],
};

const expensesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ExpensesActionsTypes.GET_EXPENSES:
            return {
                ...state,
                expenses: state.expenses,
            };

        default:
            return state;
    }
};

export default expensesReducer;
