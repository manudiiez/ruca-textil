import React from 'react'
import { NavLink } from 'react-router-dom'
import './dropDown.css'
import IconArrow from './IconArrow'


const DropDown = ({ click }) => {
    return (
        <li id='dropdown'>
            <div className='linkContent'>
                <NavLink to='/productos'>PRODUCTOS</NavLink>
                <IconArrow/>
            </div>
            <div className='dropdownLinks'>
                <NavLink onClick={click} to='/productos/urbano'>URBANO</NavLink>
                <NavLink onClick={click} to='/productos/deportivo'>DEPORTIVO</NavLink>
            </div>
        </li>
    )
}

export default DropDown