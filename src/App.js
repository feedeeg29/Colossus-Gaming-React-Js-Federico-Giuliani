
import './App.css';
import React from 'react';
import MyNavBar from './Components/NavBar/NavBar.jsx';
import MotherBoardsListContainer from './Components/Products/MotherBoards/MotherBoardsListContainer';
import GPUsListContainer from '../src/Components/Products/GPUs/GPUsListContainer';
import ProcessorsListContainer from '../src/Components/Products/Processors/ProcessorsListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDiv from './Components/MainDiv/MainDiv.jsx';

export default function App() {
  return (
<>
<BrowserRouter>
<MyNavBar />
<Routes>
  <Route exact path="/" element={<MainDiv />} />
  <Route exact path="/MotherBoards" element={<MotherBoardsListContainer />} />
  <Route exact path ="/Processors" element={<ProcessorsListContainer />} />
  <Route exact path ="/GPUs" element={<GPUsListContainer />} />
</Routes>
</BrowserRouter>
</>
  );
}

