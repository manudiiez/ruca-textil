import React from 'react'
import bannerimg from '../../assets/banner contacto.png'
import Banner from '../../components/banner/Banner'
import './contact.css'

const Contact = () => {
    return (
        <div id='contacto'>
            <Banner image={bannerimg} />
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