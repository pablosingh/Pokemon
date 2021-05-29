const { Pokemon } = require('../models/Pokemon');
const { Type } = require('../models/Type');

const test = async (req, res) => {
    const found = await Pokemon.findAll({
        where: {
            name: 'pidgeotto'
        },
        include: Type
    })
    if(!found.length) res.status(404).json('Pokemon No encontrado');
    else{
        // console.log(found[0].dataValues);
        const toSend = found[0].dataValues;
        toSend.types = toSend.types.map( t => t.name);
        console.log(toSend);
        res.json(toSend);
    }
    // console.log(found);
    // res.json('ok');
}

module.exports = test;