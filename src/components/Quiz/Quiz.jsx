import React from 'react'
// eslint-disable-next-line
import words from '../data/words.json'
import style from './quiz.module.scss'

export default function Quiz() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <button className={style.prev_btn}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
                <div className={style.wordbox}>
                    <h3 className={style.word}>Orange</h3>
                    <button className={style.optionBtn}>Апельсин</button>
                    <button className={style.optionBtn}>Обезьяна</button>
                    <button className={style.optionBtn}>Ёж</button>
                </div>
                <button className={style.next_btn}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
            </div>
        </div>
    )
}
