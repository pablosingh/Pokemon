const { byAttackAsc } = require('../db');

function byAttackAscFn(req, res){
    res.json(byAttackAsc);
};

module.exports = byAttackAscFn;