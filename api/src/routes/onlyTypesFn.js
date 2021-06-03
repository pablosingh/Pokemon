const { onlyTypes } = require('../db');

const onlyTypesFn = (req, res) => res.json(onlyTypes);

module.exports = onlyTypesFn;