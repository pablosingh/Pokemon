export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_PAGE_CARDS = 'SET_PAGE_CARDS';
export const LOAD_PAGES = 'LOAD_PAGES';
export const SET_ACTUAL_PAGE = 'SET_ACTUAL_PAGE';
export const SET_POKEMON = 'SET_POKEMON';
export const LOAD_FILTERS = 'LOAD_FILTERS';
// export const SET_MAX_PAGES_FILTERS = 'SET_MAX_PAGES_FILTERS';
export const SET_ACTUAL_PAGE_FILTERS = 'SET_ACTUAL_PAGE_FILTERS';
export const SET_SUB_FILTERS = 'SET_SUB_FILTERS';
export const SET_ACTUAL_PAGE_FILTER = 'SET_ACTUAL_PAGE_FILTER';
//=================================
export const SORT_BY_NAME_ASC = 'SORT_BY_NAME_ASC';
export const SORT_BY_NAME_DES = 'SORT_BY_NAME_DES';
export const SORT_BY_ATTACK_ASC = 'SORT_BY_ATTACK_ASC';
export const SORT_BY_ATTACK_DES = 'SORT_BY_ATTACK_DES';
//================================
export const LOAD_TYPES = 'LOAD_TYPES';
export const FILTER_BY_TYPES = 'FILTER_BY_TYPES';
export const INIT_FILTERS = 'INIT_FILTERS';
// ====================================
export const ADD_POKEMON_FILTER = 'ADD_POKEMON_FILTER';

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

export function loadFilters(){
    return async function(dispatch){
        await fetch( `http://localhost:3001/cards`).then( js => js.json() )
            .then( cards => dispatch( { type: LOAD_FILTERS, payload: cards } ) )
            .catch( err => console.log(err) );
    };
    // return async function(dispatch){
    //     await fetch( `http://localhost:3001/ordered/${order}/${direction}?page=${page}`).then( js => js.json() )
    //         .then( filters => dispatch( { type: LOAD_FILTERS, payload: filters } ) )
    //         .catch( err => console.log(err) );
    // };
};

export function setSubFilters(page){
    return{
        type: SET_SUB_FILTERS,
        payload: page
    };
};

export function setActualPageFilter(page){
    return {
        type: SET_ACTUAL_PAGE_FILTER,
        payload: page
    };
};

export function sortByNameAsc(){
    return {
        type: SORT_BY_NAME_ASC,
        payload: null
    };
};

export function sortByNameDes(){
    return{
        type: SORT_BY_NAME_DES,
        payload: null
    }
}

export function sortByAttackAsc(){
    return{
        type: SORT_BY_ATTACK_ASC,
        payload: null
    };
};

export function sortByAttackDes(){
    return{
        type: SORT_BY_ATTACK_DES,
        payload: null
    };
};

export function loadTypes(){
    return async function(dispatch){
        await fetch( `http://localhost:3001/types`).then( js => js.json() )
            .then( types => dispatch( { type: LOAD_TYPES, payload: types } ) )
            .catch( err => console.log(err) );
    };
};

export function filterByTypes( arrayTypes ){
    return{
        type: FILTER_BY_TYPES,
        payload: arrayTypes
    };
};

export const initFilters = () => ({ type: INIT_FILTERS, payload: null });

export const addPokemonFilter = (pokemon) => ({ type: ADD_POKEMON_FILTER, payload: pokemon });