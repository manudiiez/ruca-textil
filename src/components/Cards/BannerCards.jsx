import React from 'react'
import "./banerCards.css"

const BannerCards = ({imgBanner}) => {
  console.log(imgBanner)
  return (
    <div>
      <div className='contimg'>
         <img src={imgBanner[0].src} alt="descripcion producto" />
      </div>
      <span className='clasific'>{imgBanner[0].descripcion}</span>
    </div>
  )
}

export default BannerCards