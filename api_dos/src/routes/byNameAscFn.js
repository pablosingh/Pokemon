const { byNameAsc, pageLimit, pages } = require('../db');

function byNameAscFn(req, res){
    console.log(req.query.page);
    if( !req.query.page ) return res.json(byNameAsc); // Si no existe Todo
    if( isNaN(Number(req.query.page))) return res.json( byNameAsc.slice(pageLimit*(-1))); // No es un Nro 
    else{
        if ( req.query.page<pages && req.query.page>=0 )
            res.json( byNameAsc.slice(req.query.page*pageLimit, req.query.page*pageLimit+pageLimit) );
        else if ( req.query.page==pages)
            res.json( byNameAsc.slice(pageLimit*(-1)));
        else
            res.json( byNameAsc.slice(0,pageLimit));
    }
};

module.exports = byNameAscFn;