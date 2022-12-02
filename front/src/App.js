import './App.css';
import {Routes, Route} from 'react-router-dom';
import Principal from './components/Principal'

function App() {
  return (
    <Routes>
    <Route path='/' element={<Principal/>}></Route>
  </Routes>
  );
}

export default App;
