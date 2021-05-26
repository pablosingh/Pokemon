const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Pokemon = sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING
    },
    hp : {
      type: DataTypes.INTEGER
    },
    attack: {
      type: DataTypes.INTEGER
    },
    defense: {
      type: DataTypes.INTEGER
    },
    speed: {
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
  });
  
  const Type = sequelize.define('type', {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  const Pokemon_Type = sequelize.define('pokemons_types', {
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

  Pokemon.belongsToMany(Type, { through: Pokemon_Type } );
  Type.belongsToMany(Pokemon, { through: Pokemon_Type } );
};

//    x     image,
//   x      name,
//    ---------     types,
//   x      id,
//   x      hp,
//   x     attack,
//   x     defense,
//   x     speed,
//   x      height,
//   x      weight,