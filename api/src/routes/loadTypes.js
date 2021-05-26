const { Type } = require('../db');

const loadTypes = async (req, res) => {
    let array = [
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy"
    ];
    for (let i=0; i<array.length; i++)
        await Type.create({
            name: array[i]
        });
    // res.json('Tipos cargados...');
};

module.exports = loadTypes;