import React from 'react'
import HomeSlider from '../../components/homeSlider/HomeSlider'
import Slider2 from '../../components/slider/Slider2'
import './home.css'
import banner from '../../assets/diferenciate banner.png'
import feature from '../../assets/feature.svg'
import feature2 from '../../assets/feature2.svg'
import feature3 from '../../assets/feature3.svg'
import wsp from '../../assets/ri_whatsapp-fill.svg'

const Home = () => {
  return (
    <div id='home'>
      <HomeSlider />
      <div className='homePrints'>
        <div className='homePrintsTitle'>
          <img src={banner} alt="" />
          <p>MARCÁ LA DIFERENCIA</p>
        </div>
        <Slider2 />
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