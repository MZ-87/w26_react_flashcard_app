import React from 'react'
import BtnTranslate from '../BtnTranslate/BtnTranslate'
import style from './wordcard.module.scss'

// // показываем перевод
// const showTranslation = (props) => {
//   return (
//     <div>
//       <h3 className={style.translate}>{props.translate}</h3>
//       <Button text={'Скрыть перевод'} />
//     </div >
//   )
// }

// // показываем кнопку
// const hideTranslation = (props) => {
//   return <Button text={'Показать перевод'} />
// }

// let actionItem;
// //состояние
// const [clicked, setClicked] = useState(false);
// const handleClick = () => {
//   setClicked((prevState) => !prevState);
// }
// //условие
// actionItem = clicked ? showTranslation() : ''

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



