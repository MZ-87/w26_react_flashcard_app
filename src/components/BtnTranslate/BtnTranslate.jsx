import React, { useState } from 'react'
import style from './btntranslate.module.scss'

export default function BtnTranslate(props) {
    const [isPressed, setPressed] = useState(false)
    const handleClick = () => {
        setPressed(!isPressed);
    };

    const handleCancel = () => {
        setPressed(!isPressed);
    };

    const showTranslation = () => {
        return (
            <button className={style.btn} onClick={handleCancel}><span className={style.translate}>{props.translate}</span></button>
        )
    }
    const hideTranslation = () => {
        return (
            <button className={style.btn} onClick={handleClick}>Показать перевод</button>
        )
    }

    return isPressed ? showTranslation() : hideTranslation();
}

