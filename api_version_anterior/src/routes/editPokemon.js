const { Pokemon, Type, Pokemon_Type } = require('../db');

const editPokemon = async(req, res) => {
    console.log(req.body);
    const { id, name, image, hp, attack, defense, speed, height, weight, types } = req.body;
    const [ code, idNro ] = id.split(' ');
    // console.log(code);
    // console.log(idNro);
    if ( code === 'db' ){
        await Pokemon.destroy({
            where:{
                id: Number(idNro)
            }
        });
    }  
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

module.exports = editPokemon;