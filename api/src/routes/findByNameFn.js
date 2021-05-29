const { Pokemon } = require('../models/Pokemon');
const { Type } = require('../models/Type');

async function findByNameFn(req, res){
    console.log(req.params.name);

    const found = await Pokemon.findAll({
        where: {
            name: req.params.name
        },
        include: Type
    })
    if(!found.length) res.status(404).json('Pokemon No encontrado');
    else{
        const toSend = found[0].dataValues;
        toSend.types = toSend.types.map( t => t.name);
        res.json(toSend);
    }
};

module.exports = findByNameFn;