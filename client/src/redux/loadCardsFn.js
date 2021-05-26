import {
    LOAD_CARDS,
    SET_POKEMON,
    SET_MAX,
    INIT_FILTEREDS
} from './actions';

export default async function loadCardsFn(dispatch) {
        const cards = [];
        await fetch( `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10` )
            .then( js => js.json() )
            .then( async data => {
                for(let i=0; i<data.results.length; i++){
                    await fetch(`${data.results[i].url}`)
                        .then( js => js.json())
                        .then( data => {
                            // agregando tipos
                            let types = [];
                            data.types.forEach( t => types.push(t.type.name));
                            cards.push({
                                id: `api ${data.id}`,
                                name: data.name,
                                image: data.sprites.front_default,
                                attack: data.stats[1].base_stat, // Agregado para despues ordenar
                                types
                            });
                        } )
                        .catch( err => console.log(err) );
                }
                // console.log(data.results.length);
                dispatch( { type: LOAD_CARDS, payload: cards } );
                dispatch( { type: SET_POKEMON, payload: cards[0] } );
            } )
            // ======================================
            .then( async () => {
                await fetch( `https://pokeapi.co/api/v2/pokemon?offset=11&limit=839` )
                    .then( js => js.json() )
                    .then( async data => {
                        // Todo el contenido
                        for(let i=0; i<data.results.length; i++){
                            await fetch(`${data.results[i].url}`)
                                .then( js => js.json())
                                .then( data => {
                                    // agregando tipos
                                    let types = [];
                                    data.types.forEach( t => types.push(t.type.name));
                                    cards.push({
                                        id: `api ${data.id}`,
                                        name: data.name,
                                        image: data.sprites.front_default,
                                        attack: data.stats[1].base_stat, // Agregado despues para ordenar
                                        types
                                    });
                                } )
                        }
                        // dispatch( { type: SET_MAX, payload: data.results.length} );
                        console.log(data.results.length);
                    } )
                    .catch( err => console.log(err) );
                } )
            .then( async () => {
                await fetch(`http://localhost:3001/getAll`)
                    .then( js => js.json())
                    .then( data => {
                        data.forEach( p => cards.push( {
                            id: `db ${p.id}`,
                            name: p.name,
                            image: p.image,
                            hp: p.hp,
                            attack: p.attack,
                            defense: p.defense,
                            speed: p.speed,
                            height: p.height,
                            weight: p.weight,
                            types: p.types.map( t => {
                                return t.name;
                            } )
                        } ));
                        console.log(data);
                    } )
                    .catch( err => console.log(err) );
            } )
            .then( data => {
                dispatch( { type: LOAD_CARDS, payload: cards } );
                dispatch( { type: SET_MAX, payload: cards.length} );
                dispatch( { type: INIT_FILTEREDS, payload: null } );
                console.log(cards);
            } )
             .catch( err => console.log(err) );
    };
