import React from 'react'
import "./indumentaria.css"
import Banner from '../../components/banner/Banner'
import IndumentariaSlider from '../../components/indumentariaSlider/IndumentariaSlider'


const Indumentaria = ({data, title, banner}) => {
  return (
    <div id='indumentaria'>
      <div className='indumentariaHeader'>
        <Banner image={banner}/>
        <p>{title}</p>
      </div>
      <div className="indumentariaSlider">
        <IndumentariaSlider prints={data}  />
      </div>
    </div>
  )
}

export default Indumentaria