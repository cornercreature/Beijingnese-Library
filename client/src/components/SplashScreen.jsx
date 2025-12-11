import React from 'react';
import './SplashScreen.css';

const SplashScreen = ({ show = true, duration = 3500 }) => {
  if (!show) return null;

  return (
    <div className="splash-screen" style={{ animationDelay: `${duration - 500}ms` }}>
      <div className="splash-content">
        <img src="/bei.png" alt="bei" className="splash-char splash-bei" />
        <img src="/jing.png" alt="jing" className="splash-char splash-jing" />
        <img src="/hua.png" alt="hua" className="splash-char splash-hua" />
        <img src="/ku.png" alt="ku" className="splash-char splash-ku" />
      </div>
    </div>
  );
};

export default SplashScreen;
