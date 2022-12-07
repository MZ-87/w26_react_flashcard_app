import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import Error from '../Error/Error'
// import Wordcard from '../Wordcard/Wordcard'
import Banner from '../Banner/Banner'
// import words from '../data/words.json'
import style from './app.module.scss'

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
