import React, { useState } from 'react'
import style from './btntranslate.module.scss'

export default function BtnTranslate(props) {
    const [pressed, setPressed] = useState(false)
    const handleClick = () => {
        setPressed(!pressed);
    };

    return (
        <div className={style.translate}>
            {pressed ?
                <span>{props.translate}</span> :
                <button className={style.btn} onClick={handleClick}>Показать перевод</button>}
        </div>
    );
}

