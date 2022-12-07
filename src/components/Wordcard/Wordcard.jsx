import React from 'react'
import BtnTranslate from '../BtnTranslate/BtnTranslate'
import style from './wordcard.module.scss'

export default function Wordcard(props) {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <button className={style.prev_btn}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
        <div className={style.wordbox}>
          <h3 className={style.word}>{props.word}</h3>
          <h3 className={style.transcription}>{props.transcription}</h3>
          <BtnTranslate translate={props.translate} />

        </div>
        <button className={style.next_btn}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
      </div>
    </div>
  )
}



