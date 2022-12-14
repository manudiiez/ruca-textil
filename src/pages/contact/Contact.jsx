import React from 'react'
import banner from '../../assets/banner contacto.png'
import './contact.css'

const Contact = () => {
    return (
        <div id='contacto'>
            <div className='contactoBanner'>
                {/* <div>
                    <p>FORMULARIO DE CONTACTO</p>
                    <p>FORMULARIO DE CONTACTO</p>
                    <p>FORMULARIO DE CONTACTO</p>
                    <p>FORMULARIO DE CONTACTO</p>
                    <p>FORMULARIO DE CONTACTO</p>
                    <p>FORMULARIO DE CONTACTO</p>
                    <p>FORMULARIO DE CONTACTO</p>
                </div> */}
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Contact 