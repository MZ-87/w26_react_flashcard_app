import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import style from './app.module.scss'

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
