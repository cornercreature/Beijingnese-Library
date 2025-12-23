import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Header />
      <div className="about-page-content">
        <h1>关于我们</h1>
        <h2>about us</h2>
        <div className="about-text">
          <span className="text-chinese">
            北京话库
是一个收集和记录北京话的双语项目。<br></br>
我们希望通过我们的网站让更多国内 <br></br>
以及国外的人听到北京话。
<br></br><br></br>
希望这次阅读能为您带来些北京的气息。
          </span>
          <br></br><br></br>
          <span className="text-english">
            Běi Jīng Huà Kù
is a bilingual initiative for<br></br>the collection and documentation of <br></br>beijing hua, the beijing local dialect.
<br></br><br></br>
We hope this brings you closer to beijing.
          </span>
        </div>
        <div className="colophon">
          <div className="colophonheader">made by</div>
          Nicole Sun
          <br></br><br></br>
          <div className="colophonheader">advised by</div>
          Qingyang Chen
          <br></br><br></br>
          <div className="colophonheader">special thanks to</div>
          Adonis<br></br>
          Chijun <br></br>
          Claire<br></br>
          Dad<br></br>
          Dada <br></br>
          Dora<br></br>
          方兆吉<br></br>
          Grace<br></br>
          Henry<br></br>
          Liam<br></br>
          老花眼 <br></br>
          Nina<br></br>
          Sarah <br></br>
          吴大大 <br></br>
          微 <br></br>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
