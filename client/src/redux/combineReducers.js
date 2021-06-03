import { combineReducers } from 'redux';
import cards from './cards';
import pages from './pages';
import pokemon from './pokemon';
import filters from './filters';
import types from './types';

export default combineReducers({
    cards,
    pages,
    pokemon,
    filters,
    types
});