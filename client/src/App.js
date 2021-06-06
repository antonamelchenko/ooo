import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sticky from 'react-sticky-el'
import { UseRoutes } from './routes.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useAuth } from './hooks/auth.hook.js'
import { AuthContext } from './context/AuthContext.js'

import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

import 'materialize-css'
import './index.css'
import './mediaStyles.css'

const App = () => {
  
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = UseRoutes(isAuthenticated)
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        <ScrollToTop />
        <div className='wrapper'>
          <div className='Case'>
            <Sticky>
              <NavBar />
            </Sticky>
          </div>
          <div className='container'>{routes}</div>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
