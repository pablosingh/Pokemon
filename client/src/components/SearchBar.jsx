import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { searchPokemon } from '../redux/actions';
import s from '../styles/SearchBar.module.css';

export default function SearchBar() {
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
    )
}
