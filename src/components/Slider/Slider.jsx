import React from 'react'
import Wordcard from '../Wordcard/Wordcard'
import words from '../data/words.json'
import style from './slider.module.scss'

import { useState, useEffect } from 'react'

export default function Slider() {
    const [cards, setCards] = useState(false)
    const [pressed, setPressed] = useState(false)
    const [cardIndex, setCardIndex] = useState(0)
    const [learnedWords, setLearnedWords] = useState(0);

    useEffect(() => {
        setCards(words)
    }, [])

    const showPrevCard = () => {
        let index = cardIndex;

        if (index !== 0) {
            index--;
            setCardIndex(index);
        } else if (index === 0) {
            setCardIndex(0);
        }
        setPressed(false)
    }

    const showNextCard = () => {
        let index = cardIndex;

        if (index !== cards.length - 1) {
            index++;
            setCardIndex(index);
        } else if (index === cards.length - 1) {
            setCardIndex(cards.length - 1);
        }
        setPressed(false)
    }

    const countWords = () => {
        setLearnedWords(learnedWords + 1);
    };
    console.log(learnedWords);

    if (!cards) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={style.main}>
            <div className={style.container}>
                <button onClick={showPrevCard} className={style.prev_btn}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
                <Wordcard item={cards[cardIndex]} />
                <button onClick={showNextCard} className={style.next_btn}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
            </div >
            <div className={style.word_counter}>Выучено слов: {learnedWords}/{cards.length - 1}</div>
        </div >
    )
}
