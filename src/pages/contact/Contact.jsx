import React from 'react'
import banner from '../../assets/banner contacto.png'
import './contact.css'

const Contact = () => {
    return (
        <div id='contacto'>
            <div className='contactoBanner'>
                <img src={banner} alt="" />
            </div>
            <div className="contactoContainer">
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Email' />
                <textarea placeholder='Mensaje'></textarea>
                <button>ENVIAR</button>
                <p>o</p>
                <button>
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>CONTACTAR POR WHATSAPP</span>
                </button>
            </div>
        </div>
    )
}

export default Contact 