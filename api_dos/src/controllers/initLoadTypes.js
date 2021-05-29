const { Type } = require('../models/Type');
const { onlyTypes } = require('../db');

async function loadTypes() {
    for (let i=0; i<onlyTypes.length; i++)
        await Type.create({
            name: onlyTypes[i]
        });
};

module.exports = loadTypes;