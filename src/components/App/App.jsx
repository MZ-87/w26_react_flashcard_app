import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import Error from '../Error/Error'
import ListHeader from '../ListHeader/ListHeader'
import Wordlist from '../Wordlist/Wordlist'
import AddWord from '../AddWord/AddWord'
import words from '../data/words.json'
import style from './app.module.scss'

function App() {
  return (
    <div className={style.App}>
      <Header />
      {/* <Error /> */}
      <ListHeader />
      <AddWord />
      {words.map((word) => {
        return <Wordlist key={word.id} word={word.word} translate={word.translate} transcription={word.transcription} tag={word.tag} />
      })}
      <Footer />
    </div>
  );
}

export default App;
