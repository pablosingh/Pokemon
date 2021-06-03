import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initFilters } from '../redux/actions';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Cards from './Cards';
import Paged from './Paged';
import s from '../styles/Home.module.css';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('init filtereds');
        dispatch(initFilters());
    }, [])
    return (
        <div className={s.container}>
            <Filters/>
            <div className={s.bigArea}>
                <SearchBar/>
                <Paged/>
                <Cards/>
            </div>
        </div>
    )
}
