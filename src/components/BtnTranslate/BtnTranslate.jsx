import React, { useState } from 'react'
// import BtnHideTranslation from '../BtnHideTranslation/BtnHideTranslation'
import style from './btntranslate.module.scss'

export default function BtnTranslate(props) {
    const [pressed, setPressed] = useState(false)
    const handleClick = () => {
        setPressed(!pressed);
    };

    return (
        <>
            {pressed ?
                <div className={style.translate}>
                    <span>{props.translate}</span>
                    {/* <BtnHideTranslation /> */}
                </div> :
                <button className={style.btn} onClick={handleClick}>Показать перевод</button>}
        </>
    );
}

