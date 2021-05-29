const { DataTypes } = require('sequelize');
const { db } = require('../db');
const { Pokemon } = require('./Pokemon');
const { Type } = require('./Type');

const Pokemon_Type = db.define('pokemons_types', {
    pokemonId:{
        type: DataTypes.INTEGER,
        references: {
        model: Pokemon,
        key: 'id'
        }
    },
    typeId:{
        type: DataTypes.INTEGER,
        references: {
        model: Type,
        key: 'id'
        }
    }
    });

// Pokemon.belongsToMany(Type, { through: Pokemon_Type } );
// Type.belongsToMany(Pokemon, { through: Pokemon_Type } );

module.exports = {
    Pokemon_Type
}