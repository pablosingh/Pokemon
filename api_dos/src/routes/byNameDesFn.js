const { byNameDes, pageLimit, pages } = require('../db');

function byNameDesFn(req, res){
    console.log(req.query.page);
    if( !req.query.page ) return res.json(byNameDes); // Si no existe Todo
    if( isNaN(Number(req.query.page))) return res.json( byNameDes.slice(pageLimit*(-1))); // No es un Nro 
    else{
        if ( req.query.page<pages && req.query.page>=0 )
            res.json( byNameDes.slice(req.query.page*pageLimit, req.query.page*pageLimit+pageLimit) );
        else if ( req.query.page==pages)
            res.json( byNameDes.slice(pageLimit*(-1)));
        else
            res.json( byNameDes.slice(0,pageLimit));
    }
};

module.exports = byNameDesFn;