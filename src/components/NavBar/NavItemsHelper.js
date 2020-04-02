import trips from 'assets/icons/trips.svg';
import upcoming from 'assets/icons/upcoming.svg';
import add from 'assets/icons/add.svg';
import summary from 'assets/icons/summary.svg';
import itinerary from 'assets/icons/itinerary.svg';
import expenses from 'assets/icons/expenses.svg';
import todo from 'assets/icons/todo-list.svg';

export const navTop = [
  { slug: '/trips', title: 'Trips', icon: trips },
  { slug: '/upcoming', title: 'Upcoming', icon: upcoming },
  { slug: '/trips/add', title: 'Add Trip', icon: add },
];

export const navInTrip = [
  { slug: '/summary', title: 'Summary', icon: summary },
  { slug: '/trip/itinerary', title: 'Itinerary', icon: itinerary },
  { slug: '/trip/expenses', title: 'Expenses', icon: expenses },
  { slug: '/trip/todo', title: 'Todo List', icon: todo },
];
