const { Router } = require('express');
const { Pokemon, Type, Pokemon_Type } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const createPokemon = require('./createPokemon.js');
const getPokemons = require('./getPokemons.js');
const getPokemonId = require('./getPokemonId.js');
const getPokemonName = require('./getPokemonName.js');
const getTypes = require('./getTypes.js');
const getAllPokemon = require('./getAllPokemon');
const getByNameOfDB = require('./getByNameOfDB');
const editPokemon = require('./editPokemon');
const deletePokemon = require('./deletePokemon');

const test = require('./test');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/pokemon', createPokemon ); // Crea un pokemon en la DB

router.get('/pokemons', getPokemons ); // Trae los 12 primeros Pok de la Api
router.get('/pokemon/:id', getPokemonId ); // Busca por id en Api
router.get('/pokemon', getPokemonName ); // Busca por name en Api
router.get('/types', getTypes ); // Trae los tipos de la Api
router.get('/db/byName/:name', getByNameOfDB); // Busca por nombre en DB

router.delete('/pokemon/delete', deletePokemon);
router.put('/pokemon/edit', editPokemon );

router.get('/getAll', getAllPokemon);

router.get('/test', test );

module.exports = router;
