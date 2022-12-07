import React, { useState } from 'react'
import style from './btnadd.module.scss'

export default function BtnAdd(props) {
    const [pressed, setPressed] = useState(false)
    const handleClick = () => {
        setPressed(!pressed);
    };

    return (
        <button className={style.btn} onClick={handleClick}>Добавить</button>
    );
}

