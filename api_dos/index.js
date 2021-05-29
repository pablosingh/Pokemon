//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { db } = require('./src/db.js');
const { Pokemon } = require('./src/models/Pokemon');
const { Type } = require('./src/models/Type');
const { Pokemon_Type } = require('./src/models/Pokemon_Type');
const loadCardsFromDB = require('./src/controllers/loadCardsFromDB');
const initLoadFromApi = require('./src/controllers/initLoadFromApi');
const initLoadTypes = require('./src/controllers/initLoadTypes');

db.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('listening at 3001'); // eslint-disable-line no-console
    
    Pokemon.belongsToMany(Type, { through: Pokemon_Type } );
    Type.belongsToMany(Pokemon, { through: Pokemon_Type } );
    // initLoadTypes();
    // initLoadFromApi();
    loadCardsFromDB();
  });
});
