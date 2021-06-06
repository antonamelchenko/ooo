import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

import './NavBar.css'

import icon from '../../images/main-icon.png'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const NavBar = () => {
  const [drop, setDrop] = useState(true)

  const dropHandler = (event) => {
    event.preventDefault()
    setDrop(!drop)
  }

  useEffect(() => {
    document.addEventListener('mousedown', function (event) {
      if (event.target.id !== 'dropdown') {
        setDrop(true)
      }
    })
  })

  const [bool, setBool] = useState(false)

  const handleClick = () => {
    setBool(!bool)
  }

  return (
    <nav>
      <div className='nav-wrapper'>
        <NavLink to='/main' className='brand-logo'>
          <span>booksStore</span> <img src={icon} alt='' />
        </NavLink>
        <ul className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/aboutUs'>О нас</NavLink>
          </li>
          <li>
            <NavLink to='/contacts'>Контакты</NavLink>
          </li>
          <li>
            <a
              id='dropdown'
              className='dropdown-trigger'
              href='#!'
              data-target='dropdown1'
              onClick={dropHandler}
            >
              Книги &nabla;
            </a>
            <div className='collection' hidden={drop}>
              <a href='#!' className='collection-item'>
                Авторы
              </a>
              <a href='#!' className='collection-item'>
                Жанры
              </a>
            </div>
          </li>
          <li>
            <NavLink to='/auth' className='nav__auth'>
              <i className='medium material-icons'>account_circle</i>
            </NavLink>
          </li>
          <li>
            <NavLink to='/shoppingBag' className='nav__shopingBag'>
              <i className='medium material-icons'>local_grocery_store</i>
            </NavLink>
          </li>
        </ul>
        <div id='a'>
          <BurgerMenu handleClick={handleClick} bool={bool} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

// local_grocery_store - shopping bag
// pool - уплыть отсюда к херам
// shopping_cart
// transfer_within_a_station - ээ пару раз туда сюда сделай
