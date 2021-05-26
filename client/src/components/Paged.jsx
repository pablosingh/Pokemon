import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSubCards } from '../redux/actions';
import s from '../styles/Paged.module.css';

export default function Paged() {
    const subPages = useSelector( state => state.subPages);
    const actualPage = useSelector( state => state.actualPage);
    const dispatch = useDispatch();
    const next='>>', prev='<<';
    return (
        <div className={s.container}>
            <div className={s.containerBtn}>
                <button className={s.btn}
                onClick={()=> {
                    if ( actualPage>0 )
                        dispatch( setSubCards(actualPage-1));
                } }
                    >{prev}</button>

                { subPages && subPages.map( p => <button 
                    key={p}
                    className={`${s.btn} ${(p===actualPage) ? s.active : ` `}`}
                    onClick={()=> {
                        dispatch( setSubCards(p));
                    } }
                    >{p+1}</button>) }

                <button 
                    className={s.btn}
                    onClick={()=> {
                        dispatch( setSubCards(actualPage+1));
                    } }
                    >{next}</button>
            </div>
        </div>
    )
}
