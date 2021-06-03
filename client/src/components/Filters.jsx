import React, { useState } from 'react';
import { 
    setActualPageFilter,
    sortByNameAsc,
    sortByNameDes,
    sortByAttackAsc,
    sortByAttackDes
//     selectTypes,
//     filter,
//     filterOnlyDB,
//     filterOnlyApi,
//     setSubFiltereds
} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import s from '../styles/Filters.module.css';
import { Link } from 'react-router-dom';

export default function Filters() {
    const dispatch = useDispatch();
    const types = useSelector( state => state.types );

    const [checked, setChecked] = useState({});

    const changing = (e) => {
        // console.log(e);
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
    }
    const validate = () => {
        let array = [];
        for ( const prop in checked )
            if ( checked[prop] )
                array.push(prop);
        return array;
    }

    return (
        <div className={s.container}>
            <div className={s.order}>
                <h2>Ordenar por</h2>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        dispatch(sortByNameAsc());
                        dispatch(setActualPageFilter(0));
                    } }className={s.btn} >Nombre Asc</button>
                </Link>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        dispatch(sortByNameDes());
                        dispatch(setActualPageFilter(0));
                    } } className={s.btn}>Nombre Des</button>
                </Link>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        dispatch(sortByAttackAsc());
                        dispatch(setActualPageFilter(0));
                    } } className={s.btn}>Fuerza Asc</button>
                </Link>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        dispatch(sortByAttackDes());
                        dispatch(setActualPageFilter(0));
                    } } className={s.btn}>Fuerza Des</button>
                </Link>
            </div>
            <div className={s.filter}>
                <Link to="/filtered" >
                    <button className={s.btn}
                        onClick={() => {
                            // dispatch(filterOnlyDB());
                            // dispatch(setSubFiltereds(0));
                        }}
                        >solo de DB</button>
                </Link>
                <Link to="/filtered" >
                    <button className={s.btn}
                    onClick={() => {
                        // dispatch(filterOnlyApi());
                        // dispatch(setSubFiltereds(0));
                    }}
                    >solo de Api</button>
                </Link>
            </div>
            <div className={s.filter}>
                {/* <h2 className={s.subTitle}>Filtrar por</h2> */}
                { types && types.map( t => <label
                        key={t} className={s.item}>
                            {t}
                        <input type="checkbox" 
                        name={t}
                        value={t}
                        onChange={changing}
                        className={s.check}
                        />
                    </label>) }
                <Link to="/filtered">
                    <button onClick={()=>{
                        // dispatch( selectTypes( validate() ) );
                        // dispatch( filter() );
                        // dispatch( setSubFiltereds(0));
                        }} className={s.btn}>Aplicar</button>
                </Link>
            </div>
        </div>
    )
}
