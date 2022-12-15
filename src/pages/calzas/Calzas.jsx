import React from 'react'
import Cards from '../../components/Cards/Cards'
import e0 from "../../assets/calzas/e0.png"
import e1 from "../../assets/calzas/e1.png"
import e2 from "../../assets/calzas/e2.png"
import e3 from "../../assets/calzas/e3.png"
import e4 from "../../assets/calzas/e4.png"
import e5 from "../../assets/calzas/e5.png"
import urbana from "../../assets/calzas/urbanass.png"
import ciclista from "../../assets/calzas/RUNNINGs.png"
import running from "../../assets/calzas/ciclistas.png"
import imgBanner from "../../assets/calzas/calzasbanner.png"
import mock from "../../assets/calzas/mock1.png"


const items = [urbana ,ciclista , running]
const prints = [e0,e1,e2,e3,e4,e5]


const Calzas = () => {

  return (

    <Cards productos={items} imgBanner={imgBanner} base={mock} prints={prints}  />

  )
}

export default Calzas