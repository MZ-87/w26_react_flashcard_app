import React from 'react'
import style from './listheader.module.scss'

export default function ListHeader() {
    return (
        <ul className={style.container}>
            < li className={style.item}> Слово</li>
            <li className={style.item}>Перевод</li>
            <li className={style.item}>Транскрипция</li>
            <li className={style.item}>Категория</li>
            <li className={style.item}></li>
        </ul >
    )
}
