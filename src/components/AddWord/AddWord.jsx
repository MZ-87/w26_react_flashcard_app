import React, { useState } from 'react'
// import BtnAdd from '../BtnAdd/BtnAdd'
import Button from '../Button/Button'
import style from './addword.module.scss'

export default function AddWord(props) {
    const [pressed, setPressed] = useState(false)
    const handleClick = () => {
        setPressed(!pressed);
    };

    return (
        <div className={style.container}>
            {pressed ? (
                <>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <div className={style.buttons}>
                        <Button text={'Сохранить'} />
                        <Button text={'Отмена'} />
                    </div>
                </>
            ) : (
                <>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={style.buttons}>
                        <div className={style.pseudoBtn}></div>
                        <button className={style.btn} onClick={handleClick}>Добавить</button>
                    </div>
                </>
            )}
        </div>
    )
}

