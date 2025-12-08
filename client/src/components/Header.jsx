import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // No need for click-outside listener since we have a backdrop

  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {isDropdownOpen && <div className="header-backdrop" onClick={() => setIsDropdownOpen(false)} />}
      <header className={`app-header ${isDropdownOpen ? 'expanded' : ''}`}>
        <div className="dropdown-menu">
          <button
            onClick={() => handleNavigation('/upload')}
            className="dropdown-item"
          >
            + Add New Word
          </button>
          <button
            onClick={() => handleNavigation('/upload-image')}
            className="dropdown-item"
          >
            + Add New Image
          </button>
        </div>

        <div className="header-content">
          <img src="/images/logo-2.png" alt="北京话词库 Beijingnese Library" className="header-logo" />
          <button onClick={toggleDropdown} className="add-button">
            Add
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
