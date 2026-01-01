import React from 'react';
import Header from '../components/Header';
import EnvelopeDesigner from '../components/envelope/EnvelopeDesigner';
import './EnvelopePage.css';

const EnvelopePage = () => {
  return (
    <>
      <Header />
      <div className="envelope-page">
        <EnvelopeDesigner />
      </div>
    </>
  );
};

export default EnvelopePage;
