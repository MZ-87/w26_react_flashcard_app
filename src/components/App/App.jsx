import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
// import { Home, Table, Cards, Training, Error } from './Pages'
import words from '../data/words.json'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Error from '../Error/Error'
import Slider from '../Slider/Slider'
import List from '../List/List'
import Quiz from '../Quiz/Quiz'
import style from './app.module.scss'

function App() {
  return (
    <>
      <div className={style.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/wordlist" element={<List />}>Список слов</Route>
          <Route path="/cards" element={<Slider words={words} />}>Карточки</Route>
          <Route path='/training' element={<Quiz />}>Тренировка</Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
