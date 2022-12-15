import React from 'react'
import BannerCards from './BannerCards'
import ContenedorInfo from './ContenedorInfo'

const Cards = (imgBanner , productos) => {
  return (
    <>
    <div className='bannerSuperir'>
        <BannerCards imgBanner={imgBanner} />
    </div>
    <div className="contenedorInfo">
        <ContenedorInfo productos={productos} />       
    </div>
    <div className='bannerMedio'>
        <img src="" alt="" />
        <h2></h2>       
    </div>
    <div className='carrucelImagenes'>
        carrucel
    </div>
    <div className='contenedorBotonInferior'>
        <button className='botonInferior'>CONSULTAR POR MAS DISEÑOS</button>
    </div>
    </>
  )
}

export default Cards