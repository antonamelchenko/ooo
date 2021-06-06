import React from 'react'
import ProSlider from '../../components/ProSlider/ProSlider'
import BooksSlider from '../../components/BooksSlider/BooksSlider'
import Articte from '../../components/Article/Articte'

import './Main.css'

const Main = () => {
  return (
    <main className='main'>
      <h2 className='main__header'>
        <cite>
          "Книга – это мечта, которую вы держите в руках. – Нил Гейман"
        </cite>
      </h2>
      <section className='main__top-slider'>
        <ProSlider />
      </section>
      <section className='main__aboutUs'>
        <h3>
          Книжный интернет магазин <span>booksStore</span>
        </h3>
        <Articte />
      </section>
      <section className='main__popular'>
        <h3>Скоро в продаже</h3>
        <BooksSlider />
      </section>
    </main>
  )
}

export default Main
