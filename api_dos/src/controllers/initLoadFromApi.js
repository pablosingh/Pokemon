const fetch = require('node-fetch');
const { Pokemon } = require('../models/Pokemon');
const { Type } = require('../models/Type');

async function initLoadDB( all ){
    const promesas = all.map( e => {
        let { idApi, name, image, hp, attack, defense, speed, height, weight, types } = e;
        try {
            const pokemonCreted = Pokemon.create( {
                idApi, name, image, hp, attack, defense, speed, height, weight
            } );
            return pokemonCreted;
        } catch (error) {
            console.log('Error al guardar - Nombre duplicado (catch de try)');
            console.log(error);
        }
    });
    try {
        Promise.all( promesas )
            .then( async created => {
                for(let i=0; i<all.length; i++){
                    const multipleTypesFound = [];
                    var typeFound;
                    for(let j=0; j<all[i].types.length; j++){
                        typeFound = await Type.findAll({
                            where: {
                                name: all[i].types[j]
                            }
                        });
                        multipleTypesFound.push(typeFound[0]);
                    }
                    for( let k=0; k<multipleTypesFound.length; k++ ){
                        await created[i].addType(multipleTypesFound[k]);
                        await multipleTypesFound[k].addPokemon(created[i]);
                    }
                    console.log('Guardado correctamente...');
                } 
            })
            .catch( err => console.log(err) );
    } catch (error) {
        console.log('Error (catch del 2do try)');
        console.log(error);
    }
}

async function initialLoadFromApi(){
    const promesas = [];
    const subPromesas = [];
    const all = [];
    try {
        fetch( `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118` )
            .then( js => js.json() )
            .then( data => data.results.forEach( r => promesas.push( fetch(r.url) ) ))
            .then( () => {
                Promise.all(promesas)
                    .then( values => values.forEach( v => subPromesas.push( v.json() ) ) )
                    .then( () => {
                        Promise.all(subPromesas)
                            .then( pokemones => {
                                pokemones.forEach( p => {
                                    let types = [];
                                    p.types.forEach( t => types.push(t.type.name));
                                    all.push({
                                        idApi: p.id,
                                        name: p.name,
                                        image: p.sprites.front_default,
                                        hp: p.stats[0].base_stat,
                                        attack: p.stats[1].base_stat,
                                        defense: p.stats[2].base_stat,
                                        speed: p.stats[5].base_stat,
                                        height: p.height,
                                        weight: p.weight,
                                        types
                                    });
                                });
                            } )
                            // .then( () => console.log(all) )
                            .then( () => initLoadDB(all) )
                    } )
            })
            .catch( err => console.log(err) );
    } catch (e) {
        console.log(e);
    }
};

module.exports = initialLoadFromApi;