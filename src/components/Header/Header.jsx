import React from 'react'
import style from './header.module.scss'

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.img} src='./assets/studying.png' alt='logo' />
                <div className={style.title}>Learning English words</div>
            </div>
            <div className={style.nav}>
                {/* <a href='#'>Wordlist</a>
                <a href='#'>Cards</a> */}
            </div>
        </div>
    )
}

// взять картинки у ани