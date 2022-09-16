import React from 'react'
import { Cta } from '../../components'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rodrigo Asencios</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cta />

        <div className="me">
          <img src='/assets/me.png' alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header