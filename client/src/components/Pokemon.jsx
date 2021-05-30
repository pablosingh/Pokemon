import React from 'react';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../styles/Pokemon.module.css';

export default function Pokemon() {
    const actualPokemon = useSelector( state => state.pokemon );
    const { 
        image,
        name,
        types,
        id,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        } = actualPokemon;

    return (
        <div className={s.container}>
            <SearchBar/>
            <div className={s.cardPokemon}>
                <div className={s.imgTitle}>
                    <img src={`${image}`} alt="Imagen" className={s.imgPokemon}/>
                    <h2>{name}</h2>
                </div>
                <div className={s.details}>
                    <span>Types : { types && types.join(' | ')}</span>
                    <span>Id : {id}</span>
                    <span>Life : {hp}</span>
                    <span>Attack : {attack}</span>
                    <span>Defense : {defense}</span>
                    <span>Speed : {speed}</span>
                    <span>Height : {height}</span>
                    <span>Weight : {weight}</span>
                    <div className={s.editDelete}>
                        <Link to='/edit'><button className={s.btn}>Edit</button></Link>
                        <Link to='/delete'><button className={s.btn}>Delete</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
