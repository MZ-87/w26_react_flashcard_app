import React, { useState } from 'react'
import style from './wordlist.module.scss'

export default function Wordlist(props) {
    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }
    const SaveCancelBtns = () => {
        return (
            <>
                <input className={style.input} placeholder={props.word}></input>
                <input className={style.input} placeholder={props.translate}></input>
                <input className={style.input} placeholder={props.transcription}></input>
                <input className={style.input} placeholder={props.tag}></input>
                <div className={style.buttons}>
                    <button className={style.btn} >Сохранить</button>
                    <button className={style.btn} onClick={handleCancel}>Отмена</button>
                </div>
            </>
        )
    }

    const EditDeleteBtns = () => {
        return (
            <>
                <div className={style.item}>{props.word}</div>
                <div className={style.item}>{props.translate}</div>
                <div className={style.item}>{props.transcription}</div>
                <div className={style.item}>{props.tag}</div>
                <div className={style.buttons}>
                    <button className={style.btn} onClick={handleEditMode}>Редактировать</button>
                    <button className={style.btn} >Удалить</button>
                </div>
            </>
        )
    }

    return (
        <div className={style.container}>
            {isEditMode ? <SaveCancelBtns /> : <EditDeleteBtns />}
        </div >
    )
}
