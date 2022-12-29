import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Wordcard from '../components/Wordcard'

export default function Cards() {
    return (
        <>
            <Header />
            <Wordcard word={'abdomen'} transcription={'[ˈæbdəmən]'} translate={'живот'} />
            <Footer />
        </>
    )
}
