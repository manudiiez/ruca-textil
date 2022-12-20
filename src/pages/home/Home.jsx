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
import e0 from "../../assets/home/e0.png"
import e1 from "../../assets/home/e1.png"
import e2 from "../../assets/home/e2.png"
import e3 from "../../assets/home/e3.png"
import e4 from "../../assets/home/e4.png"
import e5 from "../../assets/home/e5.png"
import e6 from "../../assets/home/e6.png"
import e7 from "../../assets/home/e7.png"
import e8 from "../../assets/home/e8.png"
import mock from "../../assets/home/mock1.png"

const imgs = [
  e1,
  e2,
  e3,
  e4,
  e5,
  e0,
  e6,
  e7,
  e8
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
        <Slider2 base={mock} prints={imgs} right={1120} left={-1120} />
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
        <a href="https://api.whatsapp.com/send?phone=+5492615660798&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20esta%20indumentaria:">
          <button>
          <img src={wsp} alt="" />
          <span>CONTACTAR</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Home