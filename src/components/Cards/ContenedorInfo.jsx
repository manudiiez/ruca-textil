import React from 'react'
import ImgProductos from './ImgProductos'

const ContenedorInfo = (productos) => {
  return (
    <div className="contenedorInfo">
        <div className='contenedorInfoImagen'>

        </div>
        <div className='contenedorInfoInformacion'>
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
  )
}

export default ContenedorInfo