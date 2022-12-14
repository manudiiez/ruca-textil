import React from 'react'
import './footer2.css'
import logo from '../../assets/Logo.png'



const Footer2 = () => {
    return (
        <footer id='footer'>
            <div className="footerContainer">
                <div className='footerFirst'>
                    <img src={logo} alt="" />
                    <p>Somos fabricantes especializados en producción de indumentaria deportiva y urbana, comercializamos de manera Mayorista.</p>
                    <div>
                        <a href="#">
                            <i className="fa-solid fa-phone"></i>
                            <span>+54 26157763924</span>
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Mendoza, Argentina</span>
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-envelope"></i>
                            <span>metardisrl@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className='footerSecond'>
                    <div>
                        <h6>ENLACES</h6>
                        <a href="#">Inicio</a>
                        <a href="#">Productos</a>
                        <a href="#">Nosotros</a>  
                    </div>
                </div>
                <div>
                    <div>
                        <h6>REDES</h6>
                        <div>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2