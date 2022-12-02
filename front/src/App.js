import './App.css';
import {Routes, Route} from 'react-router-dom';
import Principal from './components/Principal'
import DetalleHilo from './components/DetalleHilo';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Principal/>}></Route>
    <Route path='/DetalleHilo' element={<DetalleHilo/>}></Route>
  </Routes>
  );
}

export default App;
