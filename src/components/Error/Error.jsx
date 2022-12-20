import React from 'react'
// import Button from '../Button/Button'
import {
    Link
} from 'react-router-dom'
import style from './error.module.scss'

export default function Error() {

    return (
        <div className={style.error}>
            <div className={style.title}>Упс! Что-то пошло не так..</div>
            <img src="./assets/error404.png" alt="" className={style.img} />
            <div className={style.subtitle}>Мы скоро это исправим, а пока давай вернемся в начало</div>
            {/* <Button text={'На главную'} onClick={handleClick} /> */}
            <div className={style.link}><Link to="/" style={{ textDecoration: 'none', color: '#00072d' }}>На главную</Link></div>
        </div >
    )
}
