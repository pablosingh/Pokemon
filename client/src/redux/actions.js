import loadCardsFn  from './loadCardsFn';
import searchPokemonFn from './searchPokemonFn';
// ===========================================================
export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_MAX = 'SET_MAX';
export const SET_SUB_CARDS = 'SET_SUB_CARDS';
// export const SET_ACTUAL_PAGE = 'SET_ACTUAL_PAGE';
export const SET_POKEMON = 'SET_POKEMON';
export const SET_POKEMON_OF_DB = 'SET_POKEMON_OF_DB';

export const ADD_TO_CARDS = 'ADD_TO_CARDS';
// Ordenamiento
export const SORT_BY_NAME_ASC = 'SORT_BY_NAME';
export const SORT_BY_NAME_DES = 'SORT_BY_NAME_DES';
export const SORT_BY_ATTACK_ASC = 'SORT_BY_ATTACK_ASC';
export const SORT_BY_ATTACK_DES = 'SORT_BY_ATTACK_DES';

export const MAX_TYPES = 18;
export const LOAD_TYPES = 'LOAD_TYPES';
export const SELECT_TYPES = 'SELECT_TYPES';
export const FILTER = 'FILTER';
export const FILTER_ONLY_DB = 'FILTER_ONLY_DB';
export const FILTER_ONLY_API = 'FILTER_ONLY_API';
export const INIT_FILTEREDS = 'INIT_FILTEREDS';

export const SET_SUB_FILTEREDS = 'SET_SUB_FILTEREDS';
export const SET_MAX_FILTER = 'SET_MAX_FILTER';

export const FIND_BY_NAME_IN_STATE = 'FIND_BY_NAME_IN_STATE';
export const DELETE_POKEMON_BY_STATE = 'DELETE_POKEMON_BY_STATE';

// =============================================================================================

export function loadTypes(){
    return async function(dispatch){
        const types = [];
        for (let i=1; i<=MAX_TYPES; i++)
            await fetch( `https://pokeapi.co/api/v2/type/${i}` )
                    .then( js => js.json() )
                    .then( type => {
                        types.push(type.name);
                    } )
                    .catch( err => console.log(err) );
        console.log(types)
        dispatch ({
            type: LOAD_TYPES,
            payload: types
        });
    };
};

// =============================================================================================

export function loadCards(){
    return loadCardsFn;
}

// =============================================================================================

export function setSubCards( index ){
    return {
        type: SET_SUB_CARDS,
        payload: index
    }
};
// =============================================================================================

export const searchPokemon = searchPokemonFn;

// =============================================================================================

export function deletePokemonByState(id){
    return {
        type: DELETE_POKEMON_BY_STATE,
        payload: id
    };
};

export function findByNameInState(name){
    return {
        type: FIND_BY_NAME_IN_STATE,
        payload: name
    }
}

// ========================= Ordenamientos ======================================================

export function sortByNameAsc(){
    return { type: SORT_BY_NAME_ASC, payload: null };
};

export function sortByNameDes(){
    return { type: SORT_BY_NAME_DES, payload: null };
};

export function sortByAttackAsc(){
    return { type: SORT_BY_ATTACK_ASC, payload: null };
};

export function sortByAttackDes(){
    return { type: SORT_BY_ATTACK_DES, payload: null };
};

// ==================== Filtrados =================================

export function selectTypes(array){
    return {
        type: SELECT_TYPES,
        payload: array
    }
}

export function filter(){
    return {
        type: FILTER,
        payload: null
    }
}

export function filterOnlyDB(){
    return {
        type: FILTER_ONLY_DB,
        payload: null
    }
}

export function filterOnlyApi(){
    return{
        type: FILTER_ONLY_API,
        payload: null
    }
}

export function initFiltereds(){
    return {
        type: INIT_FILTEREDS,
        payload: null
    }
}
// ================== Paginado de los Filtros ==================

export function setSubFiltereds( index ){
    return {
        type: SET_SUB_FILTEREDS,
        payload: index
    }
};

export function setMaxFilter(max){
    return{
        type: SET_MAX_FILTER,
        payload: max
    }
}

// export const setMaxFilter = max => ({ type: SET_MAX_FILTER, payload: max });

// ================== Para agregar los creados ==================

export function addToCards(pokemon){
    return {
        type: ADD_TO_CARDS,
        payload: pokemon
    }
}