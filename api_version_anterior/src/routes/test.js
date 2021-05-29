const fetch = require("node-fetch");
const { Pokemon, Type } = require('../db');

const test = (req, res) => {
    const promesas = [];
    const subPromesas = [];
    const all = [];
    try {
        fetch( `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1100` )
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
                                        id: p.id,
                                        name: p.name,
                                        img: p.sprites.front_default,
                                        attack: p.stats[1].base_stat,
                                        types
                                    });
                                });
                            } )
                            .then( () => res.json(all) )
                    } )
            })
            .catch( err => console.log(err) );
    } catch (e) {
        res.json({ msg: e });
    }
};

module.exports = test;