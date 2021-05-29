const { Pokemon } = require('../models/Pokemon');
const { Type } = require('../models/Type');
const initOrdered = require('./initOrdered');

const { cards } = require('../db');

async function loadCardsFromDB () {
    const all = await Pokemon.findAll({
        where: {},
        include: Type
    });
    all.forEach(element => {
        const t = element.types.map( e => e.name );
        cards.push({
            id: element.id,
            idApi: element.idApi,
            name: element.name,
            image: element.image,
            hp: element.hp,
            attack: element.attack,
            defense: element.defense,
            speed: element.speed,
            height: element.height,
            weight: element.weight,
            types: [...t]
        });
    });
    initOrdered();
};

module.exports = loadCardsFromDB;