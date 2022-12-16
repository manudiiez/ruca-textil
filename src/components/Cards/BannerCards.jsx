import React from 'react'

const BannerCards = ({imgBanner}) => {
  console.log(imgBanner)
  return (
    <div>
        <img src={imgBanner} alt="descripcion producto" />
    </div>
  )
}

export default BannerCards