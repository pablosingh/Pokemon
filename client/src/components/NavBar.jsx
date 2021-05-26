import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div className={s.container}>
            <Link to="/" className={s.btn}>Home</Link>
            <Link to="/filtered" className={s.btn}>Filters</Link>
            <Link to="/create" className={s.btn}>Create</Link>
            <Link to="/edit" className={s.btn}>Edit</Link>
            <Link to="/delete" className={s.btn}>Delete</Link>
        </div>
    )
}
