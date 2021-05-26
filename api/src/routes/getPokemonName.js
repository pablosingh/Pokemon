const fetch = require("node-fetch");

const getPokemonName = async (req, res) => {
    // console.log(req.query.name);
    // res.json(req.query.name);
    const pokemon = {};
    const idOrName = req.query.name;
    await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
            .then( js => js.json() )
            .then( data => {
                pokemon.image = data.sprites.front_default;
                pokemon.name = data.name;
                pokemon.types = [];
                data.types.forEach( t => pokemon.types.push(t.type.name) );
                pokemon.id = data.id;
                pokemon.hp = data.stats[0].base_stat;
                pokemon.attack = data.stats[1].base_stat;
                pokemon.defense = data.stats[2].base_stat;
                pokemon.speed = data.stats[5].base_stat;
                pokemon.height = data.height;
                pokemon.weight = data.weight;
                // dispatch( { type: SET_POKEMON, payload: pokemon } );
                res.json(pokemon);
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
                // dispatch( { type: SET_POKEMON, payload: pokemon } );
                res.status(404).json('Pokemon No encontrado...');
            } );
}

module.exports = getPokemonName;