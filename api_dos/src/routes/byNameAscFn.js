const { byNameAsc } = require('../db');

function byNameAscFn(req, res){
    res.json(byNameAsc);
};

module.exports = byNameAscFn;