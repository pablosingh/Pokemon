import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import s from '../styles/Cards.module.css';

export default function Cards() {
    const subCards = useSelector( state => state.subCards );
    return (
        <div className={s.container}>
            {subCards && subCards.map( c => <Card pokemon={c} key={c.id}/>)} 
        </div>
    )
}
