import trips from 'assets/icons/trips.svg';
import upcoming from 'assets/icons/upcoming.svg';
import add from 'assets/icons/add.svg';
import summary from 'assets/icons/summary.svg';
import itinerary from 'assets/icons/itinerary.svg';
import expenses from 'assets/icons/expenses.svg';
import todo from 'assets/icons/todo-list.svg';

export const navTop = [
    { route: '/trips', title: 'Trips', icon: trips },
    { route: '/upcoming', title: 'Upcoming', icon: upcoming },
    { route: '/trips/add', title: 'Add Trip', icon: add },
];

export const navInTrip = [
    { route: '/trip/:id', title: 'Summary', icon: summary },
    { route: '/trip/:id/itinerary', title: 'Itinerary', icon: itinerary },
    { route: '/trip/:id/expenses', title: 'Expenses', icon: expenses },
    { route: '/trip/:id/todo', title: 'Todo List', icon: todo },
];
