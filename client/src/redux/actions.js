export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_PAGE_CARDS = 'SET_PAGE_CARDS';
export const LOAD_PAGES = 'LOAD_PAGES';
export const SET_ACTUAL_PAGE = 'SET_ACTUAL_PAGE';
export const SET_POKEMON = 'SET_POKEMON';
export const LOAD_FILTERS = 'LOAD_FILTERS';
export const SET_MAX_PAGES_FILTERS = 'SET_MAX_PAGES_FILTERS';

export function loadCards(){
    return async function(dispatch){
        await fetch( `http://localhost:3001/cards?page=0`).then( js => js.json() )
            .then( cards => dispatch( { type: LOAD_CARDS, payload: cards } ) )
            .catch( err => console.log(err) );
    };
};

export function setPageCards(page){
    return async function(dispatch){
        await fetch( `http://localhost:3001/cards?page=${page}`).then( js => js.json() )
            .then( cards => dispatch( { type: SET_PAGE_CARDS, payload: cards } ) )
            .catch( err => console.log(err) );
    };
};

export function loadPages(){
    return async function(dispatch){
        await fetch( `http://localhost:3001/pages`).then( js => js.json() )
            .then( pages => dispatch( { type: LOAD_PAGES, payload: pages.pages } ) )
            .catch( err => console.log(err) );
    };
};

export function setActualPage(page){
    return {
        type: SET_ACTUAL_PAGE,
        payload: page
    };
};

export function searchPokemon(idOrName){
    if(isNaN(Number(idOrName)))
        return async function(dispatch){
            await fetch( `http://localhost:3001/find/name/${idOrName}`).then( js => js.json() )
                .then( pokemon => dispatch( { type: SET_POKEMON, payload: pokemon } ) )
                .catch( err => console.log(err) );
        };
    else
        return async function(dispatch){
            await fetch( `http://localhost:3001/find/id/${idOrName}`).then( js => js.json() )
                .then( pokemon => dispatch( { type: SET_POKEMON, payload: pokemon } ) )
                .catch( err => console.log(err) );
        };
};

// ===================== Filtros ================================

export function loadFilters(order, direction, page){
    return async function(dispatch){
        await fetch( `http://localhost:3001/ordered/${order}/${direction}?page=${page}`).then( js => js.json() )
            .then( filters => dispatch( { type: LOAD_FILTERS, payload: filters } ) )
            .catch( err => console.log(err) );
    };
};

export function setMaxPagesFilters(max){
    return {
        type: SET_MAX_PAGES_FILTERS,
        payload: max
    };
};