import React from 'react'

import Cards from '../../components/Cards/Cards'
import e0 from "../../assets/mallas/e0.png"
import e1 from "../../assets/mallas/e1.png"
import e2 from "../../assets/mallas/e2.png"
import e3 from "../../assets/mallas/e3.png"
import e4 from "../../assets/mallas/e4.png"
import e5 from "../../assets/mallas/e5.png"
import e6 from "../../assets/mallas/e5.png"
import imgBanner from "../../assets/mallas/mallasbanner.png"
import mock from "../../assets/mallas/mock1.png"
import z1 from "../../assets/mallas/patinxl.png"


const items = [{"img":z1 , "id":"malla1"}  ]

const prints = [e0,e1,e2,e3,e4,e5,e6]

const Mallas = () => {
  return (
    <Cards productos={items} imgBanner={imgBanner} base={mock} prints={prints}  />
  )
}

export default Mallas