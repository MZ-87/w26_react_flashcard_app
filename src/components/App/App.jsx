import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import Banner from '../Banner/Banner'
// import Error from '../Error/Error'
import Wordcard from '../Wordcard/Wordcard'
// import ListHeader from '../ListHeader/ListHeader'
// import Wordlist from '../Wordlist/Wordlist'
// import Button from '../Button/Button'
// import words from '../data/words.json'
import style from './app.module.scss'

function App() {
  return (
    <div className={style.App}>
      <Header />
      {/* <Banner /> */}
      {/* <Error /> */}
      {/* <ListHeader />
      <Button text={'Добавить слово'} />
      {words.map((word) => {
        return <Wordlist key={word.id} word={word.word} translate={word.translate} transcription={word.transcription} tag={word.tag} />
      })} */}
      <Wordcard word={'pineapple'} />
      <Footer />
    </div>
  );
}

export default App;
