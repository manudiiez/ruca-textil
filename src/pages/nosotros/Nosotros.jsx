import React from 'react'
import "./nosotros.css"
import videoRuca from "../../assets/videoRuca.mp4"
import titulo from "../../assets/RUCATEXTIL.png"
const Nosotros = () => {
  return (
    <div className='nosotrosContainer'>
        <div className='imgContainer'>
            <img src={titulo} alt="" />
        </div>
        
            <video className='videoContainer' autoPlay loop >
                <source src={videoRuca} type="video/mp4" />
            </video>
        
        <div className='textoContainer' >
            <h3>NUESTRO PROCESO</h3>
        
        
        <p>
        Somos una empresa dedicada a fabricar indumentaria personalizada al por mayor con una amplia variedad de telas, diseños, talles y colores.<br/>
        Elaboramos productos textiles innovadores de alta calidad según las necesidades de nuestros clientes, además brindamos servicio de confección completa para tu local o marca.
        </p>
        </div>
    </div>
  )
}

export default Nosotros