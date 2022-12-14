
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Home from './pages/home/Home';
// import Productos from './pages/productos/Productos';

function App() {
  return (
   <>
    <Menu/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/productos' element={<Productos/>} /> */}
    </Routes>

    {/* <Footer/> */}
   </>
  );
}

export default App;
