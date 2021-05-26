const fetch = require("node-fetch");

const getPokemons = async (req, res) => {
    const cards = [];
    await fetch( `https://pokeapi.co/api/v2/pokemon?offset=0&limit=12` )
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
        .then( data => {
            // dispatch( { type: LOAD_CARDS, payload: cards } );
            // console.log(cards);
            res.status(200).json(cards);
        } )
        .catch( err => console.log(err) );
}

module.exports = getPokemons;