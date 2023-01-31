import React, { useState } from 'react'
import style from './wordlist.module.scss'

export default function Wordlist({ item }) {
    console.log(item);
    const { word, translate, transcription, tag } = item;

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const saveCancelBtns = () => {
        return (
            <>
                <input className={style.input} placeholder='Введите слово' defaultValue={word}></input>
                <input className={style.input} placeholder='Введите перевод' defaultValue={translate}></input>
                <input className={style.input} placeholder='Введите транскрипцию' defaultValue={transcription}></input>
                <input className={style.input} placeholder='Введите категорию' defaultValue={tag}></input>
                <div className={style.buttons}>
                    <button className={style.btn} >Сохранить</button>
                    <button className={style.btn} onClick={handleCancel}>Отмена</button>
                </div>
            </>
        )
    }

    const editDeleteBtns = () => {
        return (
            <>
                <div className={style.item}>{word}</div>
                <div className={style.item}>{translate}</div>
                <div className={style.item}>{transcription}</div>
                <div className={style.item}>{tag}</div>
                <div className={style.buttons}>
                    <button className={style.btn} onClick={handleEditMode}>Редактировать</button>
                    <button className={style.btn} >Удалить</button>
                </div>
            </>
        )
    }

    return (
        <div className={style.container}>
            {isEditMode ? saveCancelBtns() : editDeleteBtns()}
        </div >
    )
}
