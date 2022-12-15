import React from 'react'
import ImgProductos from './ImgProductos'
import "./contenedorInfo.css"

const ContenedorInfo = ({productos}) => {
   
  return (
    <div className="contenedorInformacion">
        <div className='contenedorInfoImagen'>
            <img src={productos[0]} alt="" />
        </div>
        <div className='contenedorInfoInformacion'>
            <div className='contenedorInfoInformacionControl'>
            <h2>CARACTERISTICAS</h2>
            <ul>
                <li>Sin límite de colores y diseños</li>
                <li>Talles desde XS hasta 10XL Ver tabla</li>
                <li>Lycras, Dryfit y telas técnicas</li>
                <li>Impresión en sublimación, serigrafía, bordado o estampado</li>
            </ul>
            <div className='contenedorInfoImagenes'>
                <ImgProductos productos={productos} />
            </div>
            <button className='contenedorInfoBoton'>
                Realizar Pedido
            </button>
            </div>
        </div>
    </div>
  )
}

export default ContenedorInfo