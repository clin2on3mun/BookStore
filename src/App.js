import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavLinks';
import Categories from './components/Categories';
import DisplayBook from './components/DisplayBooks';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<DisplayBook />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
