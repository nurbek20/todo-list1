import React from 'react'

const Navbar = () => {
  return (
    <nav className='green'>
      <div className='container'>
        <div className='nav-wrapper navbar'>
          <span>
            Todo App
          </span>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>Выйти</li>
            <li>Регистрация</li>
            <li>Войти</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;