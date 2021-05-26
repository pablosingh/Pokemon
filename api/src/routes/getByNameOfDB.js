const { Pokemon, Type } = require('../db');

const getByNameOfDB = async (req, res) => {
    // console.log(req.params.name);
    const found = await Pokemon.findAll({
        where: {
            name: req.params.name
        },
        include: Type
    })
    if(!found.length) res.status(404).json('Pokemon No encontrado');
    else{
        // console.log(found[0].dataValues);
        const toSend = found[0].dataValues;
        toSend.types = toSend.types.map( t => t.name);
        res.json(toSend);
    }
}

module.exports = getByNameOfDB;