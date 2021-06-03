import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubFilters, setActualPageFilter } from '../redux/actions';
import s from '../styles/PagedFilter.module.css';

export default function PagedFilter() {
    const subPagesFilter = useSelector( state => state.filters.subPaged);
    const actualPageFilter = useSelector( state => state.filters.actualPage);
    const amountPages = useSelector( state => state.filters.amountPages);
    const dispatch = useDispatch();
    const next='>>', prev='<<';
    return (
        <div className={s.container}>
            <div className={s.containerBtn}>
                <button className={s.btn}
                onClick={()=> {
                    if ( actualPageFilter>0 )
                        dispatch( setActualPageFilter(actualPageFilter-1));
                } }
                    >{prev}</button>

                { subPagesFilter.length && subPagesFilter.map( p => <button 
                    key={p}
                    className={`${s.btn} ${(p===actualPageFilter) ? s.active : ` `}`}
                    onClick={()=> {
                        dispatch( setActualPageFilter(p));
                    } }
                    >{p+1}</button>) }

                <button 
                    className={s.btn}
                    onClick={()=> {
                        if ( actualPageFilter<amountPages-1 )
                            dispatch( setActualPageFilter(actualPageFilter+1));
                    } }
                    >{next}</button>
            </div>
        </div>
    )
}
