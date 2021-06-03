import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPageCards, setActualPage } from '../redux/actions';
import s from '../styles/Paged.module.css';

export default function Paged() {
    // const subPages = useSelector( state => state.subPages);
    const actualPage = useSelector( state => state.pages.actualPage);
    const amountPages = useSelector( state => state.pages.pages);
    const paged = useSelector( state => state.pages.subPaged);

    const dispatch = useDispatch();
    const next='>>', prev='<<';
    return (
        <div className={s.container}>
            <div className={s.containerBtn}>
                <button className={s.btn}
                onClick={()=> {
                    if ( actualPage>0 ){
                        dispatch( setActualPage(actualPage-1) );
                        dispatch( setPageCards(actualPage-1));
                    }

                } }
                    >{prev}</button>

                { paged && paged.map( p => <button 
                    key={p}
                    className={`${s.btn} ${(p===actualPage) ? s.active : ` `}`}
                    onClick={()=> {
                        dispatch( setPageCards(p) );
                        dispatch( setActualPage(p) );
                    } }
                    >{p+1}</button>) }

                <button 
                    className={s.btn}
                    onClick={()=> {
                        if ( actualPage<amountPages ){
                            dispatch( setPageCards(actualPage+1));
                            dispatch( setActualPage(actualPage+1) );
                        }
                    } }
                    >{next}</button>
            </div>
        </div>
    )
}
