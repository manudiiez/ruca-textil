
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Contact from './pages/contact/Contact';
import Deportivo from './pages/deportivo/Deportivo';
import Home from './pages/home/Home';
import Nosotros from './pages/nosotros/Nosotros';
import Productos from './pages/productos/Productos';
import Urbano from './pages/urbano/Urbano';


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
      <Route path='/productos/urbano' element={<Urbano/>} /> 
      <Route path='/productos/deportivo' element={<Deportivo/>} /> 
    </Routes>
    <Footer/> 
   </>
  );
}

export default App;
