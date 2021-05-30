import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import s from '../styles/Cards.module.css';

export default function Cards() {
    const cards = useSelector( state => state.cards );
    return (
        <div className={s.container}>
            {cards && cards.map( c => <Card pokemon={c} key={c.id}/>)} 
        </div>
    )
}
