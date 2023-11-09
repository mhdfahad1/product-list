import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/pDetails' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
