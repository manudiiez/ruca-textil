import React from 'react'
import Slider2 from '../slider/Slider2'
import BannerCards from './BannerCards'
import ContenedorInfo from './ContenedorInfo'
import diferenciate from "../../assets/calzas/diferenciatebanner.png"
import "./cards.css"

const Cards = ({imgBanner , productos , base , prints}) => {
   
  return (
    <>
    <div className='bannerSuperior'>
        <BannerCards imgBanner={imgBanner} />
    </div>
    <div className="contenedorInfo">
        <ContenedorInfo productos={productos} />       
    </div>
    <div className='bannerMedio'>
        <img src={diferenciate} alt="" />
        <h2>MARCA LA DIFERENCIA</h2>       
    </div>
    <div className='carrucelImagenes'>
        <Slider2 base={base} prints={prints}/>
    </div>
    <div className='contenedorBotonInferior'>
        <button className='botonInferior'>CONSULTAR POR MAS DISEÑOS</button>
    </div>
    </>
  )
}

export default Cards