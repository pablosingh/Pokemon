const { byAttackAsc, pageLimit, pages } = require('../db');

function byAttackAscFn(req, res){
    console.log(req.query.page);
    if( !req.query.page ) return res.json(byAttackAsc); // Si no existe Todo
    if( isNaN(Number(req.query.page))) return res.json( byAttackAsc.slice(pageLimit*(-1))); // No es un Nro 
    else{
        if ( req.query.page<pages && req.query.page>=0 )
            res.json( byAttackAsc.slice(req.query.page*pageLimit, req.query.page*pageLimit+pageLimit) );
        else if ( req.query.page==pages)
            res.json( byAttackAsc.slice(pageLimit*(-1)));
        else
            res.json( byAttackAsc.slice(0,pageLimit));
    }
};

module.exports = byAttackAscFn;