import React, { useState } from 'react'
import Icon from './Icon'
import './menu.css'
import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import IconClose from './IconClose'
import DropDown from './DropDown'

const Menu = () => {

  const [state, setState] = useState(false);

  const openMenu = () => {
    setState(true)
  }
  const closeMenu = () => {
    setState(false)
  }

  return (
    <header id='header'>
      <nav className='menu'>
        <div className="container">
          <div className='header'>
            <Icon click={openMenu} />
            <img src={Logo} alt="" />
          </div>
          <div className={`links ${state && 'active'}`}>
            <IconClose click={closeMenu} />
            <ul>
              <li>
                <NavLink onClick={closeMenu} to='/'>INICIO</NavLink>
              </li>
              <DropDown click={closeMenu}/>
              <li>
                <NavLink onClick={closeMenu} to='/nosotros'>NOSOTROS</NavLink>
              </li>
              <li>
                <NavLink onClick={closeMenu} to='/contacto'>CONTACTO</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Menu