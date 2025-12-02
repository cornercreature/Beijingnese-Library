import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import UploadWordPage from './pages/UploadWordPage';
import WordDetailPage from './pages/WordDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/upload" element={<UploadWordPage />} />
          <Route path="/words/:id" element={<WordDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
