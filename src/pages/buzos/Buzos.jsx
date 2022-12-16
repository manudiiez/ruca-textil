import React from 'react'
import Cards from '../../components/Cards/Cards'
import e0 from "../../assets/buzos/e0.png"
import e1 from "../../assets/buzos/e1.png"
import e2 from "../../assets/buzos/e2.png"
import e3 from "../../assets/buzos/e3.png"
import e4 from "../../assets/buzos/e4.png"
import e5 from "../../assets/buzos/e5.png"
import imgBanner from "../../assets/buzos/cbanner.png"
import mock from "../../assets/buzos/mock1.png"
import z1 from "../../assets/buzos/buzoxl.png"
import z2 from  "../../assets/buzos/camperaxl.png"


const items = [{"img":z1 , "id":"buzo1" , "descripcion":"BUZOS"}  , {"img":z2 , "id":"buzo2","descripcion":"CAMPERAS"}]

const prints = [e0,e1,e2,e3,e4,e5]

const Buzos = () => {
  return (
    <Cards productos={items} imgBanner={imgBanner} base={mock} prints={prints}  />
  )
}

export default Buzos