
import './App.css';
import React from 'react';
import MyNavBar from './Components/NavBar/NavBar.jsx';
import PrimaryProductsListContainer from './Components/Products/PrimaryProducts/PrimaryProductsListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDiv from './Components/MainDiv/MainDiv.jsx';

export default function App() {
  return (
<>
<BrowserRouter>
<MyNavBar />
<PrimaryProductsListContainer />
<Routes>
  <Route exact path="/" element={<MainDiv />} />
  <Route exact path="/PrimaryProducts" element={<PrimaryProductsListContainer />} />
  <Route path="/:categoryId" element={<PrimaryProductsListContainer />} />
</Routes>
</BrowserRouter>
</>
  );
}

