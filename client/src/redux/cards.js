import {
    SET_SUB_CARDS,
    DELETE_POKEMON_BY_STATE,
    SET_POKEMON_OF_DB,
    ADD_TO_CARDS,
    FIND_BY_NAME_IN_STATE,
    INIT_FILTEREDS
} from './actions';

const initialState = {
    cards: [],
    subCards: []
};

export default function cards( state = initialState, action){
    switch(action.type){
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
        case DELETE_POKEMON_BY_STATE:
            return {
                ...state,
                cards: state.cards.filter( c => c.id !== action.payload)
            }
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
        case INIT_FILTEREDS:
            return {
                ...state,
                filtereds: [...state.cards]
            };
        default:
            return{
                ...state
            };
    };
};