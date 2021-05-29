const { byNameDes } = require('../db');

function byNameDesFn(req, res){
    res.json(byNameDes);
};

module.exports = byNameDesFn;