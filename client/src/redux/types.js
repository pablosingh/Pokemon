import { 
    LOAD_TYPES
 } from './actions';

export default function types( state=[], action ){
    switch(action.type){
        case LOAD_TYPES:
            return [...action.payload];
        default:
            return [...state];
    };
};