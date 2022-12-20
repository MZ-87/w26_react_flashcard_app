import React from 'react'
import ListHeader from '../ListHeader/ListHeader'
import Wordlist from '../Wordlist/Wordlist'
import words from '../data/words.json'
// import style from './app.module.scss'

export default function List() {
    return (
        <>
            <ListHeader />
            {words.map(item => (
                <Wordlist key={item.id} item={{ ...item }} />
            ))}
        </>
    )
}
