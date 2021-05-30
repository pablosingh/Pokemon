import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { searchPokemon } from '../redux/actions';
import s from '../styles/SearchBar.module.css';

export default function SearchBar() {
    const estado = useSelector(state => state);
    const [ searchText, setSearchText ] = useState("");

    let history = useHistory("/pokemon");
    const dispatch = useDispatch();

    const changing = (e) => setSearchText(e.target.value);
    
    const submiting = e => { 
        e.preventDefault();
        dispatch(searchPokemon(searchText));
        setSearchText("");
        history.push('/pokemon');
    }

    return (
        <div>
        <form className={s.container} action='POST'>
            <input type="searchText" 
                placeholder="Search" 
                onChange={changing}
                value={searchText}
                className={s.searchText}/>
                <button type='submit' onClick={ submiting } className={s.btn}>
                    Search
                </button>
        </form>
                <button onClick={ ()=> console.log(estado)}>
                    Estado
                </button>
        </div>
    )
}
