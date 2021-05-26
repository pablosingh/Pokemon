import {
    LOAD_CARDS,
    SET_MAX,
    SET_SUB_CARDS,
    SET_POKEMON,
    SET_POKEMON_OF_DB,
    ADD_TO_CARDS,
    SORT_BY_NAME_ASC,
    SORT_BY_NAME_DES,
    SORT_BY_ATTACK_ASC,
    SORT_BY_ATTACK_DES,
    LOAD_TYPES,
    SELECT_TYPES,
    FILTER,
    FILTER_ONLY_DB,
    FILTER_ONLY_API,
    INIT_FILTEREDS,
    SET_SUB_FILTEREDS,
    FIND_BY_NAME_IN_STATE,
    DELETE_POKEMON_BY_STATE
} from './actions';

const initialState = {
    cards: [],
    subCards: [],
    // -------------------
    max: 850,
    limit: 20,
    // -------------------
    pages: [],
    subPages: [],
    actualPage: 0,
    // -------------------
    actualPokemon: {},
    // toEditPokemon: {},
    // -------------------
    types: [],
    selectedTypes: [],
    // ================================
    filtereds: [],
    subFiltereds: [],
    // -------------------
    maxFilter: 0,
    pagesFilter: [],
    subPagesFilter: [],
    actualPageFilter: 0
}

function setMaxFilter(max, limitByPage=20){
    let amountPagesFilter = max/ limitByPage;
    let arrayPagesFilter = []
    for ( let i=0; i<amountPagesFilter; i++ )
        arrayPagesFilter.push(i);
    console.log("Paginas del filtro: ", amountPagesFilter);
    return {
        maxFilter: amountPagesFilter,
        pagesFilter: [...arrayPagesFilter],
        subPagesFilter: [...arrayPagesFilter.slice(0,10)]
    };
}


