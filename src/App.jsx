
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './pages/home/Home';

function App() {
  return (
   <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </>
  );
}

export default App;
