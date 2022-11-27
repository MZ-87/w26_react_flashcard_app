import React from 'react'
import Button from '../Button/Button'
import style from './wordcard.module.scss'

export default function Wordcard(props) {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <button className={style.prev_btn}><img src="./assets/arrow_back_icon.png" className={style.nav_btn} /></button>
        <div className={style.wordbox}>
          <h3 className={style.word}>{props.word}</h3>
          <Button text={'Перевод'} />
        </div>
        <button className={style.next_btn}><img src="./assets/arrow_forward_icon.png" className={style.nav_btn} /></button>
      </div>
    </div>
  )
}


