const { Pokemon } = require('../models/Pokemon');
const { Type } = require('../models/Type');
const { types } =require('../db');

const test = async (req, res) => {
    // console.log(req.query.id);
    // const found = await Pokemon.findAll({
    //     where: {
    //         name: 'pidgeotto'
    //     },
    //     include: Type
    // })
    // if(!found.length) res.status(404).json('Pokemon No encontrado');
    // else{
    //     // console.log(found[0].dataValues);
    //     const toSend = found[0].dataValues;
    //     toSend.types = toSend.types.map( t => t.name);
    //     console.log(toSend);
    //     res.json(toSend);
    // }
    // // console.log(found);
    // // res.json('ok');
    res.json( types );
}

module.exports = test;