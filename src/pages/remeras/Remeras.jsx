import React from 'react'

import Cards from '../../components/Cards/Cards'
import e0 from "../../assets/remeras/e0.png"
import e1 from "../../assets/remeras/e1.png"
import e2 from "../../assets/remeras/e2.png"
import e3 from "../../assets/remeras/e3.png"
import e4 from "../../assets/remeras/e4.png"
import e5 from "../../assets/remeras/e5.png"
import imgBanner from "../../assets/remeras/remerasbanner.png"
import mock from "../../assets/remeras/mock1.png"
import z1 from "../../assets/remeras/Remeraciclismo.png"
import z2 from  "../../assets/remeras/Remerafutbol.png"
import z3 from "../../assets/remeras/Remerarunning.png"
import z4 from "../../assets/remeras/Remeraurbana.png"

const items = [
  {"img":z1 , "id":"remera1","descripcion":"CICLISMO"} , 
  {"img":z2 , "id":"remera2" , "descripcion":"FUTBOL"},
  {"img":z3 , "id":"remera3","descripcion":"RUNNING"},
  {"img":z4 , "id":"remera3","descripcion":"URBANA"}]

const prints = [e0,e1,e2,e3,e4,e5]

const Remeras = () => {
  return (
    <Cards productos={items} imgBanner={imgBanner} base={mock} prints={prints}  />
  )
}

export default Remeras