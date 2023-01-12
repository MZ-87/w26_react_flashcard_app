import React from 'react'
import style from './quiz.module.scss'
// eslint-disable-next-line
import { useState, useEffect } from 'react'

export default function Quiz({ words }) {
    const [cardIndex, setCardIndex] = useState(0)

    // const getRandomIndex = () => {
    //     let randomIndex = Math.floor(Math.random() * 10);
    //     console.log(randomIndex);
    // }
    // getRandomIndex();

    let randomIndex = Math.floor(Math.random() * 10);
    console.log(randomIndex);
    if (randomIndex <= words.length) {
        console.log('true');
        // setCardIndex(randomIndex);
    } else if (randomIndex > words.length) {
        setCardIndex(0);
        console.log('false');
    }

    const showPrevCard = () => {
        let index = cardIndex;

        if (index !== 0) {
            index--;
            setCardIndex(index);
        } else if (index === 0) {
            setCardIndex(0);
        }
    }

    const showNextCard = () => {
        let index = cardIndex;

        if (index !== words.length - 1) {
            index++;
            setCardIndex(index);
        } else if (index === words.length - 1) {
            setCardIndex(words.length - 1);
        }
    }

    return (
        <div className={style.main}>
            <div className={style.container}>
                <button className={style.prev_btn} onClick={showPrevCard}><img src="./assets/arrow_back_icon.png" alt="arrow back" className={style.nav_btn} /></button>
                <div className={style.wordbox}>
                    <h3 className={style.word}>Переведите слово: {words[cardIndex].word}</h3>
                    <button className={style.optionBtn}>{words[cardIndex].translate}</button>
                    <button className={style.optionBtn}>{words[cardIndex].translate}</button>
                    <button className={style.optionBtn}>{words[cardIndex].translate}</button>
                </div>
                <button className={style.next_btn} onClick={showNextCard}><img src="./assets/arrow_forward_icon.png" alt="arrow forward" className={style.nav_btn} /></button>
            </div>
        </div>
    )
}

//сгенерировать 4 рандомных числа, которые будут индексами слов
//все числа не должны быть больше длины массива со словами
//индекс одного из чисел 2-4 совпадает с первым, остальные - нет
//позиция правильного числа в списке тоже рандомная но не может быть больше 3

//

