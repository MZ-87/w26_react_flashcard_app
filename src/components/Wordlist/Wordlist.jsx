import React from 'react'
import Button from '../Button/Button'
import style from './wordlist.module.scss'

export default function Wordlist(props) {
    return (
        <div className={style.container}>
            <div className={style.item}>{props.word}</div>
            <div className={style.item}>{props.translate}</div>
            <div className={style.item}>{props.transcription}</div>
            <div className={style.item}>{props.tag}</div>
            <div className={style.buttons}>
                <Button text={'Редактировать'} />
                <Button text={'Удалить'} />
            </div>
        </div >
    )
}

// при нажатии на кнопку Редактировать
// export default function Wordlist(props) {
//     return (
//         <>
//             <ListHeader />
//             <div className={style.container}>
//                 <input className={style.input} placeholder={props.word}></input>
//                 <input className={style.input} placeholder={props.translate}></input>
//                 <input className={style.input} placeholder={props.transcription}></input>
//                 <input className={style.input} placeholder={props.tag}></input>
//                 <div className={style.buttons}>
//                     <Button text={'Сохранить'} />
//                     <Button text={'Отмена'} />
//                 </div>
//             </div >

//         </>
//     )
// }