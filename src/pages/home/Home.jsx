import React from 'react'
import HomeSlider from '../../components/homeSlider/HomeSlider'
import Slider2 from '../../components/slider/Slider2'
import './home.css'
import banner from '../../assets/diferenciate banner.png'
import feature from '../../assets/feature.svg'
import feature2 from '../../assets/feature2.svg'
import feature3 from '../../assets/feature3.svg'
import wsp from '../../assets/ri_whatsapp-fill.svg'

// SLIDER
import estampa1 from "../../assets/ESTAMPA1.png"
import estampa2 from "../../assets/ESTAMPA2.png"
import estampa3 from "../../assets/ESTAMPA3.png"
import estampa4 from "../../assets/ESTAMPA4.png"
import estampa5 from "../../assets/ESTAMPA5.png"
import estampa6 from "../../assets/ESTAMPA6.png"
import estampa7 from "../../assets/ESTAMPA7.png"
import mokshort from "../../assets/mokshort.png"

const imgs = [
  estampa1,
  estampa2,
  estampa3,
  estampa4,
  estampa5,
  estampa6,
  estampa7,
]

const Home = () => {
  return (
    <div id='home'>
      <HomeSlider />
      <div className='homePrints'>
        <div className='homePrintsTitle'>
          <img src={banner} alt="" />
          <p>MARCÁ LA DIFERENCIA</p>
        </div>
        <Slider2 base={mokshort} prints={imgs} />
        <div className='homeDesc'>
          <p className='homeDescTitle'>FABRICAMOS INDUMENTARIA A TU MEDIDA</p>
          <p className='homeDescSubtitle'>Emprendé con un mínimo de 10 prendas, sin mínimo de talles y sin mínimo de color </p>
        </div>
      </div>
      <div className="homeFeatures">
        <div className='homeFeaturesContainer'>
          <div className="feature">
            <div className='featureImg'>
              <img src={feature} alt="" />
            </div>
            <p className='featureTitle'>ENVÍOS</p>
            <p className='featureSubtitle'>Entregas a todo el país</p>
          </div>
          <div className="feature">
            <div className='featureImg'>
              <img src={feature2} alt="" />
            </div>
            <p className='featureTitle'>ATENCIÓN PERSONALIZADA</p>
            <p className='featureSubtitle'>Atención directa por Whatsapp</p>
          </div>
          <div className="feature">
            <div className='featureImg'>
              <img src={feature3} alt="" />
              
            </div>
            <p className='featureTitle'>MEDIOS DE PAGO</p>
            <p className='featureSubtitle'>Mercadopago, efectivo</p>
          </div>
        </div>
      </div>
      <div className='homeContact'>
        <button>
          <img src={wsp} alt="" />
          <span>CONTACTAR</span>
        </button>
      </div>
    </div>
  )
}

export default Home