const { Type } = require('../db');

const getTypes = async (req, res) => {
    const types = await Type.findAll({});
    // console.log(types);
    res.json(types);
}

module.exports = getTypes;