
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
import sportBanner from './assets/bannerdeportivo.png'
import urbanBanner from './assets/bannerurbano.png'
import { dataSport, dataUrban } from './data/products.js';
import { productsList } from './data/products.js';
import Table from './pages/table/Table';


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
      <Route path='/productos/deportivo' element={<Indumentaria data={dataSport} title='PRODUCTOS > DEPORTIVOS' banner={sportBanner} category='deportivo'/>} /> 
      <Route path='/productos/urbano' element={<Indumentaria data={dataUrban} title='PRODUCTOS > URBANOS' banner={urbanBanner} category='urbano' />} /> 
      <Route path='/productos/0' element={<Item producto={productsList[0]} right={840} left={-840}/>} /> 
      <Route path='/productos/1' element={<Item producto={productsList[1]} right={840} left={-840}/>} /> 
      <Route path='/productos/2' element={<Item producto={productsList[2]} right={840} left={-840}/>} /> 
      <Route path='/productos/3' element={<Item producto={productsList[3]} right={840} left={-840}/>} /> 
      <Route path='/productos/4' element={<Item producto={productsList[4]} right={700} left={-700}/>} /> 
      <Route path='/productos/5' element={<Item producto={productsList[5]} right={700} left={-700}/>} /> 
      <Route path='/productos/6' element={<Item producto={productsList[6]} right={840} left={-840}/>} /> 
      <Route path='/productos/7' element={<Item producto={productsList[7]} right={840} left={-840}/>} /> 
      <Route path='/productos/8' element={<Item producto={productsList[8]} right={840} left={-840}/>} /> 
      <Route path='/productos/4/table' element={<Table producto={productsList[4]}/>} /> 
      <Route path='/productos/5/table' element={<Table producto={productsList[4]}/>} /> 
      <Route path='/productos/1/table' element={<Table producto={productsList[1]}/>} /> 
      <Route path='/productos/7/table' element={<Table producto={productsList[1]}/>} /> 
      {/* <Route path='/productos/:category/1' element={<Mallas/>} /> 
      <Route path='/productos/:category/2' element={<Remeras/>} /> 
      <Route path='/productos/:category/3' element={<Pantalon/>} /> 
      <Route path='/productos/:category/4' element={<Tops/>} /> 
      <Route path='/productos/:category/5' element={<Calzas/>} />  */}
      
      {/* <Route path='/productos' element={<ItemRoutes/>} />  */}
      {/* <Route path='/productos/prueba' element={<Prueba/>} />  */}
    </Routes>
    <Footer/> 
   </>
  );
}

export default App;
