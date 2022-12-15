import React from 'react'

const ImgProductos = ({productos}) => {
    console.log(productos)
    
  return (

    <>
     {
            productos.map(prod =>(
                <div>
                    <img src={prod} alt="" />
                </div>
            ))
        }
    
    </>

  )
}

export default ImgProductos