import React from 'react'
import Wordcard from '../Wordcard/Wordcard'
// import words from '../data/words.json'
import style from './slider.module.scss'
// eslint-disable-next-line
import { useState, useEffect } from 'react'

export default function Slider({ words }) {
    // eslint-disable-next-line
    // const [cards, setCards] = useState(words)
    const [pressed, setPressed] = useState(false)
    const [cardIndex, setCardIndex] = useState(0)
    const [learned, setLearned] = useState(0);

    // useEffect(() => {
    //     setCards(words)
    // }, [])

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

        if (index !== words.length - 1) {
            index++;
            setCardIndex(index);
        } else if (index === words.length - 1) {
            setCardIndex(words.length - 1);
        }
        setPressed(false)
    }

    const countWords = () => {
        let learnedWords = learned;

        if (learnedWords !== words.length) {
            setLearned(learnedWords + 1);
        }
    };

    // if (!cards) {
    //     return <h1>Loading...</h1>
    // }

    return (
        <div className={style.main}>
            <div className={style.container}>
                <button onClick={showPrevCard} className={style.prev_btn}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
                <Wordcard
                    word={words[cardIndex].word}
                    transcription={words[cardIndex].transcription}
                    translate={words[cardIndex].translate}
                    pressed={pressed}
                    setPressed={setPressed}
                    countWords={countWords} />
                <button onClick={showNextCard} className={style.next_btn}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
            </div >
            <div className={style.word_counter}>Выучено слов: {learned}/{words.length}</div>
        </div >
    )
}
