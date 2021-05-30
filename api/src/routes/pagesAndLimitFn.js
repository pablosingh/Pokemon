const { pages, pageLimit } = require('../db');

const pagesAndLimitFn = (req, res) => res.json( { pages, pageLimit } );

module.exports = pagesAndLimitFn;