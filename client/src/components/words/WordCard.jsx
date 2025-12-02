import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import DynamicPinyin from './DynamicPinyin';
import './WordCard.css';

/**
 * WordCard Component
 * Displays a word in the gallery grid
 */
const WordCard = ({ word }) => {
  const audioRef = useRef(null);

  const handleAudioClick = (e) => {
    e.preventDefault(); // Prevent navigation to detail page
    e.stopPropagation();

    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset to beginning
      }
    }
  };

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
          <>
            <button
              className="audio-indicator"
              onClick={handleAudioClick}
              title="Click to play audio"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'inherit',
                padding: 0
              }}
            >
              🔊
            </button>
            <audio
              ref={audioRef}
              src={`http://localhost:3001${word.audio_file_path}`}
              preload="none"
            />
          </>
        )}
      </div>
    </Link>
  );
};

export default WordCard;
