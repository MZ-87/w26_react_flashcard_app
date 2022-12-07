import React from 'react'
import BtnAdd from '../BtnAdd/BtnAdd'
import style from './addword.module.scss'

export default function AddWord(props) {
    return (
        <div className={style.container}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={style.buttons}>
                <div className={style.pseudoBtn}></div>
                <BtnAdd />
            </div>
        </div >
    )
}

// при нажатии на кнопку Добавить
// eslint-disable-next-line
{/* <div className={style.container}>
            <input type="text" className={style.input}></input>
            <input type="text" className={style.input}></input>
            <input type="text" className={style.input}></input>
            <input type="text" className={style.input}></input>
            <div className={style.buttons}>
                <Button text={'Сохранить'} />
                <Button text={'Отмена'} />
            </div>
        </div > */}