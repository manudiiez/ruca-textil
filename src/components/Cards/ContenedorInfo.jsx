import { useState } from "react"
import "./contenedorInfo.css"


const ContenedorInfo = ({productos}) => {

    const [img , setImg] = useState()

    const mostarImagen = (e) =>{
        console.log(e.target.id)
        let seleccionado = productos.filter(prod => prod.id == e.target.id )
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
                <div >
                    <img onClick={mostarImagen} id={prod.id}  src={prod.img} alt="" />
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