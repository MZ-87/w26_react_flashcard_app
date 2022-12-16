import React, { useState } from 'react'
import style from './btntranslate.module.scss'

export default function BtnTranslate(props) {
    const [isPressed, setPressed] = useState(false)
    const handleClick = () => {
        setPressed(!isPressed);
    };

    // const handleCancel = () => {
    //     setPressed(!isPressed);
    // };

    const ShowTranslation = () => {
        return (
            <div className={style.translate}>
                <span>{props.translate}</span>
                {/* <button className={style.btn} onClick={handleCancel}>Скрыть перевод</button> */}
            </div>
        )
    }
    const HideTranslation = () => {
        return (
            <button className={style.btn} onClick={handleClick}>Показать перевод</button>
        )
    }

    return isPressed ? <ShowTranslation /> : <HideTranslation />;
}

