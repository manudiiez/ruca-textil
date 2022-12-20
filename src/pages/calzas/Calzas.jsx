import React from 'react'
import Cards from '../../components/Cards/Cards'
import e0 from "../../assets/calzas/e0.png"
import e1 from "../../assets/calzas/e1.png"
import e2 from "../../assets/calzas/e2.png"
import e3 from "../../assets/calzas/e3.png"
import e4 from "../../assets/calzas/e4.png"
import e5 from "../../assets/calzas/e5.png"
import imgBanner from "../../assets/calzas/calzasbanner.png"
import mock from "../../assets/calzas/mock1.png"
import z1 from "../../assets/calzas/urbanaXL.png"
import z2 from  "../../assets/calzas/runningxl.png"
import z3 from "../../assets/calzas/ciclistaxl.png"

const items = [{"img":z1 , "id":"calza1","descripcion":"URBANA"}  , {"img":z2 , "id":"calza2" , "descripcion":"RUNNING"}, {"img":z3 , "id":"calza3" ,"descripcion":"CICLISMO"}]

const prints = [e0,e1,e2,e3,e4,e5]

const im = [{src:imgBanner,"descripcion":"PRODUCTOS > CALZAS"}]



const Calzas = () => {

  return (

    <Cards productos={items} imgBanner={im} base={mock} prints={prints}  />

  )
}

export default Calzas