import React from 'react';
import Filters from './Filters';
import Card from './Card';
import PagedFilter from './PagedFilter';
import {  useSelector } from 'react-redux'
import s from '../styles/ShowFiltered.module.css';

export default function ShowFiltered() {
    const subFiltereds = useSelector( state => state.subFiltereds );
    return (
        <div className={s.container}>
            <Filters/>
            <div className={s.bodyFilter}>
                <h2 className={s.title}>Filtereds</h2>
                <PagedFilter/>
                <div className={s.filtereds}>
                    { subFiltereds && subFiltereds.map( f => <Card pokemon={f} key={f.id}/> ) }
                </div>
            </div>
        </div>
    )
}
