import { 
    LOAD_FILTERS
} from './actions';

export default function filters( state=[], action ){
    switch(action.type){
        case LOAD_FILTERS:
            return action.payload;
        default:
            return state;
    };
};