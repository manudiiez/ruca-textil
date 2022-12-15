import React, { useState } from 'react'
import "./contenedorInfo.css"
import i1 from "../../assets/calzas/urbanaXL.png"
import i2 from "../../assets/calzas/RUNNINGxl.png"
import i3 from "../../assets/calzas/ciclistaxl.png"
const ContenedorInfo = ({productos}) => {

    const [imagen ,setImagen] = useState(i1)

    const seleccionar = (e)=>{
        if(e.target.id == "/static/media/urbanass.06040a71315651cd3185.png"){
           setImagen(i1)
        }else if (e.target.id == "/static/media/RUNNINGs.9b0110ac7f4890f24ca5.png"){
            setImagen(i2)
        }else{
            setImagen(i3)
        }
    }
   
  return (
    <div className="contenedorInformacion">
        <div className='contenedorInfoImagen'>
           <img src={imagen} alt="" />
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
            <>
             {                
              productos.map(prod =>(                
                <div key={prod}>
                    <img id={prod} onClick={seleccionar} src={prod} alt="" />
                </div>
               ))
             }     
             </>
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