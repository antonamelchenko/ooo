import React from 'react'

import './Contacts.css'

const Contacts = () => {
  return (
    <div className='row contacts'>
      <div className='col s6 offset-s3'>
        <h3 className='contacts__header'>Наши контакты</h3>
        <div className='contacts__offlineStore'>
          <span>booksStore на Арбатской</span>
          <p>152004, г.Москва, ул. Арбатская, д.23</p>
          <p className='number'>
            <a href='tel:+7 985 545 04 17'>+7 985 545 04 17</a>
          </p>
          <p>Лучше пишите в телеграмм</p>
          <p>booksStore_full-ignore@mail.ru</p>
          <p>Ежедневно с 10 a.m до 12 p.m</p>
        </div>
        <div className='contacts__onlineStore'>
          <span>booksStore онлайн</span>
          <p className='number'>
            <a href='tel:+7 985 545 04 17'>+7 985 545 04 17</a>
          </p>
          <p>booksStore_Dendy-D@mail.ru</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts
