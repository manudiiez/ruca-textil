import React from 'react'
import "./footer.css"
import logo from "../../assets/Logo.png"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='contenedorIzquierdo'>
            <div className='contImagen'>
                <img src={logo} alt="" />
            </div>
            <div className='contTexto'>
                <p>Somos fabricantes especializados en producción de indumentaria deportiva y urbana ,
                   comercializamos de manera Mayorista .</p>
            </div>
            <div className='contIconos'>
                 <i className="fa-solid fa-phone"></i><span>+54 26157763924</span>
                 <i className="fa-solid fa-location-dot"></i><span>Mendoza, Argentina</span>
                 <i className="fa-solid fa-envelope"></i><span>metardisrl@gmail.com</span>
            </div>
        </div>
        <div className='contenedorDerecho'>
            <div className='enlaces'>
                <h3>ENLACES</h3>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                    <li>Contáctanos</li>
                </ul>
            </div>
            <div className='redes'>
                <h3>REDES</h3>
                <div>
                   <i className="fa-brands fa-square-facebook"></i>
                   <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer