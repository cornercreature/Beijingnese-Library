import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import EnvelopeDesigner from '../components/envelope/EnvelopeDesigner';
import './SharePage.css';

const SharePage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="share-page">
      <Header />
      <div className="share-page-content">
        <EnvelopeDesigner
          wordData={null}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default SharePage;
