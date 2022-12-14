
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer/Footer2';
import Menu from './components/Menu/Menu';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
// import Productos from './pages/productos/Productos';

function App() {
  return (
   <>
    <Menu/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/productos' element={<Productos/>} /> */}
      <Route path='/contacto' element={<Contact/>} />
    </Routes>

    <Footer2/>
   </>
  );
}

export default App;
