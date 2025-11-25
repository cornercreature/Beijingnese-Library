import React from 'react';
import { Link } from 'react-router-dom';
import DynamicPinyin from './DynamicPinyin';
import './WordCard.css';

/**
 * WordCard Component
 * Displays a word in the gallery grid
 */
const WordCard = ({ word }) => {
  return (
    <Link to={`/words/${word.id}`} className="word-card">
      <div className="word-card-content">
        <DynamicPinyin word={word} />

        <div className="word-card-details">
          <p className="english-def">{word.english_definition}</p>
          <p className="putonghua-def">{word.putonghua_definition}</p>
          <span className="grammar-tag">{word.grammar_category}</span>
        </div>

        {word.audio_file_path && (
          <div className="audio-indicator">
            🔊
          </div>
        )}
      </div>
    </Link>
  );
};

export default WordCard;
