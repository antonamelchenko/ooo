import React from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.css'

import card1 from '../../images/visa.png'
import card2 from '../../images/master_card.png'
import card3 from '../../images/maestro.png'
import card4 from '../../images/mir.jpg'

const Footer = () => {
  return (
    <footer
      className='page-footer'
      style={{
        backgroundColor: 'black',
        marginTop: 'auto',
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>booksStore</h5>
            <p className='grey-text text-lighten-4'>
              This site was designed and <span className='footer__span'>created by Dendy-D</span> When
              creating this site I applied: node.js, React, reack-hooks,
              express, mongodb, Routing, materialize.css. As well as such npm
              packages: swiper, react-sticky-el, react-toastify. I only
              mentioned the main technologys. I also made the site responsive
              using relative values ​​and media queries. While developing this
              site, I got a better understanding of how the backend works,
              understood better how the useEffect () hook works, and learned
              some interesting libraries and how to use them with React. And in
              the end I figured out how a basic online store works.
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Information</h5>
            <ul>
              <li>
                <NavLink className='text-lighten-3' to='/aboutUs'>
                  about us
                </NavLink>
              </li>
              <li>
                <NavLink className='text-lighten-3' to='/contacts'>
                  contacts
                </NavLink>
              </li>
              <li>
                <NavLink className='text-lighten-3' to='/shoppingBag'>
                  shopping bag
                </NavLink>
              </li>
              <li className='pay'>
                <p className='p__cards'>Способы оплаты:</p>
                <div className='cards'>
                  <img src={card1} alt='' />
                  <img src={card2} alt='' />
                  <img src={card3} alt='' />
                  <img src={card4} alt='' />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          © 2010–2021 "booksStore Moscow"
          <NavLink className='grey-text text-lighten-4 right' to='/'>
            Created by <span className='footer__span'>Dendy-D</span>
          </NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
