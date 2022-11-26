import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
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
