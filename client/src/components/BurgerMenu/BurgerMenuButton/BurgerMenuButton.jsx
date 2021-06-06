import React, { useState } from 'react'

import '../../../index.css'

const BurgerMenuButton = ({ openerMenu, open, n }) => {
  const [bool, setBool] = useState(false)

  const handleClick = () => {
    setBool(!bool)
    openerMenu()
  }

  if (bool === true) {
    return (
      <div className='burgerButton' onClick={handleClick}>
        <div className='burgerButton__icon active'></div>
      </div>
    )
  }

  return (
    <div className='burgerButton' id='burgerButton' onClick={handleClick}>
      <div className='burgerButton__icon' id='burgerButton'></div>
    </div>
  )
}

export default BurgerMenuButton
