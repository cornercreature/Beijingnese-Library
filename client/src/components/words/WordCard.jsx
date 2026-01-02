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
  const API_BASE = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:3001';

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

  // Helper to get the correct audio URL
  const getAudioUrl = (audioPath) => {
    if (!audioPath) return '';
    // If it's already a full URL (Cloudinary), use it directly
    if (audioPath.startsWith('http')) return audioPath;
    // Otherwise, prepend API_BASE for local paths
    return `${API_BASE}${audioPath}`;
  };

  return (
    <Link to={`/words/${word.id}`} className="word-card">
      <div className="word-card-content">
        <DynamicPinyin word={word} />

        {word.audio_file_path && (
          <>
            <audio
              ref={audioRef}
              src={getAudioUrl(word.audio_file_path)}
              preload="none"
            />
          </>
        )}
      </div>
    </Link>
  );
};

export default WordCard;
