const { byAttackDes } = require('../db');

function byAttackDesFn(req, res){
    res.json(byAttackDes);
};

module.exports = byAttackDesFn;