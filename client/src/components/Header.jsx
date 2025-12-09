import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="small" id="aboutus" onClick={toggleAbout}>
            <p>关于我们</p>
            <p>about us</p>
          </div>
          <img src="/images/logo-2.png" alt="北京话词库 Beijingnese Library" className="header-logo" />
          <div className="directinteraction">
          <div onClick={() => navigate('/upload')} className="small add-button" id="addword">
            <p>添加</p><p>add</p>
          </div>
          <div className="small" id="share" onClick={toggleShare}>
            <p>分享</p>
            <p>share</p>
          </div>
          </div>
        </div>
      </header>

      {/* About Us Dropdown Panel */}
      <div className={`about-panel ${isAboutOpen ? 'open' : ''}`}>
        <div className="about-content">
          <button className="close-about" onClick={toggleAbout}>×</button>
          <h2>关于我们 / About Us</h2>
          <p>
            北京话词库是一个致力于保护和推广北京话的在线平台。
          </p>
          <p>
            The Beijingnese Library is an online platform dedicated to preserving and promoting the Beijing dialect.
          </p>
        </div>
      </div>

      {/* Share Dropdown Panel */}
      <div className={`share-panel ${isShareOpen ? 'open' : ''}`}>
        <div className="share-content">
          <button className="close-share" onClick={toggleShare}>×</button>
          <h2>分享 / Share</h2>
          <p>
            分享北京话词库，让更多人了解和学习北京话。
          </p>
          <p>
            Share the Beijingnese Library to help more people learn about the Beijing dialect.
          </p>

          <a
            href="/envelope template.pdf"
            download="beijingnese-envelope-template.pdf"
            className="download-envelope-button"
          >
            <div>下载信封模板</div>
            <div>download envelope template</div>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isAboutOpen && <div className="about-backdrop" onClick={toggleAbout} />}
      {isShareOpen && <div className="share-backdrop" onClick={toggleShare} />}
    </>
  );
};

export default Header;
