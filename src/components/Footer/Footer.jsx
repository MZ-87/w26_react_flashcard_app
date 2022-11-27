import React from 'react'
import style from './footer.module.scss'

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <img className={style.img} src='./assets/studying2.png' alt='logo'></img>
                <span className={style.text}> Created by MZ-87 ⓒ 2022</span>
            </div>
        </div>
    )
}
