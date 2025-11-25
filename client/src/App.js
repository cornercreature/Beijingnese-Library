import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/words/:id" element={<div style={{padding: '2rem', textAlign: 'center'}}>Word Detail Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
