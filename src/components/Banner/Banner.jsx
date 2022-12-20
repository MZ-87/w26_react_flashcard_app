import React from 'react'
import {
    Link
} from 'react-router-dom'
import style from './banner.module.scss'

export default function Banner() {
    return (
        <div className={style.banner}>
            <img className={style.img} src="./assets/banner.jpg" alt="logo" />
            <div className={style.title}>Повторение - мать учения!<br /> А чтобы повторять было не скучно - воспользуйся нашим приложением!</div>
            <div className={style.subtitle}>Ты можешь учить и повторять слова с помощью карточек, а потом проверить свои знания на тренировке</div>
            <div className={style.card_btn}>
                <Link to="/cards" style={{ textDecoration: 'none', color: '#00072d' }}>Открыть карточки</Link>
            </div>
            <div className={style.train_btn}>
                <Link to="/training" style={{ textDecoration: 'none', color: '#00072d' }}>Перейти к тренировке</Link>
            </div>
        </div>
    )
}
