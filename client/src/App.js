import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import UploadWordPage from './pages/UploadWordPage';
import WordDetailPage from './pages/WordDetailPage';
import AddExamplePage from './pages/AddExamplePage';
import TestWordDetailPage from './pages/TestWordDetailPage';
import TestAddExamplePage from './pages/TestAddExamplePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/upload" element={<UploadWordPage />} />
          <Route path="/words/:id" element={<WordDetailPage />} />
          <Route path="/words/:id/add-example" element={<AddExamplePage />} />
          {/* Test routes */}
          <Route path="/test-word-detail" element={<TestWordDetailPage />} />
          <Route path="/test-add-example" element={<TestAddExamplePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
