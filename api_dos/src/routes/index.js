const { Router } = require('express');
const router = Router();

const test = require('./test');
const cardsFromDB = require('./cardsFromDB');
const byNameAscFn = require('./byNameAscFn');
const byNameDesFn = require('./byNameDesFn');
const byAttackAscFn = require('./byAttackAscFn');
const byAttackDesFn = require('./byAttackDesFn');

router.get('/test', test );
router.get('/cards', cardsFromDB);

router.get('/ordered/name/asc', byNameAscFn);
router.get('/ordered/name/des', byNameDesFn);

router.get('/ordered/attack/asc', byAttackAscFn);
router.get('/ordered/attack/des', byAttackDesFn);

module.exports = router;