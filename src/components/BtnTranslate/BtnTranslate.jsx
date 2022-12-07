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

    return (
        <>
            {isPressed ?
                <div className={style.translate}>
                    <span>{props.translate}</span>
                    <button className={style.btn} onClick={handleCancel}>Скрыть перевод</button>
                </div> :
                <button className={style.btn} onClick={handleClick}>Показать перевод</button>}
        </>
    );
}

//дописать стили, а то перевод не по центру