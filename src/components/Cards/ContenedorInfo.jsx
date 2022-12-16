import { useState } from "react"
import "./contenedorInfo.css"
import wsp from '../../assets/ri_whatsapp-fill.svg'


const ContenedorInfo = ({productos}) => {
    

    const [img , setImg] = useState(productos[0].img)
     

    const mostarImagen = (e) =>{
        let seleccionado = productos.filter(prod => prod.id === e.target.id )
            setImg(seleccionado[0].img)
        }
    

  return (
    <div className="contenedorInformacion">
        <div className='contenedorInfoImagen'>
           <img src={img} alt="" />
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
                <div className="contProductos" >
                    <img onClick={mostarImagen} id={prod.id}  src={prod.img} alt="" /><span>{prod.descripcion}</span>
                </div>
               ))
              
             }     
             </>
            </div>
            <button className='contenedorInfoBoton'>
                <span><img src={wsp} alt="" /></span>
                REALIZAR UN PEDIDO
            </button>
            </div>
        </div>
    </div>
  )
}

export default ContenedorInfo