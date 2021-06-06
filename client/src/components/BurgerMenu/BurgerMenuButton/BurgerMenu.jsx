import React from 'react'

import './BurgerMenu.css'

const BurgerMenu = ({ handleClick, bool }) => {
  if (bool === true)
    return (
      <div class='burgerButton' onClick={handleClick}>
        <div class='burgerButton__icon active'></div>
      </div>
    )

  return (
    <div class='burgerButton' onClick={handleClick}>
      <div class='burgerButton__icon'></div>
    </div>
  )
}

export default BurgerMenu
