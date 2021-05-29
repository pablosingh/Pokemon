require('dotenv').config();
const Sequelize = require('sequelize');

const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;

//   console.log(DB_USER, DB_PASSWORD, DB_HOST);

var db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon2`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const cards = [];
const byNameAsc = [];
const byNameDes = [];
const byAttackAsc = [];
const byAttackDes = [];
const onlyTypes = [
    "normal", "fighting", "flying", "poison", "ground",
    "rock", "bug", "ghost", "steel", "fire", 
    "water", "grass", "electric", "psychic", "ice", 
    "dragon", "dark","fairy"
];

module.exports = {
    db,
    cards,
    byNameAsc,
    byNameDes,
    byAttackAsc,
    byAttackDes,
    onlyTypes
};