import { useState } from 'react';
import Banner from '../../components/banner/Banner'
import BannerDiference from '../../components/bannerDiference/BannerDiference';
import Slider2 from '../../components/slider/Slider2';
import './item.css'
import wsp from '../../assets/ri_whatsapp-fill.svg'

// const producto = {
//   id: 1,
//   banner: require('../../assets/calzas/calzasbanner.png'),
//   category: 'productos',
//   name: 'calzas',
//   imgs: [
//     {
//       sm: require('../../assets/calzas/urbanass.png'),
//       xl: require('../../assets/calzas/urbanaXL.png'),
//       title: 'urbanas'
//     },
//     {
//       sm: require('../../assets/calzas/ciclistas.png'),
//       xl: require('../../assets/calzas/ciclistaxl.png'),
//       title: 'ciclismo'
//     },
//     {
//       sm: require('../../assets/calzas/RUNNINGs.png'),
//       xl: require('../../assets/calzas/RUNNINGxl.png'),
//       title: 'running'
//     },
//   ],
//   fabrics: 'Lycras, Dryfit y telas técnicas',
//   tabla: '../assets/calzas/Tabla talles leggins.png',
//   mockup: require('../../assets/calzas/Calza Mockup altura cambiada.png'),
//   prints: [
//     require('../../assets/calzas/e0.png'),
//     require('../../assets/calzas/e1.png'),
//     require('../../assets/calzas/e2.png'),
//     require('../../assets/calzas/e3.png'),
//     require('../../assets/calzas/e4.png'),
//     require('../../assets/calzas/e5.png'),
//   ],
//   link: 'https://www.google.com/search?q=calzas&source=lmns&bih=1254&biw=1278&rlz=1C1VDKB_esAR1016AR1016&hl=es-419&sa=X&ved=2ahUKEwjNuL-hlv77AhWsppUCHeijCeQQ_AUoAHoECAEQAA'
// }

const Item = ({producto, right, left}) => {

  const [selectedImg, setSelectedImg] = useState(producto.imgs[0].xl);

  const clickImg = (url) => {
    setSelectedImg(url)
  }

  return (
    <div id='item'>
      <Banner image={producto.banner} />
      <p className='title'>
        {producto.category} {">"} {producto.name}
      </p>
      <div className="itemContainer">
        <div className="itemContainerImg">
          <img src={selectedImg} className='containerImgXl' alt="" />
          <div className="itemContainerListImg itemContainerListImg--small">
            {
              producto.imgs.map((img) => (
                <div key={img.title} className='listImgItem' onClick={() => clickImg(img.xl)}>
                  <img src={img.sm} alt="" />
                  <p>{img.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="itemContainerBody">
          <h1>CARACTERÍSTICAS</h1>
          <ul>
            <li>
              Sin límite de colores y diseños
            </li>
            <li>
              Talles desde XS hasta 10XL
            </li>
            <li>
              Lycras, Dryfit y telas técnicas
            </li>
            <li>
              Impresión en sublimación, serigrafía, bordado o estampado
            </li>
          </ul>
          <div className="itemContainerListImg itemContainerListImg--big">
            {
              producto.imgs.map((img) => (
                <div key={img.title} className='listImgItem' onClick={() => clickImg(img.xl)}>
                  <img src={img.sm} alt="" />
                  <p>{img.title}</p>
                </div>
              ))
            }
          </div>
          <a href="https://api.whatsapp.com/send?phone=+5492615660798&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20esta%20indumentaria:">
          <button>
            <img src={wsp} alt="" />
            <span>REALIZAR UN PEDIDO</span>
          </button>
          </a>          
        </div>
      </div>
      <div className='itemBanner'>
        <BannerDiference />
      </div>
      <Slider2 base={producto.mockup} prints={producto.prints} right={right} left={left} />
      <div className="buttonContainer">
        <a href="https://api.whatsapp.com/send?phone=+5492615660798&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20esta%20indumentaria:">
           <button className='buttonConsultar'>CONSULTAR MÀS DISEÑOS</button>
        </a>        
      </div>
    </div>
  )
}

export default Item