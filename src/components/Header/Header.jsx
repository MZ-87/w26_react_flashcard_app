import React from 'react'
import {
    NavLink
} from 'react-router-dom'
import style from './header.module.scss'

export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <NavLink end to="/" style={{ textDecoration: 'none', color: '#00072d' }}><img className={style.img} src='./assets/studying.png' alt='logo' /></NavLink>
                <div className={style.title}><NavLink end to="/" style={{ textDecoration: 'none', color: '#00072d' }}>Flying cards</NavLink></div>
            </div>
            <div className={style.nav}>
                <div className={style.link}><NavLink to="/wordlist" style={{ textDecoration: 'none', color: '#00072d' }}>Список слов</NavLink></div>
                <div className={style.link}><NavLink to="/cards" style={{ textDecoration: 'none', color: '#00072d' }}>Карточки</NavLink></div>
                <div className={style.link}><NavLink to="/training" style={{ textDecoration: 'none', color: '#00072d' }}>Тренировка</NavLink></div>
            </div>
        </div>
    )
}

