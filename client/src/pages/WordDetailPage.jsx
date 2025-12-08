import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import wordService from '../services/wordService';
import Header from '../components/Header';
import './WordDetailPage.css';

const WordDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  // Grammar category mapping - English to Chinese
  const grammarCategoryMap = {
    'Noun': '名词',
    'Verb': '动词',
    'Adjective': '形容词',
    'Adverb': '副词',
    'Pronoun': '代词',
    'Preposition': '介词',
    'Conjunction': '连词',
    'Interjection': '感叹词',
    'Particle': '助词',
    'Measure Word': '量词',
    'Number': '数词'
  };

  useEffect(() => {
    const fetchWord = async () => {
      try {
        setLoading(true);
        const response = await wordService.getWordById(id);
        // API returns { success: true, data: {...} }
        const wordData = response.data || response;
        setWord(wordData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWord();
  }, [id]);

  const togglePage = () => {
    setShowSecondPage(!showSecondPage);
  };

  const handleAudioPlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlayingAudio(true);
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlayingAudio(false);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlayingAudio(false);
  };

  // Build pinyin display with tone marks
  const renderPinyin = () => {
    if (!word || !word.syllables || word.syllables.length === 0) {
      return word?.pinyin || '';
    }

    return word.syllables.map((syl, idx) => (
      <span key={idx} className="pinyin-syllable">
        {syl.syllable}
        {idx < word.syllables.length - 1 ? ' ' : ''}
      </span>
    ));
  };

  if (loading) {
    return (
      <div className="word-detail-page">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="word-detail-page">
        <div className="error">Error: {error}</div>
        <button onClick={() => navigate('/')}>← back to gallery</button>
      </div>
    );
  }

  if (!word) {
    return (
      <div className="word-detail-page">
        <div className="error">Word not found</div>
        <button onClick={() => navigate('/')}>← back to gallery</button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="word-detail-page">
        {/* Navigation buttons */}
        <div className="nav-buttons">
        <button onClick={() => navigate('/')} className={`back-button ${showSecondPage ? 'switched' : ''}`}>
          <span className="button-chinese">返回</span>
          <span className="button-english">back</span>
        </button>
        <button onClick={togglePage} className={`toggle-page-button ${showSecondPage ? 'switched' : ''}`}>
          {showSecondPage ? (
            <>
              <span className="button-chinese">看看例子</span>
              <span className="button-english">examples</span>
            </>
          ) : (
            <>
              <span className="button-english">term</span>
              <span className="button-chinese">看看词</span>
            </>
          )}
        </button>
      </div>

      {/* Two-page sliding container */}
      <div
        ref={containerRef}
        className={`pages-container ${showSecondPage ? 'show-second' : ''}`}
      >
        {/* First Page - Main Word Display */}
        <div className="page page-one">
          <div className="word-content">
            {/* Grammar Category in Chinese */}
            {word.grammar_category && (
              <div className="grammar-tag-chinese">
                {grammarCategoryMap[word.grammar_category] || word.grammar_category}
              </div>
            )}

            {/* Chinese (Putonghua) Definition */}
            <div className="definition-item definition-item-chinese">
              <div className="definition-text putonghua">
                {word.putonghua_definition}
              </div>
            </div>

            {/* Chinese Characters - Large */}
            <div className="chinese-characters">
              {word.chinese_characters}
            </div>

            {/* Pinyin */}
            <div className="pinyin-display">
              {renderPinyin()}
            </div>

            {/* Audio Button */}
            {word.audio_file_path && (
              <div className="audio-section">
                <button
                  onClick={handleAudioPlay}
                  className={`audio-play-button ${isPlayingAudio ? 'playing' : ''}`}
                >
                  {isPlayingAudio ? '⏸' : '🔊'}
                </button>
                <audio
                  ref={audioRef}
                  src={`http://localhost:3001${word.audio_file_path}`}
                  onEnded={handleAudioEnded}
                  preload="metadata"
                />
              </div>
            )}

            {/* English Definition */}
            <div className="definitions">
              <div className="definition-item definition-item-english">
                <div className="definition-text english">
                  {word.english_definition}
                </div>
              </div>
            </div>

            {/* Grammar Category Tag */}
            <div className="grammar-tag-large">
              {word.grammar_category}
            </div>
          </div>
        </div>

        {/* Second Page - Examples */}
        <div className="page page-two">
          <div className="examples-page-content">
            <h2 className="examples-title">Example Usage</h2>

            <div className="examples-list">
              {word.examples && word.examples.length > 0 ? (
                word.examples.map((example, idx) => (
                  <div key={idx} className="example-box">
                    <div className="example-chinese">
                      {example.chinese_sentence}
                    </div>
                    {example.english_translation && (
                      <div className="example-english">
                        {example.english_translation}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="no-examples-message">
                  No example sentences yet.
                </div>
              )}
            </div>

            <button
              onClick={() => navigate(`/words/${word.id}/add-example`)}
              className="add-example-link"
            >
              + Add Another Example
            </button>
          </div>
        </div>
      </div>

      {/* Page indicator dots */}
      <div className="page-indicators">
        <div className={`indicator ${!showSecondPage ? 'active' : ''}`} onClick={() => setShowSecondPage(false)} />
        <div className={`indicator ${showSecondPage ? 'active' : ''}`} onClick={() => setShowSecondPage(true)} />
      </div>
      </div>
    </>
  );
};

export default WordDetailPage;
