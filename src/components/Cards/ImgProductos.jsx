import React from 'react'

const ImgProductos = (productos) => {


  return (

    <div>
        {
            productos.map(prod =>(
                <div>
                    <img src={prod} alt="" />
                </div>
            ))
        }
    </div>

  )
}

export default ImgProductos