const { Pokemon, Type, Pokemon_Type } = require('../db');

const deletePokemon = async (req, res) => {
    console.log('req.body : ', req.body);
    const id = req.body.id.split(' ')[1];
    Pokemon.destroy({
        where:{
            id: id
        }
    })
    res.json({ msg: 'ok' });
};

module.exports = deletePokemon;