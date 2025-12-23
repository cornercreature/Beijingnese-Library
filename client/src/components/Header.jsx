import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    if (location.pathname === '/about') {
      navigate('/');
    } else {
      navigate('/about');
    }
  };

  const handleShareClick = () => {
    if (location.pathname === '/share') {
      navigate('/');
    } else {
      navigate('/share');
    }
  };

  const handleAddClick = () => {
    if (location.pathname === '/upload') {
      navigate('/');
    } else {
      navigate('/upload');
    }
  };

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="small" id="aboutus" onClick={handleAboutClick}>
            <p>关于我们</p>
            <p>about us</p>
          </div>
          <img
            src="/images/logo-2.png"
            alt="北京话词库 Beijingnese Library"
            className="header-logo"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
          <div className="directinteraction">
          <div onClick={handleAddClick} className="small add-button" id="addword">
            <p>添加</p><p>add</p>
          </div>
          <div className="small" id="share" onClick={handleShareClick}>
            <p>分享</p>
            <p>share</p>
          </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
