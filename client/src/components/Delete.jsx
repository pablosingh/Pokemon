import React from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { DELETE_POKEMON_BY_STATE } from '../redux/actions'
import s from '../styles/Delete.module.css';

export default function Delete() {
    let history = useHistory();
    const dispatch = useDispatch();
    const actualPokemon = useSelector( state => state.pokemon );
    const deleting = async () => {
        // console.log(actualPokemon.id);
        // const [ code, id ] = actualPokemon.id.split(' ');
        // if ( code === 'api' ) {
        //     console.log('No se puede borrar un Pokemon de la Api Externa...');
        //     history.push('/');
        // }
        // else if ( code === 'db' ){
        //     await fetch('http://localhost:3001/pokemon/delete', {
        //         method: 'DELETE',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(actualPokemon)
        //         })
        //         .then( res => {
        //             if (res.status === 200)
        //             dispatch( { type: DELETE_POKEMON_BY_STATE, payload: actualPokemon.id  });
        //             history.push('/');
        //         } )
        //         .catch( err => console.error(err));
        // }else console.log('Error inesperado...');
    }
    return (
        <div className={s.container}>
            <SearchBar/>
            <h1>Pokemon</h1>
            <Card pokemon={actualPokemon}/>
            <h1>Delete ?</h1>
            <div>
                <button onClick={deleting} className={s.btn}>Yes</button>
                <button onClick={ () => history.push('/')} className={s.btn}>No</button>
            </div>
        </div>
    )
}
