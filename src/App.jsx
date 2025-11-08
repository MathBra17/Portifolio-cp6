// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/contato';
import Projetos from './pages/projetos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/projeto" element={<Projetos />} />
    </Routes>
  );
}

export default App;
