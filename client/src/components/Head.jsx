import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCards, loadTypes } from '../redux/actions';
import Logo from './Logo';
import User from './User';
import NavBar from './NavBar';
import s from '../styles/Head.module.css';

export default function Head() {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( loadCards() );
        dispatch( loadTypes() );
    }, [] );
    return (
        <div className={s.head}>
            <Logo/>
            <NavBar/>
            <User/>
        </div>
    )
}
