import React from 'react'

const ImgProductos = ({productos}) => {


    const saludo = ()=>{
      console.log("hola me tocaste")
    }
    
  return (

    <>
     {
            productos.map(prod =>(
                <div key={prod}>
                    <img onClick={saludo} src={prod} alt="" />
                </div>
            ))
        }
    
    </>

  )
}

export default ImgProductos