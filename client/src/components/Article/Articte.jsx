import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './Article.css'

toast.configure()
const Articte = () => {
  const notify = (event) => {
    event.preventDefault()
    toast.error('Произошла ошибка соединения')
  }

  return (
    <article>
      <div className='article__container'>
        <ul>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>phone_iphone</i>
              </span>
            </div>
            <div className='icon-description'>
              <span className='icon-description__text' onClick={notify}>
                <a href={'*'}>Круглосуточная</a>{' '}
              </span>
              <span className='icon-description__text' onClick={notify}>
                <a href={'*'}>поддержка</a>{' '}
              </span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>local_shipping</i>
              </span>
            </div>
            <div className='icon-description'>
              <span className='icon-description__text1' onClick={notify}>
                <a href={'*'}>Доставка</a>
              </span>
              <span className='icon-description__text2' onClick={notify}>
                <a href={'*'}>по всей стране</a>
              </span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>loyalty</i>
              </span>
            </div>
            <div className='icon-description'>
              <span className='icon-description__text1' onClick={notify}>
                <a href={'*'}>Подарочные</a>
              </span>
              <span className='icon-description__text2' onClick={notify}>
                <a href={'*'}>купоны</a>
              </span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>transfer_within_a_station</i>
              </span>
            </div>
            <div className='icon-description'>
              <span className='icon-description__text1' onClick={notify}>
                <a href={'*'}>Обратная</a>
              </span>
              <span className='icon-description__text2' onClick={notify}>
                <a href={'*'}>связь</a>
              </span>
            </div>
          </li>
          <li>
            <div className='icon'>
              <span onClick={notify}>
                <i className='medium material-icons'>search</i>
              </span>
            </div>
            <div className='icon-description'>
              <span className='icon-description__text1' onClick={notify}>
                <a href={'*'}>Найдете все</a>
              </span>
              <span className='icon-description__text2' onClick={notify}>
                <a href={'*'}>что искали</a>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <ToastContainer limit={3} />
    </article>
  )
}

export default Articte

// transfer_within_a_station
