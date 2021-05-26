import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubFiltereds } from '../redux/actions';
import s from '../styles/PagedFilter.module.css';

export default function PagedFilter() {
    const subPagesFilter = useSelector( state => state.subPagesFilter);
    const actualPageFilter = useSelector( state => state.actualPageFilter);
    const dispatch = useDispatch();
    const next='>>', prev='<<';
    return (
        <div className={s.container}>
            <div className={s.containerBtn}>
                <button className={s.btn}
                onClick={()=> {
                    if ( actualPageFilter>0 )
                        dispatch( setSubFiltereds(actualPageFilter-1));
                } }
                    >{prev}</button>

                { subPagesFilter && subPagesFilter.map( p => <button 
                    key={p}
                    className={`${s.btn} ${(p===actualPageFilter) ? s.active : ` `}`}
                    onClick={()=> {
                        dispatch( setSubFiltereds(p));
                    } }
                    >{p+1}</button>) }

                <button 
                    className={s.btn}
                    onClick={()=> {
                        dispatch( setSubFiltereds(actualPageFilter+1));
                    } }
                    >{next}</button>
            </div>
        </div>
    )
}
