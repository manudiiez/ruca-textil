import React from 'react'
import "./banerCards.css"

const BannerCards = ({imgBanner}) => {
  console.log(imgBanner)
  return (
    <div>
        <img src={imgBanner[0].src} alt="descripcion producto" />
        <span className='clasific'>{imgBanner[0].descripcion}</span>
    </div>
  )
}

export default BannerCards