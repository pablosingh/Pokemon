const { Pokemon, Type } = require('../db');

const getAllPokemon = async (req, res) => {
    const pokemons = await Pokemon.findAll({
        include: Type
    });
    res.json(pokemons);
}

module.exports = getAllPokemon;
// ====================================================================================
