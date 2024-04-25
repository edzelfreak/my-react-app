import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AboutAnotherPage from './AboutAnotherPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/aboutAnother" element={<AboutAnotherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
