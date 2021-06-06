import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import Contacts from './pages/Contacts/Contacts'
import Main from './pages/Main/Main'
import RedirectToMain from './components/RedirectToMain/RedirectToMain'
import Auth from './pages/Authorization/Auth'
import Books from './pages/Books/Books'
import SignUp from './pages/SignUp/SignUp'
import ShoppingBag from './components/ShoppingBag/ShoppingBag'

import './index.css'

export const UseRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/aboutUs'>
          <AboutUs />
          <div className='caseForRedirect'>
            <RedirectToMain />
          </div>
        </Route>
        <Route path='/contacts'>
          <Contacts />
          <div className='caseForRedirect'>
            <RedirectToMain />
          </div>
        </Route>
        <Route path='/main'>
          <Main />
        </Route>
        {/* <Route path='/auth'>
          <Auth />
        </Route> */}
        <Route path='/books'>
          <Books />
        </Route>
        {/* <Route path='/signUp'>
          <SignUp />
        </Route> */}
        <Route path='/shoppingBag'>
          <ShoppingBag />
        </Route>
        <Redirect to='main' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/aboutUs'>
        <AboutUs />
        <div className='caseForRedirect'>
          <RedirectToMain />
        </div>
      </Route>
      <Route path='/contacts'>
        <Contacts />
        <div className='caseForRedirect'>
          <RedirectToMain />
        </div>
      </Route>
      <Route path='/main'>
        <Main />
      </Route>
      <Route path='/auth'>
        <Auth />
      </Route>
      <Route path='/books'>
        <Books />
      </Route>
      <Route path='/signUp'>
        <SignUp />
      </Route>
      <Redirect to='/auth' />
    </Switch>
  )
}
