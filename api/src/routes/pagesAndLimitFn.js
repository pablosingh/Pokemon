const { pageLimit, cards } = require('../db');

const pagesAndLimitFn = (req, res) => res.json( { pages: cards.length/pageLimit, pageLimit } );

module.exports = pagesAndLimitFn;