import React from 'react'
import Navigation from './Navigation'
import Overview from './Overview'

const Header = () => {
  return (
    <header>
      <div className='Navigation'>
        
      <Navigation />
      </div>
          <Overview/>
      </header>
  )
}

export default Header