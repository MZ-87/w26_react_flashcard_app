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
                <div className={style.title}>Flying cards</div>
            </div>
            <div className={style.nav}>
                <div className={style.link}><Link to="/">На главную</Link></div>
                <div className={style.link}><Link to="/wordlist">Список слов</Link></div>
                <div className={style.link}><Link to="/cards">Карточки</Link></div>
                <div className={style.link}><Link to="/training">Тренировка</Link></div>
            </div>
        </div>
    )
}

