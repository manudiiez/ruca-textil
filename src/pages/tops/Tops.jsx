import React from 'react'
import Cards from '../../components/Cards/Cards'
import e0 from "../../assets/tops/e0.png"
import e1 from "../../assets/tops/e1.png"
import e2 from "../../assets/tops/e2.png"
import e3 from "../../assets/tops/e3.png"
import e4 from "../../assets/tops/e4.png"
import e5 from "../../assets/tops/e5.png"
import e6 from "../../assets/tops/e6.png"
import z1 from "../../assets/tops/topurbanoxl.png"
import z2 from "../../assets/tops/topdeportivoxl.png"
import imgBanner from "../../assets/tops/a2.png"
import mock from "../../assets/tops/a1.png"

const items = [{"img":z1 , "id":"calza1","descripcion":"URBANO"},
               {"img":z2 , "id":"calza2", "descripcion":"DEPORTIVO"}]

const prints = [e0,e1,e2,e3,e4,e5,e6]

const im = [{src:imgBanner,"descripcion":"PRODUCTOS > TOPS"}]

const Tops = () => {

  return (

    <Cards productos={items} imgBanner={im} base={mock} prints={prints}  />

  )
}

export default Tops