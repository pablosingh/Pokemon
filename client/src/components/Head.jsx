import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { loadTypes } from '../redux/actions';
import { loadCards, loadPages, searchPokemon, loadFilters } from '../redux/actions';
import Logo from './Logo';
import User from './User';
import NavBar from './NavBar';
import s from '../styles/Head.module.css';

export default function Head() {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( loadCards() );
        dispatch( loadPages() );
        dispatch( searchPokemon(1) );
        dispatch( loadFilters() );
    }, [] );
    return (
        <div className={s.head}>
            <Logo/>
            <NavBar/>
            <User/>
        </div>
    )
}
