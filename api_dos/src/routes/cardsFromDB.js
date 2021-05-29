const { cards } = require('../db');

const loadCardsFromDB = (req, res) => res.json(cards);

module.exports = loadCardsFromDB;