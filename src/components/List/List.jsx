import React from 'react'
import Wordlist from '../Wordlist/Wordlist'
import words from '../data/words.json'
import style from './list.module.scss'

export default function List() {
    return (
        <div className={style.container}>
            <ul className={style.list_container}>
                <li className={style.item}> Слово</li>
                <li className={style.item}>Перевод</li>
                <li className={style.item}>Транскрипция</li>
                <li className={style.item}>Категория</li>
                <li className={style.item}></li>
            </ul >
            {words.map(item => (
                <Wordlist key={item.id} item={{ ...item }} />
            ))}
        </div>
    )
}
