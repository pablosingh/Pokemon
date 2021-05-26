import React from 'react';
import s from '../styles/User.module.css';
import user from '../img/perfil.png';

export default function User() {
    return (
        <div className={s.container}>
            <img src={user} className={s.userImage} alt="User"/>
            <span className={s.userName}>User</span>
        </div>
    )
}
