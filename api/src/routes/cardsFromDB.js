const { cards, pageLimit, pages } = require('../db');

const cardsFromDB = (req, res) => {
    console.log(req.query.page);
    if( !req.query.page ) return res.json(cards); // Si no existe Todo
    if( isNaN(Number(req.query.page))) return res.json( cards.slice(pageLimit*(-1))); // No es un Nro 
    else{
        if ( req.query.page<pages && req.query.page>=0 )
            res.json( cards.slice(req.query.page*pageLimit, req.query.page*pageLimit+pageLimit) );
        else if ( req.query.page==pages)
            res.json( cards.slice(pageLimit*(-1)));
        else
            res.json( cards.slice(0,pageLimit));
    }
};

module.exports = cardsFromDB;