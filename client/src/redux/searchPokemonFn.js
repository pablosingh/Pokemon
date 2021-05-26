import {
    SET_POKEMON,
    SET_POKEMON_OF_DB,
    FIND_BY_NAME_IN_STATE
} from './actions';

export default function searchPokemonFn (idOrName) {
    const code = idOrName.split(' ');
    let id = Number(code[1]);
    if ( code[0] === 'db' ){
        return function(dispatch){
            dispatch( { type: SET_POKEMON_OF_DB, payload: idOrName } );
        }
    }else if( code[0] === 'api' )
        return function(dispatch){
            if (!id) id = code[0];
            const pokemon = {};
            return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    .then( js => js.json() )
                    .then( data => {
                        pokemon.image = data.sprites.front_default;
                        pokemon.name = data.name;
                        pokemon.types = [];
                        data.types.forEach( t => pokemon.types.push(t.type.name) );
                        pokemon.id = `api ${data.id}`;
                        console.log('Tipo : ', typeof(data.id));
                        pokemon.hp = data.stats[0].base_stat;
                        pokemon.attack = data.stats[1].base_stat;
                        pokemon.defense = data.stats[2].base_stat;
                        pokemon.speed = data.stats[5].base_stat;
                        pokemon.height = data.height;
                        pokemon.weight = data.weight;
                        dispatch( { type: SET_POKEMON, payload: pokemon } );
                    } )
                    .catch( err => {
                        console.error(err);
                        pokemon.image = null;
                        pokemon.name = null;
                        pokemon.types = null;
                        pokemon.id = null;
                        pokemon.hp = null;
                        pokemon.attack = null;
                        pokemon.defense = null;
                        pokemon.speed = null;
                        pokemon.height = null;
                        pokemon.weight = null;
                        dispatch( { type: SET_POKEMON, payload: pokemon } );
                    } );
        }
    else{
        return function(dispatch){
            if (!id) id = code[0]; // Es un nombre
            const pokemon = {};
            return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    .then( js => js.json() )
                    .then( data => {
                        pokemon.image = data.sprites.front_default;
                        pokemon.name = data.name;
                        pokemon.types = [];
                        data.types.forEach( t => pokemon.types.push(t.type.name) );
                        pokemon.id = `api ${data.id}`;
                        console.log('Tipo : ', typeof(data.id));
                        pokemon.hp = data.stats[0].base_stat;
                        pokemon.attack = data.stats[1].base_stat;
                        pokemon.defense = data.stats[2].base_stat;
                        pokemon.speed = data.stats[5].base_stat;
                        pokemon.height = data.height;
                        pokemon.weight = data.weight;
                        dispatch( { type: SET_POKEMON, payload: pokemon } );
                    } )
                    .catch( err => {
                        console.error(err);
                        console.log('Es un nombre para buscar en db osea en memoria');
                        // pokemon.image = null;
                        // pokemon.name = null;
                        // pokemon.types = null;
                        // pokemon.id = null;
                        // pokemon.hp = null;
                        // pokemon.attack = null;
                        // pokemon.defense = null;
                        // pokemon.speed = null;
                        // pokemon.height = null;
                        // pokemon.weight = null;
                        // dispatch( { type: SET_POKEMON, payload: pokemon } );
                        dispatch( { type: FIND_BY_NAME_IN_STATE, payload: id } );
                    } );
                }
    }
}