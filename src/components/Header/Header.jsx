import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import style from './header.module.scss'

export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img className={style.img} src='./assets/studying.png' alt='logo' />
                <div className={style.title}><Link to="/" style={{ textDecoration: 'none' }}>Flying cards</Link></div>
            </div>
            <div className={style.nav}>
                <div className={style.link}><Link to="/wordlist" style={{ textDecoration: 'none' }}>Список слов</Link></div>
                <div className={style.link}><Link to="/cards" style={{ textDecoration: 'none' }}>Карточки</Link></div>
                <div className={style.link}><Link to="/training" style={{ textDecoration: 'none' }}>Тренировка</Link></div>
            </div>
        </div>
    )
}

