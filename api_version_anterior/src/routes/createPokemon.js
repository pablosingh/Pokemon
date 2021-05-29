const { Pokemon, Type } = require('../db');

const createPokemon =  async (req, res) => {
    console.log(req.body);
    const { name, image, hp, attack, defense, speed, height, weight } = req.body;

    const types = [...req.body.types];
    console.log(types);

    try {
        const pokemonCreted = await Pokemon.create( {
            name, image, hp, attack, defense, speed, height, weight
        } );

        const multipleTypesFound = [];
        var typeFound;
        for(let i=0; i<types.length; i++){
            typeFound = await Type.findAll({
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
        console.log('Guardado correctamente...');
        res.json('ok');
    } catch (error) {
        console.log('Error al guardar - Nombre duplicado');
        res.status(404).json('Error al guardar - Nombre duplicado');
    }
};

module.exports = createPokemon;