import React from 'react'

import Cards from '../../components/Cards/Cards'
import e0 from "../../assets/ESTAMPA1.png"
import e1 from "../../assets/ESTAMPA2.png"
import e2 from "../../assets/ESTAMPA3.png"
import e3 from "../../assets/ESTAMPA4.png"
import e4 from "../../assets/ESTAMPA5.png"
import e5 from "../../assets/ESTAMPA6.png"
import e6 from "../../assets/ESTAMPA7.png"
import imgBanner from "../../assets/pantalonbanner.png"
import mock from "../../assets/mokshort.png"
import z1 from "../../assets/Pantalonfutbol.png"


const items = [{"img":z1 , "id":"pantalon1"}  ]

const prints = [e0,e1,e2,e3,e4,e5,e6]

const Pantalon =  () => {
  return (
    <Cards productos={items} imgBanner={imgBanner} base={mock} prints={prints}  />
  )
}

export default  Pantalon