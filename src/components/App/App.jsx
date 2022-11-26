import React from 'react'
import Header from '../Header/Header'
// import Banner from '../Banner/Banner'
import Error from '../Error/Error'
import Footer from '../Footer/Footer'
import style from './app.module.scss'

function App() {
  return (
    <div className={style.App}>
      <Header />
      {/* <Banner /> */}
      <Error />
      <Footer />
    </div>
  );
}

export default App;
