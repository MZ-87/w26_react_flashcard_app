import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
// import { Home, Wordlist, Cards, Training, Error } from './Pages'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Error from '../Error/Error'
import Wordcard from '../Wordcard/Wordcard'
import List from '../List/List'
import style from './app.module.scss'

function App() {
  return (
    <>
      <div className={style.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/wordlist" element={<List />}>Список слов</Route>
          <Route path="/cards" element={<Wordcard word={'abdomen'} transcription={'[ˈæbdəmən]'} translate={'живот'} />}>Карточки</Route>
          <Route path='/training'>Тренировка</Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
