import React from 'react'
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
import ProductList from './Pages/ProductList/ProductList';
import Register from './Pages/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './Pages/Success/Success';
import { useSelector } from 'react-redux';
const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
