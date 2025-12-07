import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`app-header ${isDropdownOpen ? 'expanded' : ''}`}>
      <h1>北京话词库</h1>
      <h2>Beijingnese Library</h2>
      <div className="header-dropdown" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="add-button">
          Add
        </button>
        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
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
      </div>
    </header>
  );
};

export default Header;
