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
                <a href="https://api.whatsapp.com/send?phone=+5492615660798&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20esta%20indumentaria:">
                  <button>ENVIAR</button>
                </a>
                <p>o</p>
                <a href="https://api.whatsapp.com/send?phone=+5492615660798&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20esta%20indumentaria:">
                   <button>
                       <i className="fa-brands fa-whatsapp"></i>
                       <span>CONTACTAR POR WHATSAPP</span>
                   </button>
                </a>
                
            </div>
        </div>
    )
}

export default Contact 