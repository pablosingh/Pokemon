const { byAttackDes, pageLimit, pages } = require('../db');

function byAttackDesFn(req, res){
    console.log(req.query.page);
    if( !req.query.page ) return res.json(byAttackDes); // Si no existe Todo
    if( isNaN(Number(req.query.page))) return res.json( byAttackDes.slice(pageLimit*(-1))); // No es un Nro 
    else{
        if ( req.query.page<pages && req.query.page>=0 )
            res.json( byAttackDes.slice(req.query.page*pageLimit, req.query.page*pageLimit+pageLimit) );
        else if ( req.query.page==pages)
            res.json( byAttackDes.slice(pageLimit*(-1)));
        else
            res.json( byAttackDes.slice(0,pageLimit));
    }
};

module.exports = byAttackDesFn;