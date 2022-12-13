
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Home from './pages/home/Home';

function App() {
  return (
   <>
    <Menu/>
    <Footer/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </>
  );
}

export default App;
