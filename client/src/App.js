import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import UploadWordPage from './pages/UploadWordPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/upload" element={<UploadWordPage />} />
          <Route path="/words/:id" element={<div style={{padding: '2rem', textAlign: 'center'}}>Word Detail Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
