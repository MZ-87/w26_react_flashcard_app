import React, { useState } from 'react'
import Button from '../Button/Button'
import style from './wordcard.module.scss'

export default function Wordcard(
  props) {
  // показываем перевод
  const showTranslation = () => {
    return (
      <div>
        <h3 className={style.translate}>{props.translate}</h3>
        <Button text={'Скрыть перевод'} onClick={hideTranslation} />
      </div>
    )
  }

  //показываем кнопку
  const hideTranslation = () => {
    <Button text={'Показать перевод'} />
  }


  // let actionItem;
  // if (pressed) {
  //   actionItem = <h3 className={style.translate}>{props.translate}</h3>;
  // } else {
  //   actionItem = <Button text={'Показать перевод'} pressed={pressed} setPressed={setPressed} onClick={handleClick} />;
  // }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <button className={style.prev_btn}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
        <div className={style.wordbox}>
          <h3 className={style.word}>{props.word}</h3>
          <h3 className={style.transcription}>{props.transcription}</h3>
          {/* <h3 className={style.translate}>{props.translate}</h3> */}
          <Button text={'Показать перевод'} onClick={showTranslation} />
          {actionItem}
        </div>
        <button className={style.next_btn}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
      </div>
    </div>
  )
}


