import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import EnvelopeDesigner from './envelope/EnvelopeDesigner';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
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
          <div className="small" id="aboutus" onClick={toggleAbout}>
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
          <div className="small" id="share" onClick={toggleShare}>
            <p>分享</p>
            <p>share</p>
          </div>
          </div>
        </div>
      </header>

      {/* About Us Dropdown Panel */}
      <div className={`about-panel ${isAboutOpen ? 'open' : ''}`} onClick={toggleAbout}>
        <div className="about-content">
          <h1>关于我们</h1>
          <h2>about us</h2>
          <p>
            北京话库 
是一个收集和记录北京话的双语项目。<br></br>
我们希望通过我们的网站让更多国内 <br></br>
以及国外的人听到北京话。
<br></br><br></br>
希望这次阅读能为您带来些北京的气息。

          </p>
          <p>
            běi jīng huà kù 
is a bilingual initiative for<br></br>the collection and documentation of <br></br>beijing hua, the beijing local dialect. 
<br></br><br></br>
we hope this brings you closer to beijing. 

          </p>
        </div>
      </div>

      {/* Share Dropdown Panel - Envelope Designer */}
      {isShareOpen && (
        <EnvelopeDesigner
          wordData={null}
          onClose={toggleShare}
        />
      )}

    </>
  );
};

export default Header;
