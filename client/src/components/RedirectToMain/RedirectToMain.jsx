import React from 'react'
import { NavLink } from 'react-router-dom'
import Sticky from 'react-sticky-el'

import './RedirectToMain.css'

const RedirectToMain = () => {
  return (
    <Sticky mode='bottom' stickyStyle={{ left: '30px' }}>
      <button className='waves-effect waves-light btn redirectToMain'>
        <NavLink className='navLink' to='/main'>
          &#8656; Главная
        </NavLink>
      </button>
      <div className='after'></div>
    </Sticky>
  )
}

export default RedirectToMain
