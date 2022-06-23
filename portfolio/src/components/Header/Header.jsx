import React from 'react'
import Navigation from './Navigation'
import Overview from './Overview'
import Logo from "../../images/adeseyi.png"


const Header = () => {
  return (
    <header>

      <div className='Header'>
        <img src={Logo} alt="AdeseyiLogo" />
        <Navigation />
      </div>
      <Overview />
    </header>
  )
}

export default Header