import trips from 'assets/icons/trips.svg';
import upcoming from 'assets/icons/upcoming.svg';
// import summary from 'assets/icons/summary.svg';
import itinerary from 'assets/icons/itinerary.svg';
import expenses from 'assets/icons/expenses.svg';
import todo from 'assets/icons/todo-list.svg';

export const navTop = [
    { route: '/trips', title: 'Trips', icon: trips },
    { route: '/upcoming', title: 'Upcoming', icon: upcoming },
];

export const navInTrip = [
    // { route: '/trip/:id', title: 'Summary', icon: summary },  // won't be active until trip summary component is done
    { route: '/trip/:id/itinerary', title: 'itinerary', icon: itinerary },
    { route: '/trip/:id/expenses', title: 'expenses', icon: expenses },
    { route: '/trip/:id/todo', title: 'todo list', icon: todo },
];