export default function reducers( state = initialState, action ){
    switch(action.type){
        case LOAD_TYPES:
            return {
                ...state,
                types: [...action.payload]
            };
        case LOAD_CARDS:
            return {
                ...state,
                cards: [...action.payload],
                subCards: [...action.payload.slice(0, state.limit)]
            };
        case SET_MAX:
            let amountPages = action.payload/ state.limit;
            let arrayPages = []
            for ( let i=0; i<amountPages; i++ )
                arrayPages.push(i);
            console.log("Paginas : ", amountPages);
            return {
                ...state,
                max: amountPages,
                pages: [...arrayPages],
                subPages: [...arrayPages.slice(0,10)]
            };
        case SET_SUB_CARDS:
            console.log('Pagina : ',action.payload);
            let setPages = [];
            console.log('max : ', state.max);
            if ( action.payload > 4 && action.payload<state.max )
                for ( let i=action.payload-4; i<=action.payload+4 && i<state.max; i++ )
                    setPages.push(i);
            else if( action.payload>state.max || action.payload<0){
                return{
                    ...state
                }
            }else
                for ( let i=0; i<10; i++ )
                    setPages.push(i);
            return {
                ...state,
                actualPage: action.payload,
                subPages: setPages,
                subCards: [...state.cards.slice(action.payload*state.limit, (action.payload*state.limit)+state.limit)]
            };
        // ==================================================================
        case DELETE_POKEMON_BY_STATE:
            return {
                ...state,
                cards: state.cards.filter( c => c.id !== action.payload)
            }
        case SET_POKEMON:
            return{
                ...state,
                actualPokemon: action.payload
            };
        case SET_POKEMON_OF_DB:
            return{
                ...state,
                actualPokemon: state.cards.filter( c => c.id === action.payload )[0]
            };
        case ADD_TO_CARDS:
            return{
                ...state,
                cards: state.cards.concat(action.payload)
            }
        case FIND_BY_NAME_IN_STATE:
            const pokemonFound = state.cards.filter( c => c.name === action.payload);
            console.log(action.payload);
            if(pokemonFound.length===0){
                pokemonFound.push(state.actualPokemon);
                pokemonFound[0].name = 'Not Found';
                pokemonFound[0].image = 'Not Found';
            }
            return {
                ...state,
                actualPokemon: {...pokemonFound[0]}
            }
        // ==================================================================
        case INIT_FILTEREDS:
            return {
                ...state,
                filtereds: [...state.cards]
            };
        case SORT_BY_NAME_ASC:
            let arrayNameAsc = state.filtereds.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                else return 0;
              });
            const preState = setMaxFilter(arrayNameAsc.length);
            return {
                ...state,
                maxFilter: preState.maxFilter,
                pagesFilter: [...preState.pagesFilter],
                subPagesFilter: [...preState.subPagesFilter],
                filtereds: [...arrayNameAsc]
            };
        case SORT_BY_NAME_DES:
            let arrayNameDes = state.filtereds.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                else return 0;
              });
            const preState_des = setMaxFilter(arrayNameDes.length);
            return {
                ...state,
                maxFilter: preState_des.maxFilter,
                pagesFilter: [...preState_des.pagesFilter],
                subPagesFilter: [...preState_des.subPagesFilter],
                filtereds: [...arrayNameDes]
            };
        // ==================================================================
        case SORT_BY_ATTACK_ASC:
            let arrayAttackAsc = state.filtereds.sort(function (a, b) {
                if (a.attack > b.attack) return 1;
                else if (a.attack < b.attack) return -1;
                else return 0;
              });
            const preState_attackAsc = setMaxFilter(arrayAttackAsc.length);
            return {
                ...state,
                maxFilter: preState_attackAsc.maxFilter,
                pagesFilter: [...preState_attackAsc.pagesFilter],
                subPagesFilter: [...preState_attackAsc.subPagesFilter],
                filtereds: [...arrayAttackAsc]
            };
        case SORT_BY_ATTACK_DES:
            let arrayAttackDes = state.filtereds.sort(function (a, b) {
                if (a.attack < b.attack) return 1;
                else if (a.attack > b.attack) return -1;
                else return 0;
              });
            const preState_attackDes = setMaxFilter(arrayAttackDes.length);
            return {
                ...state,
                maxFilter: preState_attackDes.maxFilter,
                pagesFilter: [...preState_attackDes.pagesFilter],
                subPagesFilter: [...preState_attackDes.subPagesFilter],
                filtereds: [...arrayAttackDes]
            };
        // ==================================================================
        case SELECT_TYPES: 
            return {
                ...state,
                selectedTypes: [...action.payload]
            };
        case FILTER:
            // console.log(state.selectedTypes);
            let auxFilter =  state.filtereds.filter( c => {
                for(let i=0; i<state.selectedTypes.length; i++){
                    if ( !c.types.includes( state.selectedTypes[i] ) )
                        return false;
                }
                return true;
            } );
            const preState_filter = setMaxFilter(auxFilter.length);
            return {
                ...state,
                maxFilter: preState_filter.maxFilter,
                pagesFilter: [...preState_filter.pagesFilter],
                subPagesFilter: [...preState_filter.subPagesFilter],
                filtereds: [...auxFilter]
            };
        case FILTER_ONLY_DB: 
            console.log('only db');
            const onlyDB = state.filtereds.filter( c => {
                // let aux = c.id.split(' ')[0];
                if (c.id.split(' ')[0] === 'db') return true;
                else return false;
            });
            console.log(onlyDB);
            const preState_DB = setMaxFilter(onlyDB.length);
            return{
                ...state,
                maxFilter: preState_DB.maxFilter,
                pagesFilter: [...preState_DB.pagesFilter],
                subPagesFilter: [...preState_DB.subPagesFilter],
                filtereds: [...onlyDB]
            };
        case FILTER_ONLY_API:
            console.log('only api');
            const onlyAPI = state.filtereds.filter( c => {
                // let aux = c.id.split(' ')[0];
                if (c.id.split(' ')[0] === 'api') return true;
                else return false;
            });
            console.log(onlyAPI);
            const preState_API = setMaxFilter(onlyAPI.length);
            return{
                ...state,
                maxFilter: preState_API.maxFilter,
                pagesFilter: [...preState_API.pagesFilter],
                subPagesFilter: [...preState_API.subPagesFilter],
                filtereds: [...onlyAPI]
            };
        // ========================== Paginado del Filtro ============================================
        case SET_SUB_FILTEREDS:
            console.log('Pagina del Filtro: ',action.payload);
            let setPagesFilter = [];
            console.log('max del filter: ', state.maxFilter);
            if ( action.payload > 4 && action.payload<state.maxFilter )
                for ( let i=action.payload-4; i<=action.payload+4 && i<state.maxFilter; i++ )
                    setPagesFilter.push(i);
            else if( action.payload>state.maxFilter || action.payload<0){
                return{
                    ...state
                }
            }else
                for ( let i=0; i<10 && i<state.maxFilter; i++ )
                    setPagesFilter.push(i);
            return {
                ...state,
                actualPageFilter: action.payload,
                subPagesFilter: setPagesFilter,
                subFiltereds: [...state.filtereds.slice(action.payload*state.limit, (action.payload*state.limit)+state.limit)]
            };
        default: return {
            ...state
        };
    }
}