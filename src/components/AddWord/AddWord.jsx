import React, { useState } from 'react'
import style from './addword.module.scss'

export default function AddWord(props) {
    // const [pressed, setPressed] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    return (
        <div className={style.container}>
            {isEditMode ? (
                <>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <input type="text" className={style.input}></input>
                    <div className={style.buttons}>
                        <button className={style.btn} >Сохранить</button>
                        <button className={style.btn} onClick={handleCancel}>Отмена</button>
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
                        <button className={style.btn} onClick={handleEditMode}>Добавить</button>
                    </div>
                </>
            )}
        </div>
    )
}

