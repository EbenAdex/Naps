import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Football from './pages/Football';
import Basketball from './pages/Basketball';
import Favourite from './pages/Favourite';
import MatchDetails from './components/MatchDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/match/:id" element={<MatchDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
