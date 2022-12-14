import React from 'react'
import Footer from '../../components/Footer/Footer'
import deportivo from "../../assets/ProductoDeportivo.png"
import urbano from "../../assets/ProductoUrbano.png"
import { NavLink } from 'react-router-dom'
import "./productos.css"

const Productos = () => {
  return (
    <>
      <div className='contenedorCategorias'>
        <div className='deportivo'>
          <NavLink to='/productos/deportivo'>
            <img src={deportivo} alt="" />
          </NavLink>
        </div>
        <div className='urbano'>
          <NavLink to='/productos/urbano'>
            <img src={urbano} alt="" />
          </NavLink>
        </div>
      </div>
    </>

  )
}

export default Productos