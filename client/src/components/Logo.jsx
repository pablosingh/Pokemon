import React from 'react';
import s from '../styles/Logo.module.css';
import logo from '../img/ash_pikachu.png';

export default function Logo() {
    return (
        <div className={s.container}>
            <img src={logo} className={s.logo} alt="Logo"/>
            <span className={s.pokemon}>Pokemon</span>
        </div>
    )
}
