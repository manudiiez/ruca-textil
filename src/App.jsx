
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Contact from './pages/contact/Contact';
import Indumentaria from './pages/deportivo/Indumentaria';
import Home from './pages/home/Home';
import Item from './pages/item/Item';
import Nosotros from './pages/nosotros/Nosotros';
import Productos from './pages/productos/Productos';
import sport1 from './assets/Mallas.png'
import sport2 from './assets/Remeras deportivas.png'
import sport3 from './assets/Pantalones.png'
import sport4 from './assets/Tops.png'
import sport5 from './assets/Calzas.png'
import urban1 from './assets/Calzas urbanas.png'
import urban2 from './assets/camperas y buzos.png'
import urban3 from './assets/Remeras urbanas.png'
import urban4 from './assets/Tops urbanos.png'
import sportBanner from './assets/bannerdeportivo.png'
import urbanBanner from './assets/bannerurbano.png'
import Prueba from './pages/prueba/Prueba';


const dataSport = [
  {
    src: sport1,
    url: 'mallas'
  },
  {
    src: sport2,
    url: 'remeras'
  },
  {
    src: sport3,
    url: 'pantalones'
  },
  {
    src: sport4,
    url: 'tops'
  },
  {
    src: sport5,
    url: 'calzas'
  },
  {
    src: sport1,
    url: 'mallas'
  },
  {
    src: sport2,
    url: 'remeras'
  },
  {
    src: sport3,
    url: 'pantalones'
  },
  {
    src: sport4,
    url: 'tops'
  },
  {
    src: sport5,
    url: 'calzas'
  },
  {
    src: sport1,
    url: 'mallas'
  }
]

const dataUrban = [
  {
    src: urban1,
    url: 'calzas'
  },
  {
    src: urban2,
    url: 'camperas y buzos'
  },
  {
    src: urban3,
    url: 'remeras'
  },
  {
    src: urban4,
    url: 'tops'
  },
  {
    src: urban1,
    url: 'calzas'
  },
  {
    src: urban2,
    url: 'camperas y buzos'
  },
  {
    src: urban3,
    url: 'remeras'
  },
  {
    src: urban4,
    url: 'tops'
  },
  {
    src: urban1,
    url: 'calzas'
  },
  {
    src: urban2,
    url: 'camperas y buzos'
  },
  {
    src: urban3,
    url: 'remeras'
  },
]

function App() {
  return (
   <>
    <Menu/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/productos' element={<Productos/>} /> */}
      <Route path='/productos' element={<Productos/>} /> 
      <Route path='/nosotros' element={<Nosotros/>} /> 
      <Route path='/contacto' element={<Contact/>} /> 
      <Route path='/productos/deportivo' element={<Indumentaria data={dataSport} title='PRODUCTOS > DEPORTIVOS' banner={sportBanner}/>} /> 
      <Route path='/productos/urbano' element={<Indumentaria data={dataUrban} title='PRODUCTOS > URBANOS' banner={urbanBanner}/>} /> 
      <Route path='/productos/:id' element={<Item/>} /> 
      <Route path='/productos/prueba' element={<Prueba/>} /> 
    </Routes>
    <Footer/> 
   </>
  );
}

export default App;
