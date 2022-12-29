import React from 'react'
import Wordcard from '../Wordcard/Wordcard'
import words from '../data/words.json'
import style from './slider.module.scss'

import { useState, useEffect } from 'react'

export default function Slider() {
    const [cards, setCards] = useState(false)
    const [slideIndex, setSlideIndex] = useState(0)

    //в useEffect должна быть асинхронная функция. выполняющая запрос на сервер 
    //и возвращающая массив с данными. Потом этот массив присваивается переменной users
    useEffect(() => {
        setCards(words)
    }, [])


    function prevSlide() {
        let index = slideIndex;

        if (index !== 0) {
            index--;
            setSlideIndex(index);
        } else if (index === 0) {
            setSlideIndex(cards.length - 1);
        }
    }

    function nextSlide() {
        let index = slideIndex;

        if (index !== cards.length - 1) {
            index++;
            setSlideIndex(index);
        } else if (index === cards.length - 1) {
            setSlideIndex(0);
        }
    }

    if (!cards) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={style.container}>
            <div className={style.main}>
                <button onClick={prevSlide} className={style.prev_btn}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
                <Wordcard item={cards[slideIndex]} />
                <button onClick={nextSlide} className={style.next_btn}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
            </div >
        </div >
    )
}
