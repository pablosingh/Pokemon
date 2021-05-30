import { 
    LOAD_CARDS,
    SET_PAGE_CARDS
 } from './actions';

// const initialState = {
//     cards: [],
// }

export default function card( state=[], action ){
    switch(action.type){
        case LOAD_CARDS:
            return [...action.payload];
        case SET_PAGE_CARDS:
            return [...action.payload];
        default:
            return [...state];
    };
};