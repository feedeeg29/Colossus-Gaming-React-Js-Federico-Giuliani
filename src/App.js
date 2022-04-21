
import './App.css';
import React from 'react';
import MyNavBar from './Components/NavBar/NavBar.jsx';
import PrimaryProductsListContainer from './Components/Products/PrimaryProducts/PrimaryProductsListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDiv from './Components/MainDiv/MainDiv.jsx';
import PrimaryProductsDetailContainer from '../src/Components/Products/PrimaryProductsDetail/PrimaryProductsDetailContainer';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Components/CartContext/CartContext';
export default function App() {
  return (
<>
<CartContextProvider>
<BrowserRouter>
<MyNavBar />
<Routes>
  <Route exact path="/MainDiv" element={<MainDiv />} />
  <Route exact path="/" element={<PrimaryProductsListContainer />} />
  <Route exact path="/category/:categoryId" element={<PrimaryProductsListContainer />} />
  <Route exact path="/detail/:Id" element={<PrimaryProductsDetailContainer />} />
  <Route excat path="/Cart/Cart" element={<Cart />} />
</Routes>
</BrowserRouter>
</CartContextProvider>
</>
  );
}

