const fetch = require("node-fetch");
const { Pokemon, Type } = require('../db');

const loadCards = async () => {
    console.log('================ loadCards ================');
    const cards = [];
    await fetch( `https://pokeapi.co/api/v2/pokemon?offset=301&limit=550` )
        .then( js => js.json() )
        .then( async data => {
            // Todo el contenido
            for(let i=0; i<data.results.length; i++){
                await fetch(`${data.results[i].url}`)
                    .then( js => js.json())
                    .then( data => {
                        // agregando tipos
                        let types = [];
                        data.types.forEach( t => types.push(t.type.name));
                        cards.push({
                            id: data.id,
                            name: data.name,
                            img: data.sprites.front_default,
                            attack: data.stats[1].base_stat, // Agregado despues para ordenar
                            types
                        });
                    } )
            }
            // dispatch( { type: SET_MAX, payload: data.results.length} );
            console.log(data.results.length);
        } )
        // .then( () => console.log(cards) )
        .then( () => {
            for ( let i=0; i<cards.length; i++ )
                savePokemon(cards[i]);
        } )
        .then( () => console.log('Fin de save') )
        .catch( err => console.log(err) );
};

const savePokemon = async (poke) => {
    const { id, name, img, attack, types} = poke;
    const pokemonCreted = await Pokemon.create( {
        idApi: id,
        name, 
        image: img, 
        attack, 
    } );
    // console.log('Mitad de save');
    var multipleTypesFound = [];
    for(let i=0; i<types.length; i++){
        const typeFound = await Type.findAll({
            where: {
                name: types[i]
            }
        });
        multipleTypesFound.push(typeFound[0]);
    }

    for( let j=0; j<multipleTypesFound.length; j++ ){
        await pokemonCreted.addType(multipleTypesFound[j]);
        await multipleTypesFound[j].addPokemon(pokemonCreted);
    }
    // console.log('Fin de save');
};

module.exports = loadCards;