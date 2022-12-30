import React from 'react'
import Wordcard from '../Wordcard/Wordcard'
import words from '../data/words.json'
import style from './slider.module.scss'

import { useState, useEffect } from 'react'

export default function Slider() {
    const [cards, setCards] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [cardIndex, setCardIndex] = useState(0)

    useEffect(() => {
        setCards(words)
    }, [])


    function prevCard() {
        let index = cardIndex;

        if (index !== 0) {
            index--;
            setCardIndex(index);
        } else if (index === 0) {
            setCardIndex(cards.length - 1);
        }
        setClicked(false)
    }

    function nextCard() {
        let index = cardIndex;

        if (index !== cards.length - 1) {
            index++;
            setCardIndex(index);
        } else if (index === cards.length - 1) {
            setCardIndex(0);
        }
        setClicked(false)
    }

    if (!cards) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={style.main}>
            <div className={style.container}>
                <button onClick={prevCard} className={style.prev_btn}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
                <Wordcard item={cards[cardIndex]} />
                <button onClick={nextCard} className={style.next_btn}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
            </div >
        </div >
    )
}
