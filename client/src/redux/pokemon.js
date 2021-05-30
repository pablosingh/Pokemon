import { 
    SET_POKEMON 
} from './actions';

export default function pokemon( state={}, action ){
    switch(action.type){
        case SET_POKEMON:
            return action.payload;
        default:
            return state;
    };
};