import React from 'react'
import style from './header.module.scss'

export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img className={style.img} src='./assets/studying.png' alt='logo' />
                <div className={style.title}>Flying cards</div>
            </div>
            <div className={style.nav}>
                <div>Список слов</div>
                <div>Карточки</div>
                <div>Тренировка</div>

                {/* <div><a href='#'>Список слов</a></div>
                <div><a href='#'>Карточки</a></div>
                <div><a href='#'>Тренировка</a></div> */}
            </div>
        </div>
    )
}

