import React from 'react'
import "./contacto.css"
import bannerContacto from "../../assets/bannercontacto.png"

const Contacto = () => {
  return (
    <div className='contactoContainer'>
        <div className='imgContainer'>
            <img src={bannerContacto} alt="" />
        </div>
      
    </div>
  )
}

export default Contacto