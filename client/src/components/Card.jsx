import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchPokemon } from '../redux/actions';
import s from '../styles/Card.module.css';

export default function Card(props) {
    const { id, name, types, image, attack} = props.pokemon;
    const dispatch = useDispatch();
    return (
        <Link to="/pokemon" 
            className={s.container} 
            onClick={ () => {
                console.log(id);
                dispatch(searchPokemon(id));
            }}>
                <img src={image} alt="Imagen" className={s.imgCard}/>
                <h2 className={s.nameCard}>{name}</h2>
                <span>Attack : {attack}</span>
                <span>Types : { types && types.join(' | ')}</span>
        </Link>
    )
}
