const { Router } = require('express');
const router = Router();

const test = require('./test');
const cardsFromDB = require('./cardsFromDB');
const byNameAscFn = require('./byNameAscFn');
const byNameDesFn = require('./byNameDesFn');
const byAttackAscFn = require('./byAttackAscFn');
const byAttackDesFn = require('./byAttackDesFn');
const filterTypeFn = require('./filterTypeFn');
const findByIdFn = require('./findByIdFn');
const findByNameFn = require('./findByNameFn');
const pagesAndLimitFn = require('./pagesAndLimitFn');
const onlyTypesFn = require('./onlyTypesFn');

router.get('/test', test );
router.get('/cards', cardsFromDB);
router.get('/types', onlyTypesFn);

router.get('/ordered/name/asc', byNameAscFn); // query de paginas
router.get('/ordered/name/des', byNameDesFn);

router.get('/ordered/attack/asc', byAttackAscFn);
router.get('/ordered/attack/des', byAttackDesFn);

router.get('/filter', filterTypeFn); // Con query
router.get('/find/id/:id', findByIdFn);
router.get('/find/name/:name', findByNameFn);

router.get('/pages', pagesAndLimitFn);

module.exports = router;