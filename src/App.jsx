// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contato from './Pages/contato';
import Projetos from './Pages/projetos';

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
