import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <h1>北京话词库</h1>
      <h2>Beijingnese Library</h2>
      <div className="header-buttons">
        <button
          onClick={() => navigate('/upload')}
          className="add-word-button"
        >
          + Add New Word
        </button>
        <button
          onClick={() => navigate('/upload-image')}
          className="add-image-button"
        >
          + Add New Image
        </button>
      </div>
    </header>
  );
};

export default Header;
