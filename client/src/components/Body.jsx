import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Pokemon from './Pokemon';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';
import ShowFiltered from './ShowFiltered';
import s from '../styles/Body.module.css';

export default function Body() {
    return (
        <div className={s.body}>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/pokemon">
                <Pokemon/>
            </Route>
            <Route exact path="/create">
                <Create/>
            </Route>
            <Route exact path="/edit">
                <Edit/>
            </Route>
            <Route exact path="/delete">
                <Delete/>
            </Route>
            <Route exact path="/filtered">
                <ShowFiltered/>
            </Route>
        </div>
    )
}
