import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addPokemonFilter } from '../redux/actions';
import s from '../styles/Create.module.css';

export default function Create() {
    // const dispatch = useDispatch();
    let history = useHistory();

    const [data, setData] = useState({});
    const [checked, setChecked] = useState({});
    const dispatch = useDispatch();

    const checking = e => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
    }
    const validate = (checked) => {
        let array = [];
        for ( const prop in checked )
            if ( checked[prop] )
                array.push(prop);
        return array;
    }

    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const types = useSelector( state => state.types );
    const submiting = async e => {
        e.preventDefault();
        console.log('Creando...');
        const toSend = {
            name: data.name,
            image: data.image,
            hp: data.hp,
            attack: data.attack,
            defense: data.defense,
            speed: data.speed,
            height: data.height,
            weight: data.weight,
            types: [...validate(checked)]
        }
        console.log(toSend);
        console.log(checked);
        await fetch('http://localhost:3001/pokemon', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toSend)
        } ) .then( js => js.json() )
            .then( pokemon => {
                dispatch( addPokemonFilter(pokemon) );
            } )
            .catch( err => console.error(err) );
        //     .then( async res => {
        //         console.log('Status : ',res.status);
        //         if ( res.status === 404){
        //             toSend.name = 'Error - Nombre duplicado'
        //             // dispatch( { type: SET_POKEMON, payload: toSend } )
        //             history.push('/pokemon');
        //         }else{
        //             await fetch(`http://localhost:3001/db/byName/${toSend.name}`)
        //                 .then( js => {
        //                     console.log(js);
        //                     return js.json();
        //                 } )
        //                 .then( data => {
        //                     toSend.id = `db ${data.id}`;
        //                 } )
        //                 // .then( dispatch( addToCards( toSend ) ) )
        //                 // .then( () => dispatch( { type: SET_POKEMON, payload: toSend } ) )
        //                 .then( () => history.push('/pokemon') )
        //                 .catch();
        //         }
        //     } )
        //     .catch( err => console.error(err) );
    }
    return (
        <form className={s.container} action='POST'>
            <div className={s.subContainer}>
                <fieldset className={s.data}>
                    <h2>Create Pokemon</h2>
                    <label htmlFor="name" className={s.labelData} >Name 
                        <input type="text" name="name" className={s.inputData} value={data['name']}
                        onChange={changing}/></label>
                    <label htmlFor="image" className={s.labelData} >Image 
                        <input type="text" name="image" className={s.inputData}
                        onChange={changing}/></label>
                    <label htmlFor="hp" className={s.labelData} >Hp 
                        <input type="text" name="hp" className={s.inputData}
                        onChange={changing}/></label>
                    <label htmlFor="attack" className={s.labelData} >Attack 
                        <input type="text" name="attack" className={s.inputData}
                        onChange={changing}/></label>
                    <label htmlFor="defense" className={s.labelData} >Defense 
                        <input type="text" name="defense" className={s.inputData}
                        onChange={changing}/></label>
                    <label htmlFor="speed" className={s.labelData} >Speed
                        <input type="text" name="speed" className={s.inputData}
                        onChange={changing}/></label>
                    <label htmlFor="height" className={s.labelData} >Height 
                        <input type="text" name="height" className={s.inputData}
                        onChange={changing}/></label>
                    <label htmlFor="weight" className={s.labelData} >Weight 
                        <input type="text" name="weight" className={s.inputData}
                        onChange={changing}/></label>
                    <button type="submit" onClick={submiting}
                        className={s.btn}>Create</button>
                </fieldset>
                <fieldset className={s.types}>
                    <label htmlFor="types" className={s.itemType} >Types<br/></label>
                    <div className={s.listTypes}>
                        { types && types.map( t => <label className={s.itemType} key={t} >{t}
                            <input type="checkbox" name={t}
                            onChange={checking} className={s.check}/></label> ) }
                    </div>
                </fieldset>
            </div>
        </form>
    )
}
