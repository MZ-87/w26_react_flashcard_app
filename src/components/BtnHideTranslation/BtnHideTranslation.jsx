import React, { useState } from 'react'
import BtnTranslate from '../BtnTranslate/BtnTranslate'
import style from './btnhidetranslation.module.scss'

export default function BtnHideTranslation() {
    const [pressed, setPressed] = useState(false)
    const handleClick = () => {
        setPressed(!pressed);
    };

    return (
        <div className={style.translate}>
            {pressed ?
                <BtnTranslate /> :
                <button className={style.btn} onClick={handleClick}>Скрыть перевод</button>}
        </div>
    );
}

