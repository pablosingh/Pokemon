const { Pokemon } = require('../models/Pokemon');
const { Type } = require('../models/Type');

async function findByIdFn(req, res){
    console.log(req.params.id);
    if(isNaN(Number(req.params.id))) 
        return res.status(404).json({msg: 'Id invalido'});

    const found = await Pokemon.findAll({
        where: {
            id: req.params.id
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

module.exports = findByIdFn;