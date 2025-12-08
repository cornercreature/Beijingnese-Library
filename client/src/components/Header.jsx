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
          <div className="small"id="aboutus"><p>关于我们</p><p>about us</p></div>
          <img src="/images/logo-light.png" alt="北京话词库 Beijingnese Library" className="header-logo" />
          <div className="directinteraction">
          <div onClick={toggleDropdown} className="small add-button" id="addword">
            <p>添加</p><p>add</p>
          </div>
          <div className="small" id="share"><p>分享</p><p>share</p></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
