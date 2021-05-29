const { onlyTypes, types } = require('../db');

function filterTypeFn(req, res) {
    console.log(req.query.type);
    if( !req.query.type || !onlyTypes.includes(req.query.type) ) 
        res.json({ msg: 'Tipo Invalido' });
    else
        res.json( types.filter( t => t.name===req.query.type) );
};

module.exports = filterTypeFn;