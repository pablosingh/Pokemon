const { 
    cards,
    byNameAsc,
    byNameDes,
    byAttackAsc,
    byAttackDes
 } = require('../db');

function initOrdered(){
    // console.log('init : ', cards.length);
    let aux = [];
    aux = cards.sort(function (a, b) {
      // console.log('entro al by name');
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else return 0;
      });
    aux.forEach( a => byNameAsc.push(a) );

    aux = cards.sort(function (b, a) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else return 0;
      });
    aux.forEach( a => byNameDes.push(a) );

    aux = cards.sort(function (a, b) {
        if (a.attack > b.attack) return 1;
        else if (a.attack < b.attack) return -1;
        else return 0;
      });
    aux.forEach( a => byAttackAsc.push(a) );

    aux = cards.sort(function (b, a) {
        if (a.attack > b.attack) return 1;
        else if (a.attack < b.attack) return -1;
        else return 0;
      });
    aux.forEach( a => byAttackDes.push(a) );
};

module.exports = initOrdered;