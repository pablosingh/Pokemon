import {
    SET_MAX_PAGES_FILTERS
} from './actions';

const initialState = {
    pages: 0,
    actualPage: 0,
    paged: [],
    subPaged: []
};

export default function pagedFilters( state=initialState, action){
    switch(action.type){
        case SET_MAX_PAGES_FILTERS:
            return {
                ...state,
                pages: action.payload
            };
        // case LOAD_PAGES:
        //     const aux = [];
        //     for(let i=0; i<=action.payload; i++)
        //         aux.push(i);
        //     return {
        //         ...state,
        //         paged: [...aux],
        //         subPaged: aux.slice(0,9),
        //         pages: action.payload
        //     };
        // case SET_ACTUAL_PAGE:
        //     let setPages = [];
        //     if ( action.payload > 4 && action.payload<=state.pages )
        //         for ( let i=action.payload-4; i<=action.payload+4 && i<=state.pages; i++ )
        //             setPages.push(i);
        //     else
        //         setPages = state.paged.slice(0,9);
        //     return {
        //         ...state,
        //         actualPage: action.payload,
        //         subPaged: [...setPages]
        //     }
        default:
            return {...state};
    };
};