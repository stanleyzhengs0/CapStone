import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
          <Routes>        
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/product" element={<ProductDetail/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;