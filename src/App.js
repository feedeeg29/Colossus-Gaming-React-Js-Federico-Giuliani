
import './App.css';
import React from 'react';
import MyNavBar from './Components/NavBar/NavBar.jsx';
import PrimaryProductsListContainer from './Components/Products/PrimaryProducts/PrimaryProductsListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDiv from './Components/MainDiv/MainDiv.jsx';
import PrimaryProductsDetailContainer from '../src/Components/Products/PrimaryProductsDetail/PrimaryProductsDetailContainer';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Components/CartContext/CartContext';
import BuyOrder from './Components/BuyOrder/BuyOrder';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/ContactForm/ContactForm';
export default function App() {
  return (
<>
<CartContextProvider>
<BrowserRouter>
<MyNavBar />
<Routes>
  <Route exact path="/" element={<MainDiv />} />
  <Route exact path="/category/:categoryId" element={<PrimaryProductsListContainer />} />
  <Route exact path="/detail/:Id" element={<PrimaryProductsDetailContainer />} />
  <Route exact path="/Cart/Cart" element={<Cart />} />
  <Route exact path="/BuyOrder" element={<BuyOrder />} />
  <Route exact path="/ContactForm" element={<ContactForm />} />
</Routes>
<Footer/>
</BrowserRouter>
</CartContextProvider>
</>
  );
}

