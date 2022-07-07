import { Route, Routes } from 'react-router-dom';
import Products from './components/Products'
import Insert from './components/Insert'

function App() {
  return (
    <Routes>
      <Route path="/" exect={true} element={<Products/>} />
      <Route path="/insert" element={<Insert/>} />
    </Routes>   
  );
}

export default App;
