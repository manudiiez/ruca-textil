import React from 'react'
import HomeSlider from '../../components/homeSlider/HomeSlider'
import Slider from '../../components/slider/Slider'
import './home.css'
import banner from '../../assets/diferenciate banner.png'

const Home = () => {
  return (
    <div id='home'>
      <HomeSlider />
      <div className='homePrints'>
        <div className='homePrintsTitle'>
          <img src={banner} alt="" />
          <p>MARCÁ LA DIFERENCIA</p>
        </div>
        <Slider/>
      </div>
    </div>
  )
}

export default Home