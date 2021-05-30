import { combineReducers } from 'redux';
import cards from './cards';
import pagesRedux from './pages';
import pokemon from './pokemon';
import filters from './filters';
import pagedFilters from './pagedFilters';

export default combineReducers({
    cards,
    pagesRedux,
    pokemon,
    filters,
    pagedFilters
});