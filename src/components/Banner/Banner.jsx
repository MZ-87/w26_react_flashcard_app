import React from 'react'
import Button from '../Button/Button'
import style from './banner.module.scss'

export default function Banner() {
    return (
        <div className={style.banner}>
            <img className={style.img} src="./assets/banner.jpg" alt="" />
            <div className={style.title}>Повторение - мать учения!<br /> А чтобы повторять было не скучно - воспользуйся нашим приложением!</div>
            <div className={style.subtitle}>Ты можешь учить и повторять слова с помощью карточек, а потом проверить свои знания на тренировке</div>
            <div className={style.card_btn}><Button text={'Открыть карточки'} /></div>
            <div className={style.train_btn}><Button text={'Перейти к тренировке'} /></div>
        </div>
    )
}
