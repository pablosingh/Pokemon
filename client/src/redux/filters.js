import { 
    LOAD_FILTERS,
    SET_ACTUAL_PAGE_FILTER,
    SORT_BY_NAME_ASC,
    SORT_BY_NAME_DES,
    SORT_BY_ATTACK_ASC,
    SORT_BY_ATTACK_DES,
    FILTER_BY_TYPES,
    INIT_FILTERS
} from './actions';

import {
    order,
    setPreStateToFilter
} from './functionsFilters';

const initialState = {
    cards: [],
    filters: [],
    subFilters: [],
    amountPages: 0,
    paged: [],
    subPaged: [],
    actualPage: 0,
    selectedTypes: []
};

export default function filters( state=initialState, action ){
    switch(action.type){
        case LOAD_FILTERS:
            let paged = [];
            for(let i=0; i<action.payload.length/15; i++)
                paged.push(i);
            console.log('paginas del filtro : ', action.payload.length/15);
            return {
                ...state,
                cards: [...action.payload],
                filters: [...action.payload],
                subFilters: [...action.payload.slice(0,14)],
                amountPages: action.payload.length/15,
                paged: [...paged],
                subPaged: [...paged.slice(0,9)]
            };
        case SET_ACTUAL_PAGE_FILTER:
            console.log('entro');
            let setPages = [];
            if ( action.payload > 4 && action.payload<=state.amountPages )
                for ( let i=action.payload-4; i<=action.payload+4 && i<=state.amountPages; i++ )
                    setPages.push(i);
            else
                setPages = state.paged.slice(0,9);
            console.log('actualPageFilter : ',action.payload);
            return {
                ...state,
                actualPage: action.payload,
                subPaged: [...setPages],
                subFilters: [...state.filters.slice(action.payload*15, (action.payload*15)+15)]
            }
        case INIT_FILTERS: 
            return{
                ...state,
                filters: [...state.cards]
            };
        // =======================================================================================
        case SORT_BY_NAME_ASC:
            let arrayNameAsc = order(state.filters, 'name', 'asc');
            let preStateNameAsc = setPreStateToFilter(arrayNameAsc.length);
            return{
                ...state,
                filters: [...arrayNameAsc],
                amountPages: preStateNameAsc.amountPages,
                paged: [...preStateNameAsc.paged],
                subPaged: [...preStateNameAsc.subPaged]
            };
        case SORT_BY_NAME_DES:
            let arrayNameDes = order(state.filters, 'name', 'des');
            let preStateNameDes = setPreStateToFilter(arrayNameDes.length);
            return{
                ...state,
                filters: [...arrayNameDes],
                amountPages: preStateNameDes.amountPages,
                paged: [...preStateNameDes.paged],
                subPaged: [...preStateNameDes.subPaged]
            };
        // =======================================================================================
        case SORT_BY_ATTACK_ASC:
            let arrayAttackAsc = order(state.filters, 'attack', 'asc');
            let preStateAttackAsc = setPreStateToFilter(arrayAttackAsc.length);
            return{
                ...state,
                filters: [...arrayAttackAsc],
                amountPages: preStateAttackAsc.amountPages,
                paged: [...preStateAttackAsc.paged],
                subPaged: [...preStateAttackAsc.subPaged]
            };
        case SORT_BY_ATTACK_DES:
            let arrayAttackDes = order(state.filters, 'attack', 'des');
            let preStateAttackDes = setPreStateToFilter(arrayAttackDes.length);
            return{
                ...state,
                filters: [...arrayAttackDes],
                amountPages: preStateAttackDes.amountPages,
                paged: [...preStateAttackDes.paged],
                subPaged: [...preStateAttackDes.subPaged]
            };
        // ===========================================================
        case FILTER_BY_TYPES:
            let selectedTypes = [...action.payload];
            let filterByTypes =  state.filters.filter( c => {
                for(let i=0; i<selectedTypes.length; i++){
                    if ( !c.types.includes( selectedTypes[i] ) )
                        return false;
                }
                return true;
            } );
            let preStateFilterByTypes = setPreStateToFilter(filterByTypes.length);
            return{
                ...state,
                filters: [...filterByTypes],
                amountPages: preStateFilterByTypes.amountPages,
                paged: [...preStateFilterByTypes.paged],
                subPaged: [...preStateFilterByTypes.subPaged],
                selectedTypes
            };
        default:
            return state;
    };
};